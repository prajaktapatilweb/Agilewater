import React from 'react'
import Safeadvaccord from './Safeadvaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'

export default function MainSafeadvaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Safeadvaccord />
        },
    ]
    return (
        <div>
            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
