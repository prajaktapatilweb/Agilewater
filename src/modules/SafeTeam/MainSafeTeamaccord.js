import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import SafeTeamaccord from './SafeTeamaccord'

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
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
