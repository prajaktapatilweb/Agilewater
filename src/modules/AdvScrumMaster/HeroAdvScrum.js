import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroAdvScrum() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ACSM1.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Advanced Certified Scrum Master Training'
                list1={[
                    '2 Days of Classroom / Online Training',
                    ' 100% Assured Results',
                    'Build on your foundational knowledge',
                    'Self-paced training to suit your schedule'

                ]}
            />
        </div>
    )
}
