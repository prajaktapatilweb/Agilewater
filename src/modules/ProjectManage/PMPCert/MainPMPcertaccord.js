import React from 'react'
import PMPCertaccord from './PMPCertaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

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
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
