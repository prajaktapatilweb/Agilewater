import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroACSPO() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ACSPO.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Advanced Certified Scrum Product Owner'
                list1={[
                    '2-day Advanced Level Course',
                    'Manage multiple business initiatives',
                    'Define a clear product vision',
                    'Increase your credibility',
                ]}
            />
        </div>
    )
}
