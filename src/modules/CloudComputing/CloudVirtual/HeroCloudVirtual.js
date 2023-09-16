import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroCloudVirtual() {
    return (
        <div>
            <Herosection

                image1='/assets/images/courselogo/VirtualizationCloud.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Cloud Virtualization Essentials'
                list1={[
                    'Introduction to Virtualization',
                    '100% Assured Results',
                    'Adopting Virtualization',
                    'Operating Virtualization .',
                ]}
            />

        </div>
    )
}
