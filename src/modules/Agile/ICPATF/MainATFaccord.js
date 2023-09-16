import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import ATFaccord from './ATFaccord'

export default function MainATFaccord() {
    var DetailObject = [
        {
            heading: " ICP-ATF Training FAQs :",
            para: '',
            comp: <ATFaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
