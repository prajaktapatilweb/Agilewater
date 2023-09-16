import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import CertScrumaccord from './CertScrumaccord'

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
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
