import React from 'react'
import Leaderaccord from './Leaderaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainLeaderaccord() {
    var DetailObject = [
        {
            heading: "FAQs :",
            para: '',
            comp: <Leaderaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
