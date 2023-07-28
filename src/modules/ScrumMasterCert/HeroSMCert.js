import HeroforOther from 'modules/commanmodules/HeroforOther'
import React from 'react'
import { Link } from '@mui/material'

export default function HeroSMCert() {
    var Details = [
        {
            heading: 'Scrum Master Certification Training',
            subheading: <span>We bring you Online Agile Scrum Master certifications at the best cost by best trainers. We also give you various Agile Coach & Scrum Master <Link href="" sx={{ color: 'wheat', fontWeight: 'bold' }} >job opportunities</Link> in various global companies. Get certified Scrum Master after 2 days training.</span>,
        },
        {
            heading: 'Product Owner Certifications Training',
            subheading: <span>We bring you all Agile Scrum Product Owner certification trainings under one roof with best cost, best trainers & job opportunities . Get certified after 2 days of expert online training.</span>

        },
    ]
    return (
        <div>
            <HeroforOther Details={Details} />
        </div>
    )
}
