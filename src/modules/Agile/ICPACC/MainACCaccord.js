import React from 'react'
import ACCaccord from './ACCaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainACCaccord() {
    var DetailObject = [
        {
            heading: "ICP-ACC Training FAQs :",
            para: '',
            comp: <ACCaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>

        </div>
    )
}
