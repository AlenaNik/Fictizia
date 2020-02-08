import React, {useContext} from 'react'
import AppContext from './theme-context';

const Button = props => {
    const context = useContext(AppContext)

    return(
        <div>
            {context.language === 'es' ? 'Texto en castellano' : 'Text in english'}
        </div>
    )
}

export default Button