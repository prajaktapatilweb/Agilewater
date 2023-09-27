import React from 'react'
import Leaderaccord from './Leaderaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject} />
        </div>
    )
}
