import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import AtScaleaccord from './AtScaleaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

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

            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
