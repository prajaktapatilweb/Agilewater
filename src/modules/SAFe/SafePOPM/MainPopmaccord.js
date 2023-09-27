import React from 'react'
import Popmaccord from './Popmaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainPopmaccord() {
    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Popmaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject}></SingleAccordian>
        </div>
    )
}
