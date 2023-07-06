import PricingCard from 'modules/commanmodules/PricingCard'
import Image from 'next/image';
import React from 'react'

export default function SafePricingcard() {

    return (
        <div>
            <PricingCard
                heading=' Leading SAFe® 6.0 / SAFe® 6.0 Agilist Certification'
                img={
                    <Image
                        src={'/assets/images/Safe/priceimg.png'}
                        width={200}
                        height={80}
                        layout="responsive"
                        alt=""
                    />

                }

            >

            </PricingCard>

        </div>
    )
}
