import { Container, Grid, Typography } from '@mui/material'
import { headList1 } from 'modules/Constant/titlefile'
import ExpertForm from 'modules/Forms/ExpertForm'
import Heading from 'modules/commanmodules/Heading'
import React from 'react'

export default function Registerform() {
    return (
        <div>
            {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
            <Grid className='section section-lg section-shaped' sx={{ borderBottom: '5px white solid' }}>
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
                <Container maxWidth="lg" sx={{ px: 3 }}>
                    <Grid container spacing={3} alignItems='center' justifyContent='center' sx={{ position: 'relative', zIndex: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Heading data={headList1}></Heading>

                            <Typography variant='p' textAlign='justify' sx={{ color: 'white', lineHeight: 2 }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from characteristic words etc.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ExpertForm AllowedFieldArray={['Name', 'Email', 'Phone', 'Certification', 'Message']} />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}
