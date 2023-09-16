import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroTBR() {
    return (
        <div>
            <Herosection

                image1='/assets/images/courselogo/TBR.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='TBR (Training From Back of the Room)'
                list1={[
                    'Checklists for designing PowerPoint slides/presentations',
                    '100% Assured Results',
                    'Extensive learning opportunities',
                    'Insightful Study Material .',
                ]}
            />

        </div>
    )
}
