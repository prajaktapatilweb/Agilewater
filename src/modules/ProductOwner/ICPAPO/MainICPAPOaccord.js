import React from 'react'
import ICPAPOaccord from './ICPAPOaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainICPAPOaccord() {
    var DetailObject = [
        {
            heading: "FAQs :",
            para: '',
            comp: <ICPAPOaccord></ICPAPOaccord>
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
