import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroPopm() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/POPM.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading=' SAFe POPM Certification, SAFe Product Owner/Product Manager'
                list1={[
                    '2 Days of Classroom Training',
                    '100% Assured Results',
                    'Insightful Study Material',
                    'Small Batch Size',
                ]}
            />
        </div>
    )
}
