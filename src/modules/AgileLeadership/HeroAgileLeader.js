import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroAgileLeader() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/AgileLeadershipJourney.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Agile Leadership Journey™'
                list1={[
                    'Agile Leadership Journey™ develops more creative, adaptive and resilient leaders',
                    'Our leadership training programs provide leaders tools to understand and shape their organization or team-based culture for agility and change.',
                    'Rather than teaching agile methods to leaders, we teach leadership that fosters more agile ways of working.',
                ]}
            />

        </div>
    )
}
