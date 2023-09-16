import React from 'react'
import PSPO2accord from './PSPO2accord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainPSPO2accord() {
    var DetailObject = [
        {
            heading: "PSPO2 FAQs :",
            para: '',
            comp: <PSPO2accord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
