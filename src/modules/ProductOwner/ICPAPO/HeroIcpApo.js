import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroIcpApo() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/Value-Driven-Product-Ownership-Logo.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='Value-Driven Product Ownership'
                list1={[
                    'Applied, hands-on learning',
                    '100% Assured Results',
                    'Applied, practical education',
                    'Utilising the newest virtual collaboration tools',
                    'Insightful Study Material',
                ]}
            />
        </div>
    )
}
