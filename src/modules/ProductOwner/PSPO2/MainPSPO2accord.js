import React from 'react'
import PSPO2accord from './PSPO2accord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
