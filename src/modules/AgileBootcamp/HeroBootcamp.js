import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroBootcamp() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ICPlogo1.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Enterprise Agile Coach Masterclass'
                list1={[
                    'Classroom / Online Training',
                    '100% Assured Results',
                    'Internationally Acclaimed Trainer',
                    'Insightful Study Material',
                    'Small Batch Size',

                ]}
            />
        </div>
    )
}
