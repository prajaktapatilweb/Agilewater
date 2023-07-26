import Herosection from 'modules/commanmodules/Herosection';
import React from 'react';

export default function HeroSasm() {
    return (
        <div>
            <Herosection
                image1='/assets/images/courselogo/SASM.jpg'
                // /assets/images/Safe/SAFe-Agilist-Logo.png'
                heading='SAFe Advanced Scrum Master Certification'
                list1={[
                    '2 Days of Classroom Training',
                    '  100% Assured Results',
                    'Insightful Study Material',
                    'Small Batch Size',
                ]}
            />
        </div>
    );
}
