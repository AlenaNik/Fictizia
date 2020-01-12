import React, {Component} from 'react'
import axios from 'axios'


class Task extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/todos'
        axios.get(url)
            .then(res => {
                const items = res.data;
                this.setState({ items })
            })
            .catch(err => console.log(err, 'its been an error'))
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h1>I'm from the call</h1>
                {items.map(item => (
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.title}</li>
                    </ul>
                ) )}
            </div>
        );
    }
}

export default Task;
