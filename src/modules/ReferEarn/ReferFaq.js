import { AppCard } from '@crema'
import { List, ListItem } from '@mui/material'
import Accordioninfo from 'modules/commanmodules/Accordianinfo'
import React from 'react'

export default function ReferFaq() {
    var DetailObject = [
        {

            heading: " 1.  Do I need to be a agilewaters student to refer my friends?",
            para: <span>No, every user who has signed up on agilewaters can be a part of the refer and earn program.</span>
        },
        {
            heading: "2. How do I generate a unique link or refer my friends",
            para: "Sign up for the Refer and Earn program. You can refer your friends by entering their email addresses at once or by sharing your referral links via social media."
        },
        {
            heading: "3. Who is considered as an enrolled student?",
            para: "Students who are already paid for a agilewaters course and completed or pursuing the course ."
        },
        {
            heading: "4. When will I be getting the gift vouchers?",
            para: <span>After your referred students make the full payment and fill up the application form, they have to complete 15 days from the date of activation or batch commencement date.
                <br></br>
                You should receive the gift vouchers within seven working days on completing the cooling period of 15 days.
                <br></br>
                On meeting the below criteria, you can get the vouchers.
                <br></br><br></br>
                If the referred student has successfully enrolled in our course, then he would be called as an enrolled student.
                <List>

                    <ListItem>1. The enrolled student/students should not be an existing student of agilewaters.</ListItem>
                    <ListItem>2. The enrolled student/students should not be claiming for a refund.</ListItem>
                    <ListItem>3. The net value of the course enrolled should be more than INR 25000 / $ 380 per student</ListItem>
                    <ListItem>4. The referred students should not be family members (i.e., brothers, sisters, cousins, and spouse). In such a scenario, the referee would not be eligible to refer and earn a program.</ListItem>
                </List>
                <p style={{ textAlign: 'center' }}> ** On self-enrollment using your unique link you get 1000/student
                    <br></br>
                    ( this would not be applicable for the assisted sales by agilewaters)
                </p>
            </span>
        }
    ]
    return (
        <div>
            <AppCard>
                <Accordioninfo DetailObject={DetailObject}></Accordioninfo>
            </AppCard>
        </div>
    )
}
