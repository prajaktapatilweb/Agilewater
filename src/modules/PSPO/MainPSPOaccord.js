import React from 'react'
import PSPOaccord from './PSPOaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainPSPOaccord() {
    var DetailObject = [
        {
            heading: "PSPO FAQs :",
            para: '',
            comp: <PSPOaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
