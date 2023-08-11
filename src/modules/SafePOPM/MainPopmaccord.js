import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import Popmaccord from './Popmaccord'

export default function MainPopmaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Popmaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
