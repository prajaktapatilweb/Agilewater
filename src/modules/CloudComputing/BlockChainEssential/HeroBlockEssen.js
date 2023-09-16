import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroBlockEssen() {
    return (
        <div>
            <Herosection

                image1='/assets/images/courselogo/Blockchain-Essentials.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Blockchain Essentials'
                list1={[
                    'Explain how a blockchain works',
                    '100% Assured Results',
                    'Identify blockchain vulnerabilities',
                    'Blockchain Innovations .',
                ]}
            />

        </div>
    )
}
