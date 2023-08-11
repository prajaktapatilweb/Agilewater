import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import Archaccord from './Archaccord'

export default function MainArchaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Archaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
