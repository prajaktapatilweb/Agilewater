import { Container, List, ListItem, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import React from 'react'

export default function RefundPolicy() {
    return (
        <div>
            <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10, marginBottom: 10 }}>
                <Typography variant='h1' gutterBottom> Refund Policy</Typography>
                Thank you for your interest in our courses. Whether it's instructor-led or self-paced training, we make sure our users have a positive experience while discovering, evaluating, and purchasing our courses.<br></br>
                The Refund Policy, like any other online purchase, is subject to terms and limitations. You agree to our Privacy Policy, Terms of Use, and refund policy when you purchase a training course on AgileWaters.<br></br><br></br>

                <b>The following is our refund policy:</b><br></br><br></br>
                Online Training Cancellation & Refunds<br></br><br></br>
                <List>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>For self-paced learning, submit a refund request within seven days of the course's purchase. If the participant has accessed more than 25% of the information or downloaded the E-Book, the money return promise is void. Any refund request made more than seven days after purchasing the course will be denied, and no refund will be issued.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>For instructor-led training, submit a refund request within seven days after the course's purchase. If a participant has viewed more than 25% of any e-learning course's content or has attended Online Classrooms/received recordings for more than 1 day, the money return guarantee is void.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>Furthermore, if a consumer downloads the course's E-Book, the money-back promise will be nullified. Any refund request made more than seven days after purchasing the course will be denied, and no refund will be issued.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>Postgraduate programme refund requests must be received within seven days of the program's purchase date. The money-back guarantee is void if a participant requests a refund more than 7 days after buying the course. Refund requests will not be handled or provided after the 7-day timeframe has passed. Regardless of the aforementioned, the participant's booking fee is non-refundable under any circumstances.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>AgileWaters retains the right to postpone/cancel an event, or modify the venue of an event, due to insufficient enrollments, instructor illness, or force majeure occurrences(like floods, earthquakes, political instability, etc)</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>If Agile Waters cancels an event, the delegate will receive a full refund if the refund request is made within 10 days of the course purchase. However, learners/participants will not be reimbursed for travel, logistics, or any other personal expenses.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>If AgileWaters cancels or postpones an event, participants who are more than 10 days ahead of schedule will, of course, be rescheduled to any subsequent batch at no additional cost.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>If a delegate cancels 10 business days (or more) before the event, 10% of the total paid cost will be removed, with the remaining money being reimbursed to the delegate.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>There will be no reimbursements if a delegate cancels fewer than 10 business days (or less) before the event.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>Participants who fail to attend both days of the course will not be eligible for a refund or credit.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>If you have purchased more than one item, please contact our customer service staff via the website's Help & Support section.</ListItem>
                </List>

                <b>Refunds: Payment made twice</b><br></br><br></br>
                <List>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>The refund of the delegate's duplicate payment will be executed via the same source (original means of payment) within 10 working days of the customer's notification. We may deduct any transaction or conversion fee if deducted by the Payment handler/gateway.</ListItem>
                    <ListItem><ArrowRightIcon></ArrowRightIcon>AgileWaters retains the right to make changes to this policy's terms and conditions at any time and without notice.</ListItem>
                </List>
                Note: All refund requests will be processed within 10 working days of receipt.

            </Container>
        </div>
    )
}
