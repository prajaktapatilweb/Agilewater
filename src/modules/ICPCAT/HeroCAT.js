import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroCAT() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ICP-CAT.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='ICAgile-Coaching Agile Transitions'
                list1={[
                    '3 Days of Classroom / Online Training',
                    '100% Assured Results',
                    'ICP-CAT Certification (Lifetime Validity)',
                    'Use Hardcopy of the material',

                ]}
            />

        </div>
    )
}
