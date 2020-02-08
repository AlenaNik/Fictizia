import React, {useContext} from 'react'
import AppContext from './theme-context';

export default props => {
    const context = useContext(AppContext)
    return (
    <div>
    <button onClick={() => context.changeLanguage(context.language === 'es' ? 'eng' : 'es')}>
        {context.language === 'es' ? 'cambiar idioma' : 'cnahge language'}
       </button>
    </div>
    )}
