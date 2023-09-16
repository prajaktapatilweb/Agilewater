import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroSPOC() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/spoc.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Scrum Product Owner Certified (SPOC®) Certification Training'
                list1={[
                    'Videos of all concepts, Terms and Definitions, Interactive Case Study, Reference Material and more',
                    'Proctored Online SPOC Certification Exam (180 minutes, 140 Questions)',
                    'SPOC Certificate will be provided on successfully passing the exam',
                ]}
            />

        </div>
    )
}
