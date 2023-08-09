import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroCloudTech() {
    return (
        <div>
            <Herosection

                image1='/assets/images/courselogo/TechnologyCloud.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Cloud Technology Associate'
                list1={[
                    'Introduction to Cloud Services Model',
                    '100% Assured Results',
                    'Cloud Security, Risk, Compliance, and Governance',
                    'Cloud Service Management .',
                ]}
            />

        </div>
    )
}
