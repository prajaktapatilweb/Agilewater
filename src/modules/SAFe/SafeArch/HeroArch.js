import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroArch() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/SafeArch.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='SAFe for Architects (ARCH)'
                list1={[
                    '3 Days of Classroom Training',
                    '100% Assured Results',
                    'Insightful Study Material',
                    'Small Batch Size',
                ]}
            />
        </div>
    )
}
