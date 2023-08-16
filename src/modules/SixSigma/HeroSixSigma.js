import { sixsigmaList } from 'modules/Constant/Photoslider'
import Herosectioncopy from 'modules/commanmodules/Herosectioncopy'
import React from 'react'

export default function HeroSixSigma() {
    return (
        <div>
            <Herosectioncopy
                datalist={sixsigmaList}
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Our Upcoming Online Virtual Classes -'
                list1={[
                    'Gain a high degree of proficiency in executing Scrum',
                    'Trained & Certified – 4500+ Professionals',
                    'More job opportunities in IT as well as non-IT organizations.',
                    'Best Training & Coaching Feedback',
                ]}
            />

        </div>
    )
}
