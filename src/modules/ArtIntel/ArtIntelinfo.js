import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function ArtIntelinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Artificial Intelligence Essentials'
        },

        {
            type: 'para',
            text: [
                'Artificial Intelligence (AI) is a methodology for using a non-human system to learn from experience and imitate human intelligent behavior. The EXIN BCS Artificial Intelligence Essentials exam tests a candidate’s knowledge and understanding of the terminology and the general principles. This syllabus covers the potential benefits; types of Artificial Intelligence; the basic process of Machine Learning (ML); the challenges and risks associated with an AI project, and the future of AI and Humans in work.'
            ],
        },
    ]


    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div>
    )
}
