import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroCSPSM() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/CSP-SM.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Certified Scrum Professional ScrumMaster®'
                list1={[
                    '2-day Advanced Level Course',
                    'Scrum Master Core Competencies',
                    'Service to the Product Owner',
                    'Service to the Organization',
                ]}
            />
        </div>
    )
}
