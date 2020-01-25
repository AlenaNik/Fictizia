import React, {Component} from 'react'
import './App.css'


const products = [
    {
        id: 1,
        name: "hat",
        price: 200
    },
    {
        id: 2,
        name: "skirt",
        price: 400
    },
    {
        id: 3,
        name: "pants",
        price: 800
    }
]
class App extends Component {
state = {
    productsInCart: [],
    coupon: '',
    isValid: true
}

addProduct = (product) => {
    const products = [...this.state.productsInCart, product];
    this.setState({
        productsInCart: products
    })
}

handleRemove = (product) => {
    let productsToRemove = this.state.productsInCart.filter(p => p !== product)
    this.setState({
        productsInCart: productsToRemove
    })
}

calculateTotalPrice = () => {
    let total = this.state.productsInCart.reduce((acc, curr) => acc + curr.price, 0);
    if (this.state.isValid) {
        total = total * 0.9
    }
    return total
}

handleInputChange = (e) => {
    this.setState({
        coupon: e.target.value
    })
}
    verifyCoupon = () => {
    if (this.state.coupon === "SAVE10") {
        this.setState({
            isValid: true })
    } else {
        alert("Something went wrong!")
    }
    }

    render() {
        return (
            <>
                {products.map(product =>
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.price}$</p>
                        <button onClick={() => this.addProduct(product)}>Add to card</button>
                    </div>
                )}

                <hr />
                Card: <span>Total {this.calculateTotalPrice()}$</span>
                <ul>
                {this.state.productsInCart.map((productInCard, key) =>
                    <li key={key}>
                        <h1>{productInCard.name}</h1>
                        <p>{productInCard.price}$</p>
                        <button onClick={() => this.handleRemove(productInCard)}>Remove</button>
                    </li>
                )}
                </ul>
                <br/>
                Enter the cupon code:
                <input type="text"
                       placeholder="type here"
                       value={this.state.coupon}
                       onChange={this.handleInputChange}
                />
                <button onClick={this.verifyCoupon}>Verify coupon</button>
                <br/>

            </>
        )
    }

}

export default App;
