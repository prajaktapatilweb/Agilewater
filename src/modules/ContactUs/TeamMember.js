import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function TeamMember() {
    return (
        <div>
            <section id="team" className="team-area section">
                <Container>
                    <Grid container spacing={3}>
                        <Grid xs={12}>

                            <h2>Our <span>Team</span></h2>


                        </Grid>

                        <Grid xs={12} md={4}>
                            <div className="item">
                                <div className="thumb">
                                    <Image className="img-fluid" src='/assets/images/coach/ali-sohail.webp' width={200} height={200} layout='responsive' alt="Thumb"></Image>
                                    <div className="overlay">
                                        <h4>Lorem Ipsum</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <span className="message">
                                        <a href="#"><i className="fas fa-envelope-open"></i></a>
                                    </span>
                                    <h4>Lorem Ipsum</h4>
                                    <span>Project Manager</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} md={4}>
                            <div className="item">
                                <div className="thumb">
                                    <Image className="img-fluid" src='/assets/images/coach/ali-sohail.webp' width={200} height={200} layout='responsive' alt="Thumb"></Image>
                                    <div className="overlay">
                                        <h4>Lorem Ipsum</h4>
                                        <p>
                                            kING.
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <span className="message">
                                        <a href="#"><i className="fas fa-envelope-open"></i></a>
                                    </span>
                                    <h4>Lorem Ipsum</h4>
                                    <span>App Developer</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} md={4}>
                            <div className="item">
                                <div className="thumb">
                                    <Image className="img-fluid" src='/assets/images/coach/ali-sohail.webp' width={200} height={200} layout='responsive' alt="Thumb"></Image>
                                    <div className="overlay">
                                        <h4>Lorem Ipsum</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <span className="message">
                                        <a href="#"><i className="fas fa-envelope-open"></i></a>
                                    </span>
                                    <h4>Lorem Ipsum</h4>
                                    <span>Web designer</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}
