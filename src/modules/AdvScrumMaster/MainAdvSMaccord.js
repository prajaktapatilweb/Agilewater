import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import AdvSMaccord from './AdvSMaccord'

export default function MainAdvSMaccord() {
    var DetailObject = [
        {
            heading: "A-CSM Training FAQs :",
            para: '',
            comp: <AdvSMaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
