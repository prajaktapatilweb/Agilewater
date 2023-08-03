import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroSMC() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/smc.webp'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Scrum Master Certified (SMC) Certification Training'
                list1={[
                    'Videos of all concepts, Terms and Definitions, Interactive Case Study, Reference Material and more',
                    'Proctored Online SMC Certification Exam (120 minutes, 100 Questions)',
                    'SMC Certificate will be provided on successfully passing the exam',
                    '100% Assured Results',
                ]}
            />
        </div>
    )
}
