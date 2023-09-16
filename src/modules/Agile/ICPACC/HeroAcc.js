import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroAcc() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ICP-ACC.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='ICP ACC - Agile Coaching Certification'
                list1={[

                    '3 Days of Classroom Training',
                    '100% Assured Results',
                    'ICP-ACC Certification (lifetime validity)',
                    'Use Hard copy of the material',
                    'Small Batch Size',

                ]}
            />
        </div>
    )
}
