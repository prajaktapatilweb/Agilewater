import React from 'react'
import PSPOaccord from './PSPOaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
