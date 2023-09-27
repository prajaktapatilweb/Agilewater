import React from 'react'
import CertScrumaccord from './CertScrumaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainCertScrumaccord() {
    var DetailObject = [
        {
            heading: "CSM Training FAQs :",
            para: '',
            comp: <CertScrumaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
