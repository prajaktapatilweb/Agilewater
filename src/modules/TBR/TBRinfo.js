import CourseinfoCopy from 'modules/commanmodules/Courseinfocopy'
import React from 'react'

export default function TBRinfo() {
    var DetailObject = [
        {
            type: 'title',
            text: 'Training From Back of the Room - TBR Certificate'
        },

        {
            type: 'para',
            text: [
                'Nowadays, learning/training consists of being thrown a dozen concepts, memorising them, and taking a test to become certified. Despite the fact that it adds value to resumes, only a few people are chosen for the skill set for which they have been certified and applied. And a select number that are employed suffer (and make their teams suffer) on the job as a result of a lack of desired skills, experience, and performance for the job they were hired for.',

                'Many times, training consists of scrolling through lengthy PowerPoint presentations, complicated training materials, limited time, information overload, and failing to reflect today\'s young people\'s learning styles. They also overlook the need of understanding what happens after training and fail to teach crucial concepts that will meet current industry trends. Unfortunately, even before the training is completed, the majority of the information is forgotten.',

            ],
        },
        {
            type: 'title',
            text: 'About Training from Back of the Room (TBR)'
        },
        {
            type: 'para',
            text: [
                'TBR (Training from the Back of the Room) is a novel approach to making learning simple, in real time, and in a collaborative environment, using enhanced approaches drawn from brain-based learning styles. It truly assists development by unleashing untapped inner potential and exposes them to a new dimension of their inner self in ways they never imagined.',

                'TBR training teaches you how to teach a material in a way that sticks. It entails a brief topic-related activity that can be incorporated into any class, training session, or workshop. It also looks at how the human brain actually learns and provides dozens of brain-based educational tactics that can be used with any topic and any group of students.',
            ]
        },
        {
            type: 'title',
            text: 'Group management techniques are also covered in the TBR Certificate.'
        },
        {
            type: 'items',
            text: [
                'Checklists for designing PowerPoint slides/presentations',
                'How do you keep the audience\'s attention and keep them engaged?',
                'Prince2 Foundation Certificate',
                'Extensive learning opportunities',
                'Remember what you\'ve learned.',
                'Engage even the most averse students.',
            ]
        },

        {
            type: 'title',
            text: 'Back of the Room Training\'s Training Objectives'
        },
        {
            type: 'items',
            text: [
                'Six brain-based learning concepts that improve learning and retention, regardless of material complexity',
                'How to put the six principles into practise in any learning situation',
                'Learn how to build an engaging atmosphere that encourages high levels of cooperation and learning.',
                'Utilize both creativity and coordination to boost learning by combining technology and brain science.',
                'Examine how the human brain learns and how it differs from standard learning theories.',
                'Gain access to fresh resources that will help you improve your understanding and skills in current brain science on human learning.',
                'Learn how to educate, train, or coach people using practical, brain-based tactics.',
                'Integrate Agile and Scrum methods and concepts with accelerated learning to produce dynamic, enjoyable, collaborative, and memorable learning experiences if you teach Agile or Scrum courses.',
            ]
        },
        {
            type: 'title',
            text: 'TBR Certificate\'s Target Audience'
        },
        {
            type: 'para',
            text: [
                'The TBR certificate course is the ideal method to improve your TBR techniques and learn new ways to present a visually appealing and engaging webinar.The majority of people would benefit.'
            ]
        },
        {
            type: 'items',
            text: [
                'Anyone who is responsible for offering formal or on - the - fly training, such as a Scrum Master or a Coach, does so.',
                'Anyone who wants to improve their training.',
                'Anyone who wants to leave a lasting impression on their students\' hearts and minds.',
                'Professors of higher education and school teachers',
                'Trainers for businesses',
                'People who want to make a career out of training.',
                'Product owners who lead customer design sessions',
                'Trainers who train trainers are referred to as "trainers who train trainers.',
            ]
        },

        {
            type: 'title',
            text: 'What Are The Benefits To You?'
        },
        {
            type: 'items',
            text: [
                'Training from the BACK of the Room!" by Sharon Bowman is a best-selling book. 65 Ways to Remove Yourself from the Situation and Allow Them to Learn',
                'Using Brain Science to Make Training Stick" is Sharon\'s newest book.',
                'The participant workbook contains numerous exercises to "...Make Training Stick.',
                'An updated trainer\'s \'tool kit\' of brain-based, practical (but not overly complicated) teaching tactics that you may apply right now in your own training programmes and teams.',
                'A set of "brain activation items" - awards, training keepsakes, and learning aids — that the participant can employ in their own training programmes.',
                'A certificate of achievement that can be framed',
                'The chance to meet and collaborate with other TBR practitioners during and after the training.',
            ]
        },
        {
            type: 'para',
            text: [
                'If you\'re a teacher, trainer, facilitator, or coach, you should learn TBR strategies to improve your effectiveness. It also addresses many methods for creating a great webinar that is also interactive.',
                'Furthermore, the TBR Certificate classes are a lot of fun, offer the best experience, and are constantly high - energy.It\'s tough to explain; you have to experience it for yourself.'
            ]
        }
    ]
    return (
        <div>
            <CourseinfoCopy DetailObject={DetailObject}></CourseinfoCopy>
        </div >
    )
}
