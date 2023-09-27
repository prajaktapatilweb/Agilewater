import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'
import Safeinfo from './Safeinfo'
import Safeaccord from './Safeaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'


export default function MainSafeaccord() {

    var DetailObject = [
        {
            heading: "FAQ :",
            para: '',
            comp: <Safeaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject} ></SingleAccordian>
        </div>
    )
}
