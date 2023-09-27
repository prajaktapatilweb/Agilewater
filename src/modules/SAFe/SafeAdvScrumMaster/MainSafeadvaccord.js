import React from 'react'
import Safeadvaccord from './Safeadvaccord'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
