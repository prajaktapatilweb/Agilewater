import { Container, Grid, Typography } from '@mui/material'
import { headList1 } from 'modules/Constant/titlefile'
import ExpertForm from 'modules/Forms/ExpertForm'
import Heading from 'modules/commanmodules/Heading'
import React from 'react'
import HomeFeature from './HomeFeature'

export default function Registerform() {
    return (
        <div>
            <Grid className='section section-lg' sx={{ background: 'white' }}>

                <HomeFeature></HomeFeature>

            </Grid>
        </div>
    )
}
