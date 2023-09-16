import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroPack() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/ICPack.webp'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Agile Coach - Shu - Ha- Ri Package'
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
