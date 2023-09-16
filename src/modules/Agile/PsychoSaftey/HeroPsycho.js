import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroPsycho() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/psycho.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Psychological Safety - The Foundation for Team Performance'
                list1={[
                    'Understanding psychological safety as a concept',
                    'Learning how to use the 4 stages of psychological safety framework',
                    'Aligning their team with common language, understanding, and conceptual framework',
                    'Developing an action plan and next steps for each stage',

                ]}
            />
        </div>
    )
}
