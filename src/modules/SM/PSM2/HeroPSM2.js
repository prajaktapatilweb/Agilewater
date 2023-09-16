import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroPSM2() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/PSM-2.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='PROFESSIONAL SCRUM MASTER 2'
                list1={[
                    '2-day Advanced Level Course',
                    'Clear understanding of the Scrum framework',
                    'Scrum Theory and first principles',
                    'The Scrum Master as a Change Agent',
                    'The Scrum Master as a Coach & Mentor',


                ]}
            ></Herosection>
        </div>
    )
}
