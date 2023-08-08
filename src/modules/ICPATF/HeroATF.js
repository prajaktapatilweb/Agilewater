import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroATF() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ICP-ATF.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='ICP Agile Team Facilitation Certification'
                list1={[
                    '2 to 3 Days of Classroom Training',
                    '100% Assured Results',
                    'ICP-ATF Certification (lifetime validity)',
                    'Use Hard copy of the material',
                    'Small Batch Size',
                ]}
            />
        </div>
    )
}
