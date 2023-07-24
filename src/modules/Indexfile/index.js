import React from 'react'
import Countup from './Countup'
import { Container } from '@mui/material'
import Hero from './Hero'

export default function indexfile() {
  return (
    <div>
      <section className="events1 ">
        <section className='section' style={{ height: "100vh", backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}>
          {/* <section className='section' style={{ height: "100vh", backgroundImage: "linear-gradient(to right, rgba(61,51,204,0.6), rgba(154,219,206,0.9)" }}> */}
          <Container sx={{ marginTop: 10 }} >
            {/* <Hero /> */}
            <Countup />
          </Container>
        </section>
      </section>




    </div>
  )
}
