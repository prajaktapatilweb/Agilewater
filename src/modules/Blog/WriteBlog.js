import { Grid, Container, Box, Typography } from '@mui/material'
import React from 'react'
import { Fonts } from 'shared/constants/AppEnums'

export default function WriteBlog() {
    return (
        <div>
            <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div className='shape shape-style-u1 shape-dark'>
                    <span className='span-150' />
                    <span className='span-50' />
                    <span className='span-50' />
                    <span className='span-75' />
                    <span className='span-200' />
                    <span className='span-75' />
                    <span className='span-50' />
                    <span className='span-100' />
                    <span className='span-50' />
                    <span className='span-100' />
                </div>
                <Container sx={{ maxWidth: { xl: 1400 } }}>
                    <Box component='h1'
                        sx={{
                            fontWeight: Fonts.BOLD,
                            color: 'wheat',
                            position: 'relative',
                            zIndex: 1,
                        }}
                        mt={{ xs: 5, md: 5 }}
                        mb={{ xs: 2, md: 2 }}
                    >
                        Contribute to AgileWaters’s Blog
                    </Box>
                </Container>
            </Grid>
            <Container sx={{ maxWidth: { xl: 1400 }, py: 10 }}>
                Thanks for your interest in writing for AgileWaters. We always welcome and appreciate the technical writers with love, who are willing to contribute their knowledge and experience with AgileWaters. We publish helpful, well-researched articles about Agile, Scrum master, product owner, Project management, Lean Six Sigma, DevOps, and any agile methodologies. ​​If you’re an experienced writer or want to become one, we’d love to hear from you.
                <br></br>
                Please read our blog to review our style and topics we’ve already covered. We only accept submissions with a fresh angle on existing topics or new topics that will serve our audience.
                <br></br><br></br>
                <Typography variant='h3' gutterBottom> Submissions should:</Typography><br></br>
                1. Be 100% original and not published anywhere else.<br></br>
                2. Be well-written, clear, interesting, and above all, helpful.<br></br>
                3. Provide attribution for all data or statistics cited with a hyperlink.<br></br>
                4. Be educational and not overly self-promotional.<br></br>
                5. Include a one-to-two-sentence author bio with a headshot.<br></br>
                6. Include all images with citations.<br></br>
                7. Be 1,000 – 1,800 words in length<br></br>
                8. Include no more than one link to your company’s website in the body of the post<br></br><br></br>
                <Typography variant='h3' gutterBottom> How to Submit:</Typography><br></br>
                Send your completed post to <b>editor@agilewaters.com</b> with the subject line “Blog Contribution”.<br></br>

                OR<br></br>
                You can immediately start writing your blog on our user-friendly blog editor after registering on our website.<br></br>

                <b>Please note:</b> In every article, we may provide links to:<br></br>

                1. Our related courses and blogs<br></br>

                2. Tweets and YouTube videos related to the topic<br></br><br></br>

                <Typography variant='h3' gutterBottom> Terms and conditions:</Typography><br></br>
                By submitting your blog post, you consent to a non-remunerated contribution. You also agree that you are not eligible for any employee benefit plans or programs. You cannot hold yourself out as our agent or representative or attempt to bind us to any obligations. Once you submit the content to us, we have complete right over it – we may re-publish or distribute the content for marketing and promotional purposes, online or offline, in any medium and mode of delivery.

                <br></br> <br></br> <Typography variant='h3' gutterBottom> Important Caveats:</Typography><br></br>
                Editors reserve the right to reject contributions at their discretion.<br></br>
                Editors reserve the right to edit, adapt, update, and republish contributions at their discretion, and update it in the future for accuracy and comprehensiveness.<br></br>
                Calls-to-action to AgileWaters content may be added to published submissions.<br></br>
                In rare cases, contributed posts may be removed from the blog.<br></br>
                Submissions must meet the AgileWaters blogging team’s quality standards in order to get published.<br></br>
                Guest contributors may not republish their published contribution to the AgileWaters Blog in its entirety anywhere else, including to your own blog, LinkedIn, Medium, or Inbound.org afterward.<br></br>
                AgileWaters reserves the right to include calls-to-action to AgileWaters content, including but not limited to email newsletters, ebooks, and other downloadable content.<br></br>
                Thank you for your interest in contributing to the AgileWaters Blog. We look forward to receiving your work.<br></br>

            </Container>

        </div>
    )
}
