import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroSM() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/SM.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Scrum Master'
                list1={[

                    '2 Days of Classroom / Online Training',
                    ' 100% Assured Results',
                    'Internationally Acclaimed Trainer',
                    'Insightful Study Material',
                    'Small Batch Size',

                ]}
            />
        </div>
    )
}
