import React from 'react'
import Archaccord from './Archaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainArchaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Archaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject} />
        </div>
    )
}
