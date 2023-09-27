import React from 'react'
import POaccord from './POaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainPOaccord() {
    var DetailObject = [
        {
            heading: "Product Owner FAQs :",
            para: '',
            comp: <POaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
