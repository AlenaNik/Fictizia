import React from 'react'
import Btn from './Btn'

const MiBtn = styled(Btn)`
${props => props.primary && css `
    color: green
`}
`

export default props => {
    return (
        <MiBtn {...props} />
    )
}