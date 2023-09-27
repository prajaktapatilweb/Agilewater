import React from 'react'
import CSPOaccord from './CSPOaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
