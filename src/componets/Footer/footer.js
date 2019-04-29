import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './footer.scss';

class Footer extends Component{

    render() {
        return (
            <div className="Footer">
            <div className="footerCon">
            
                <div className="col col01">
                    <div id="text-1" className="widget">
                        <p>
                            <img src="/images/eden.svg"
                                alt="edenchain" />
                        </p>
                        <p className="widget_txt">
                            Edenchain is a blockchain technology designed specifically with enterprises in mind. It is
                            fast, secure and reliable third generation blockchain platform
                        </p>
                        <p>green@edenchain.io</p>
                    </div>
                </div>

                <div className="col">

                    <div className="widget widget01">
                        <h4>WHO WE ARE</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="https://www.edenchain.io/who-we-are/about-us/">About Us</a></li>
                                <li><a href="https://www.edenchain.io/who-we-are/people/">People</a></li>
                                <li><a href="https://www.edenchain.io/who-we-are/partners-investors/">Partners/Investors</a></li>
                                <li><a href="/tos">Terms of Servicw</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget widget02 bottom-edge">
                        <h4>WHAT WE DO</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="https://www.edenchain.io/what-we-do/vision/">Vision</a></li>
                                <li><a href="https://www.edenchain.io/what-we-do/edenchain-platform/">Edenchain Platform</a></li>
                                <li><a href="https://www.edenchain.io/what-we-do/garden-of-eden/">Garden of Eden</a></li>
                                <li><a href="https://www.edenchain.io/what-we-do/helloeden/">HelloEden</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="col">

                    <div className="widget widget03">
                        <h4>HOW WE DO</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="https://www.edenchain.io/how-we-do/our-approach/">Our approach</a></li>
                                <li><a href="https://www.edenchain.io/how-we-do/go-to-market/">Go-To-Market</a></li>
                                <li><a href="https://www.edenchain.io/how-we-do/roadmap/">Roadmap</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget widget04 bottom-edge">
                        <h4>CONTACT</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="https://www.edenchain.io/contact-us/">Contact Us</a></li>
                                <li><a href="https://www.edenchain.io/edenpartners-job-opening/">Career</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="col">

                    <div className="widget widget05">
                        <h4>NEWSLETTER</h4>
                        <p>
                        If you want to subscribe to our monthly newsletter, please submit the form below.  
                        </p>
                        <button><a href="https://www.edenchain.io/newsletter/">APPLY <i className="eden-arrow-right"></i></a></button>
                    </div>

                </div>


            </div>
            </div>

        );
    }
};


export default Footer;