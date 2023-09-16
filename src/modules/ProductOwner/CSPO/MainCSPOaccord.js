import React from 'react'
import CSPOaccord from './CSPOaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainCSPOaccord() {
    var DetailObject = [
        {
            heading: "CSPO FAQs :",
            para: '',
            comp: <CSPOaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
