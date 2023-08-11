import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroDevMaster() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/devmaster.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='DevOps Master Certification Training'
                list1={[
                    'An advanced-level certification',
                    '100% Assured Results',
                    'Understanding of DevOps adoption, Planning, Requirements and Design, Development and Deployment, Operation and Scaling & End-of-life',
                ]}
            />

        </div>
    )
}
