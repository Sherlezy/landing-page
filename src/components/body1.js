import React, { Component } from 'react';
import blueStars from '../assets/img/blue_stars.svg';
import bgMountains from '../assets/img/mountains_illustration2.svg';
import bgMountainsWEB from '../assets/img/mountains_illustration2WEB.svg';
import Separator from './subcomponents/separator';
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleBody1.css";
import "../assets/css/style.css";

export default class Body1 extends Component {
    render() {
        return (

            <div className="wrapper-outside-body relative offset-up-10 relative ">

                <div className='d-none d-lg-block'>
                    <div className='white-separator-xs relative offset-down-10'></div>
                </div>

                <div className='row justify-content-center mt-5' >

                    <div className='col-lg-6 col-10'>

                        <p className='font-iskra normal-text'>We are more than thrilled to announce the comeback of the Europe’s biggest winter sports event, organized by students, for students</p>

                    </div>

                </div>

                <img src={blueStars} id="blue-stars2" className='absolute overlay-1 offset-down-5 offset-right-0 d-xs-block d-lg-none' alt="Blue stars" />
                <img src={blueStars} id="blue-stars2" className='absolute overlay-1 offset-down-5 offset-right-0 mr-5 d-none d-lg-block' alt="Blue stars" />

                <div className='mt-5 overlay-1 relative'>

                    <div className='row justify-content-center'>

                        <div className='col-lg-8 col-12 row justify-content-center'>



                            <iframe id="yt-video" src="https://www.youtube.com/embed/tGLB29V_3IQ?si=q7WB4lVxGtGaHN0s"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>



                        </div>

                    </div>

                </div>

                <div className='d-none d-lg-block'>
                    <Separator number={7} ></Separator>
                </div>

                <div className='row justify-content-center relative overlay-1 mt-5' >

                    <div className='col-lg-6 col-10'>

                        <h5 className='font-iskra normal-text text-white' id="video-description" >
                            Year after year, Snowdays grew steadily and now, after more than 20 years, participants are more than 750 and they come from the best universities in Europe.
                        </h5>

                    </div>

                </div>

                <div className='d-xs-block d-lg-none'>
                    <div className='absolute offset-down-40 blue-separator-md'></div>
                </div>

                <div className='d-xs-block d-lg-none'>
                    <img src={bgMountains} className="relative offset-up-px-150" id="mountains-separator1" alt="Stylized mountains" />
                </div>


                <div className='d-none d-lg-block '>
                    <img src={bgMountainsWEB} className="relative offset-up-7" alt="Stylized mountains" />
                </div>

            </div>


        )
    }
}