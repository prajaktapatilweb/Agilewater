import React from 'react'
import PSMaccord from './PSMaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
