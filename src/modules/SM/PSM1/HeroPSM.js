import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroPSM() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/PSM1.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='PROFESSIONAL SCRUM MASTER 1'
                list1={[
                    '2-day Advanced Level Course',
                    'Clear understanding of the Scrum framework',
                    'Scrum Theory and first principles',
                    'Product Delivery with Scrum.',
                    'The role of Scrum Master.',

                ]}
            ></Herosection>
        </div>
    )
}
