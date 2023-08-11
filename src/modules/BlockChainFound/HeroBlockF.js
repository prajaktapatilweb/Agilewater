import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroBlockF() {
    return (
        <div>
            <Herosection

                image1='/assets/images/courselogo/Blockchain-Foundation.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Blockchain Foundation'
                list1={[
                    'Explain how a blockchain works',
                    '100% Assured Results',
                    'Blockchain Innovations',
                    'Blockchain Challenges .',
                ]}
            />

        </div>
    )
}
