import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroSafeTeam() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/SP.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='SAFe 6.0 For Teams Certification'
                list1={[
                    '2 Days of Classroom / Online Training',
                    '100% Assured Results',
                    'Trained by experienced SPC 6.0 SAFe Consultant',
                    '1 year membership to the SAFe Community Platform',
                    'Insightful Study Material',
                ]}
            />

        </div>
    )
}
