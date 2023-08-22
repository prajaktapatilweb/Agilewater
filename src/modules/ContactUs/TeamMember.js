import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import React from 'react'

const TeamMember = ({ item }) => {
    return (
        <div>
            <section id="team" className="team-area section">
                <div className="item">
                    <div className="thumb">
                        <Image className="img-fluid" src={item.img} alt={'Course ' + item.id} width={200} height={200} layout='responsive'></Image>
                        <div className="overlay">
                            <h4>{item.nm}</h4>
                            <p>
                                {item.info}
                            </p>
                            <div className="social">
                                <ul>
                                    <li className="twitter">
                                        <a href="#"><TwitterIcon /></a>
                                    </li>
                                    <li className="pinterest">
                                        <a href="#"><FacebookIcon /></a>
                                    </li>
                                    <li className="instagram">
                                        <a href="#"><InstagramIcon /></a>
                                    </li>
                                    <li className="vimeo">
                                        <a href="#"><LinkedInIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <span className="message">
                            <a href="#"><ArrowCircleUpIcon /></a>
                        </span>
                        <h4>{item.nm}</h4>
                        <span>{item.post}</span>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default TeamMember;