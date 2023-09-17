import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import ICPAPOaccord from './ICPAPOaccord'

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
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
