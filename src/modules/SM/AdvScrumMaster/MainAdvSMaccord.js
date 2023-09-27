import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import AdvSMaccord from './AdvSMaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
