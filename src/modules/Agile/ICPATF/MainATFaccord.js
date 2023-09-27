import React from 'react'
import ATFaccord from './ATFaccord'
import SingleAccordian from 'modules/commanmodules/SingleAccordian'

export default function MainATFaccord() {
    var DetailObject = [
        {
            heading: " ICP-ATF Training FAQs :",
            para: '',
            comp: <ATFaccord />
        },
    ]
    return (
        <div>
            <SingleAccordian DetailObject={DetailObject} />
        </div>
    )
}
