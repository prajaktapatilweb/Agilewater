import React from 'react'
import ACCaccord from './ACCaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainACCaccord() {
    var DetailObject = [
        {
            heading: "ICP-ACC Training FAQs :",
            para: '',
            comp: <ACCaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
