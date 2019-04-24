import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../SubFooter/footer.scss';

class Footer extends Component{

    render() {
        return (
            <footer>
            <div className="footerCon">
            
                <div className="col col01">
                    <div id="text-1" className="widget">
                        <p>
                            <img src="images/eden_white.svg"
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
                                <li><a href="">Partners/Investors</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget widget02 bottom-edge">
                        <h4>WHAT WE DO</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="">Vision</a></li>
                                <li><a href="">Edenchain Platform</a></li>
                                <li><a href="">Garden of Eden</a></li>
                                <li><a href="">HelloEden</a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="col">

                    <div className="widget widget03">
                        <h4>HOW WE DO</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="">Our approach</a></li>
                                <li><a href="">Go-To-Market</a></li>
                                <li><a href="">Roadmap</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget widget04 bottom-edge">
                        <h4>CONTACT</h4>
                        <div className="fMenu">
                            <ul>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Career</a></li>
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
                        <button>APPLY <i className="eden-arrow-right"></i></button>
                    </div>

                </div>


            </div>
            </footer>

        );
    }
};


export default Footer;