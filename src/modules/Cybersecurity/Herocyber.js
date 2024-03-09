import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function Herocyber() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/cybersecurity.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'3


                heading='Cybersecurity Services'
                list1={[
                    'RISK ADVISORY AND ASSURANCE',
                    'CYBER DEFENCE',
                    'MANAGED SECURITY SERVICES',
                    'SPECIALIZE CONSULTING',
                    'VIRTUAL EXECUTIVES',

                ]}
            />
        </div>
    )
}
