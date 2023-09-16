import React from 'react'
import PSMaccord from './PSMaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainPSMaccord() {
    var DetailObject = [
        {
            heading: "PSM Training FAQs:",
            para: '',
            comp: <PSMaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
