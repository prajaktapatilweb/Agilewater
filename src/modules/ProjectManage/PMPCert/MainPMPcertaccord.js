import React from 'react'
import PMPCertaccord from './PMPCertaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainPMPcertaccord() {

    var DetailObject = [
        {
            heading: "Workshop Contents Duration: 4 Days",
            para: '',
            comp: <PMPCertaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
