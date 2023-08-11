import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import AtScaleaccord from './AtScaleaccord'

export default function MainAtScaleaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <AtScaleaccord />
        },
    ]
    return (
        <div>

            <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
        </div>
    )
}
