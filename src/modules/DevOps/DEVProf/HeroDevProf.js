import Herosection from 'modules/commanmodules/Herosection'
import React from 'react'

export default function HeroDevProf() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/devprof.png'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='DevOps Professional Certification'
                list1={[
                    'A stepping-stone to the EXIN DevOps Master certification',
                    'Three ways of DevOps Adoption',
                    'Flow, Feedback & Continual Learning and Experimentation, Information Security and Change Management',

                ]}
            />

        </div>
    )
}
