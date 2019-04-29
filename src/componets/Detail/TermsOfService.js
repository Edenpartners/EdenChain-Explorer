import React, {Component} from 'react';
import Footer from '../Footer/footer';
import { Link } from "react-router-dom";
import apis from '../../api/api';
import './sub_transaction.scss';
import './terms.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';



class TermsOfService extends Component {
    constructor()
    {
        super();
        this.apis = new apis();   
        this.state = {data : undefined};
          
    }

    componentWillMount() {
        // Get Last page, 6 items.
        const { match: { params } } = this.props;

        this._requests = this.apis.getBlockInformation(params.block_height).then((data)=>
            {                
                this.setState({data:data});
                this._requests = null;   
            }
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    

    componentWillUnmount(){

    }

    render(){

        return (
            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-file-text"></i>Terms of Service</h3>
                    <div className="detailBox termBox">
                        <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY.</p>
                        <p>BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE AND ALL TERMS
                            INCORPORATED BY REFERENCE.</p>
                        <p>These Terms of Service and any terms expressly incorporated herein (“Terms”) apply to your access 
                            to and use of all services (our “Services”) provided by EdenChain.io (“Company,” “we,” or “us”).</p>
                        <p>1. DISCONTINUANCE OF SERVICES</p>
                        <p>
                           We may, in our sole discretion and without liability to you, with or without prior notice and at any time,
                           modify or discontinue, temporarily or permanently, any portion of our Services.
                        </p>
                        <p>2. ACCEPTABLE USE</p>                       
                        <p>
                            When accessing or using the Services, you agree that you will not violate any law, contract, 
                            intellectual property or other third-party right or commit a tort and that you are solely responsible for your 
                            conduct while using our Services. Without limiting the generality of the foregoing, you agree that you will not: 
                            <br/>
                            ▪ Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users 
                            from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner.<br/>
                            ▪ Use our Services to pay for, support or otherwise engage in any illegal activities, including, but not limited to illegal gambling, 
                            fraud, money-laundering or terrorist activities. 
                            <br/>
                            ▪ Use any robot, spider, crawler, scraper or other automated means or interface not provided 
                            by us to access our Services or to extract data.
                            <br/>
                            ▪ Introduce to the Services any virus, trojan worms, logic bombs or other harmful material.
                            <br/>
                            ▪ Develop any third-party applications that interact with our Services without our prior written consent.
                            <br/>
                            ▪ Provide false, inaccurate, or misleading information.
                            <br/>
                            ▪ Encourage or induce any third party to engage in any of the activities prohibited under this Section.                            
                        </p>
                        <p>3. COPYRIGHTS AND OTHER INTELLECTUAL PROPERTY RIGHTS</p>
                        <p>
                        Unless otherwise indicated by us, all copyright and other intellectual property rights in all content and 
                        other materials contained on our website or provided in connection with the Services, including, 
                        without limitation, the Company or Company logo and all designs, text, graphics, pictures, information, 
                        data, software, sound files, other files and the selection and arrangement thereof (collectively, 
                        “Company Materials”) are the proprietary property of Company or our licensors or suppliers and are 
                        protected by copyright laws and other intellectual property rights laws. We hereby grant you a limited, 
                        nonexclusive and non-sublicensable license to access and use the Company Materials for your personal 
                        or internal business use. Such license is subject to these Terms and does not permit (a) any resale of 
                        the Company Materials; (b) the distribution, public performance or public display of any Company Materials; 
                        (c) modifying or otherwise making any derivative uses of the Company Materials, or any portion thereof; or 
                        (d) any use of the Company Materials other than for their intended purposes. The license granted under 
                        this Section will automatically terminate if we suspend or terminate your access to the Services.
                        </p>
                        <p>4. TRADEMARKS</p>
                        <p>
                        “EdenChain” the Company logo, and any other Company product or service names, logos or slogans that may appear on our Services are trademarks of Company and may not be copied, imitated or used, in whole or in part, without our prior written permission. You will not use any trademark, product or service name of Company without our prior written permission, including without limitation any metatags or other “hidden text” utilizing any trademark, product or service name of Company. In addition, the look and feel of our Services, including all page headers, custom graphics, button icons and scripts, is the  service mark, trademark and/or trade dress of Company and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned through our Services are the property of their respective owners. Reference to any products, services, processes or other information, by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by us.
                        </p>
                        <a name="cookiestatement">
                            <br/>
                        </a>
                        <p>5. COOKIE STATEMENT</p>
                        <p>
                        This site uses cookies. Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies are typically stored on your computer's hard drive. Information collected from cookies is used by us to evaluate the effectiveness of our Site, analyze trends, and manage the platform. The information collected from cookies allows us to determine such things as which parts of our Site are most visited and difficulties our visitors may experience in accessing our Site. With this knowledge, we can improve the quality of your experience on the platform by recognizing and delivering more of the most desired features and information, as well as by resolving access difficulties. We also use cookies and/or a technology known as web bugs or clear gifs, which are typically stored in emails to help us confirm your receipt of, and response to, our emails and to provide you with a more personalized experience when using our Site.
                        </p>
                        <p>Your continued use of this site, as well as any subsequent usage, will be interpreted as your consent to cookies being stored on your device.</p>                        
                        <p>6. DISCLAIMER OF WARRANTIES</p>
                        <p>
                        (a) TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, AND EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY US, OUR SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW. WE EXPRESSLY DISCLAIM, AND YOU WAIVE, ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO OUR SERVICES, INCLUDING THE INFORMATION, CONTENT AND MATERIALS CONTAINED THEREIN.
                        </p>
                        <p>
                        (b) YOU ACKNOWLEDGE THAT INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES MAY BECOME IRRETRIEVABLY LOST OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY OF CAUSES, INCLUDING SOFTWARE FAILURES, INTERNET OUTAGES, FORCE MAJEURE EVENT OR OTHER DISASTERS, SCHEDULED OR UNSCHEDULED MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OUR CONTROL. YOU ARE SOLELY RESPONSIBLE FOR BACKING UP AND MAINTAINING DUPLICATE COPIES OF ANY INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES.
                        </p>                    
                        <p>7. INDEMNITY</p>
                        <p>
                        You agree to defend, indemnify and hold harmless Company (and each of our officers, directors, members, employees, agents and affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys’ fees, arising out or relating to
                        </p>
                        <p className="mb-0">
                            (a) your use of, or conduct in connection with, our Services;</p>
                        <p className="mb-0">
                            (b) any Feedback you provide;</p>
                        <p className="mb-0">
                            (c) your violation of these Terms; or</p>
                        <p className="mb-0">
                            (d) your violation of any rights of any other person or entity.</p>
                        <p className="mt-4">8. MISCELLANEOUS.</p>
                        <p>
                        8.1. Amendment. We reserve the right to make changes or modifications to these Terms from time to time, in our sole discretion. Amended Terms will become effective immediately on the date they are posted to the Services unless we state otherwise via our notice of such amended Terms. 
                        </p>
                        <p>
                        8.2. Waiver. Our failure or delay in exercising any right, power or privilege under these Terms will not operate as a waiver thereof.
                        </p>
                        <p>
                        8.3. Severability. The invalidity or unenforceability of any of these Terms will not affect the validity or enforceability of any other of these Terms, all of which will remain in full force and effect.
                        </p>
                        <p>
                        8.4. Force Majeure Events. Company will not be liable for any loss or damage arising from any event beyond Company’s reasonable control, including, but not limited to, flood, extraordinary weather conditions, earthquake, or other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, or equipment or software malfunction (each, a “Force Majeure Event”).
                        </p>
                    </div>
                </div>
               </div>
               <Footer></Footer>
            </div>

        );
    }
};

export default TermsOfService;