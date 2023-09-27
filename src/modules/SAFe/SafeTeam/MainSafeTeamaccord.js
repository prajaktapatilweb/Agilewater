import React from 'react'
import SafeTeamaccord from './SafeTeamaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainSafeTeamaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <SafeTeamaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
