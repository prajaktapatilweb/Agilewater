import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import POaccord from './POaccord'

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
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
