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
                        <p>These Terms of Service and any terms expressly incorporated herein (“Terms”) apply to your access to and
                            use of all services (our “Services”) provided by Etherscan.io (“Company,” “we,” or “us”).</p>
                        <p>1. ELIGIBILITY</p>
                        <p>
                            You represent and warrant that you: (a) are of legal age to form a binding contract; (b) have not
                            previously been suspended or removed from using our Services; and (c) have full power and authority to
                            enter into this agreement and in doing so will not violate any other agreement to which you are a party.
                            If you are registering
                            to use the Services on behalf of a legal entity, you further represent and warrant that (i) such legal
                            entity is duly organized and validly existing under the applicable
                            laws of the jurisdiction of its organization, and (ii) you are duly authorized by such legal entity to
                            act on its behalf.
                        </p>
                        <p>2. ACCOUNT REGISTRATION</p>
                        <p>
                            You must create an account with Company to access the Services (“Account”). When you create an Account,
                            you agree to: (a) create a strong password that you do not
                            use for any other website or online service; (b) provide accurate and truthful information; (c) maintain
                            and promptly update your Account information; (d) maintain the security of your Account by protecting
                            your Account password and restricting access to your computer and your Account; (e) promptly notify us
                            if you discover or otherwise suspect any security breaches related to your Account; and (f) take
                            responsibility for all activities that occur under your Account and accept all risks of any authorized
                            or unauthorized access to your Account, to the maximum extent permitted by law. When you create an
                            Account, we assign you an account identifier that you must retain to access your Account.
                        </p>
                        <p>3. DISCONTINUANCE OF SERVICES</p>
                        <p>We may, in our sole discretion and without liability to you, with or without prior notice and at any
                            time, modify or discontinue, temporarily or permanently, any portion of our Services.</p>
                        <p>4. ASSUMPTION OF RISK</p>
                        <p>
                            You acknowledge and agree that there are risks associated with utilizing an Internet-based service
                            including, but not limited to, the risk of failure of hardware, software and Internet connections, the
                            risk of malicious software introduction, and the risk that third parties may obtain unauthorized access
                            to information stored within your Account. You acknowledge and agree that Company will not be
                            responsible for any communication failures, disruptions, errors, distortions or delays you may
                            experience when using the Services, however caused. Company takes no responsibility for and will not be
                            liable for any losses, damages or claims arising from the use of our Services, including, but not
                            limited to, any losses, damages or claims arising from (a) passwords being "Bruteforced", (b) server
                            failure or data loss, (c) forgotten passwords, (d) corrupted wallet files, (e) incorrectly constructed
                            transactions or mistyped Ethereum addresses; or (f) unauthorized access to mobile applications,
                            (g)"phishing," viruses, third-party attacks or any other unauthorized third-party activities.
                        </p>
                        <p>5. THIRD-PARTY SERVICES AND CONTENT</p>
                        <p>
                            In using our Services, you may view content or utilize services provided by third
                            parties, including links to web pages and services of such parties (“Third-Party
                            Content”). We do not control, endorse or adopt any Third-Party Content and will
                            have no responsibility for Third-Party Content, including, without limitation, material
                            that may be misleading, incomplete, erroneous, offensive, indecent or otherwise
                            objectionable in your jurisdiction. In addition, your business dealings or correspondence
                            with such third parties are solely between you and the third parties. We are not
                            responsible or liable for any loss or damage of any sort incurred as the result
                            of any such dealings, and you understand that your use of Third-Party Content, and
                            your interactions with third parties, is at your own risk.
                        </p>
                        <p>6. ACCEPTABLE USE</p>
                        <p>
                            When accessing or using the Services, you agree that you will not violate any law,
                            contract, intellectual property or other third-party right or commit a tort, and
                            that you are solely responsible for your conduct while using our Services. Without
                            limiting the generality of the foregoing, you agree that you will not:
                            <br/>
                            ▪ Use our Services in any manner that could interfere with, disrupt, negatively
                            affect or inhibit other users from fully enjoying our Services, or that could damage,
                            disable, overburden or impair the functioning of our Services in any manner;<br/>
                            ▪ Use our Services to pay for, support or otherwise engage in any illegal activities,
                            including, but not limited to illegal gambling, fraud, money-laundering, or terrorist
                            activities.
                            <br/>
                            ▪ Use any robot, spider, crawler, scraper or other automated means or interface
                            not provided by us to access our Services or to extract data;
                            <br/>
                            ▪ Use or attempt to use another user’s account without authorization;
                            <br/>
                            ▪ Attempt to circumvent any content filtering techniques we employ, or attempt to
                            access any service or area of our Services that you are not authorized to access;
                            <br/>
                            ▪ Introduce to the Services any virus, trojan worms, logic bombs or other harmful
                            material;
                            <br/>
                            ▪ Develop any third-party applications that interact with our Services without our
                            prior written consent;
                            <br/>
                            ▪ Provide false, inaccurate, or misleading information; and
                            <br/>
                            ▪ Encourage or induce any third party to engage in any of the activities prohibited
                            under this Section.
                        </p>
                        <p>7. COPYRIGHTS AND OTHER INTELLECTUAL PROPERTY RIGHTS</p>
                        <p>
                            Unless otherwise indicated by us, all copyright and other intellectual property
                            rights in all content and other materials contained on our website or provided in
                            connection with the Services, including, without limitation, the Company or Company
                            logo and all designs, text, graphics, pictures, information, data, software, sound
                            files, other files and the selection and arrangement thereof (collectively, “Company
                            Materials”) are the proprietary property of Company or our licensors or suppliers
                            and are protected by copyright laws and other intellectual property rights laws.
                            We hereby grant you a limited, nonexclusive and non-sublicensable license to access
                            and use the Company Materials for your personal or internal business use. Such license
                            is subject to these Terms and does not permit (a) any resale of the Company Materials;
                            (b) the distribution, public performance or public display of any Company Materials;
                            (c) modifying or otherwise making any derivative uses of the Company Materials,
                            or any portion thereof; or (d) any use of the Company Materials other than for their
                            intended purposes. The license granted under this Section will automatically terminate
                            if we suspend or terminate your access to the Services.
                        </p>
                        <p>8. TRADEMARKS</p>
                        <p>
                            “EtherScan” the Company logo, and any other Company product or service names, logos
                            or slogans that may appear on our Services are trademarks of Company and may not
                            be copied, imitated or used, in whole or in part, without our prior written permission.
                            You will not use any trademark, product or service name of Company without our prior
                            written permission, including without limitation any metatags or other “hidden text”
                            utilizing any trademark, product or service name of Company. In addition, the look
                            and feel of our Services, including all page headers, custom graphics, button icons
                            and scripts, is the service mark, trademark and/or trade dress of Company and may
                            not be copied, imitated or used, in whole or in part, without our prior written
                            permission. All other trademarks, registered trademarks, product names and company
                            names or logos mentioned through our Services are the property of their respective
                            owners. Reference to any products, services, processes or other information, by
                            name, trademark, manufacturer, supplier or otherwise does not constitute or imply
                            endorsement, sponsorship or recommendation by us.
                        </p>
                        <p>9. SUSPENSION; TERMINATION</p>
                        <p>
                            In the event of any Force Majeure Event, breach of these Terms, or any other
                            event that would make provision of the Services commercially unreasonable for
                            Company, we may, in our discretion and without liability to you, with or without
                            prior notice, suspend your access to all or a portion of our Services. We may
                            terminate your access to the Services in our sole discretion, immediately and
                            without prior notice, and delete or deactivate your Account and all related
                            information and files in such account without liability to you, including, for
                            instance, in the event that you breach any term of these Terms.
                        </p>
                        <a name="cookiestatement">
                            <br/>
                        </a>
                        <p>10. COOKIE STATEMENT</p>
                        <p>
                            This site uses cookies. Cookies are small text files that are placed on your computer by websites that
                            you visit.
                            They are widely used in order to make websites work, or work more efficiently, as well as to provide
                            information to the owners of the site.
                            Cookies are typically stored on your computer's hard drive.
                            Information collected from cookies is used by us to evaluate the effectiveness of our Site, analyze
                            trends, and manage the platform.
                            The information collected from cookies allows us to determine such things as which parts of our Site are
                            most visited and difficulties our visitors may experience in accessing our Site.
                            With this knowledge, we can improve the quality of your experience on the platform by recognizing and
                            delivering more of the most desired features and information, as well as by resolving access
                            difficulties.
                            We also use cookies and/or a technology known as web bugs or clear gifs, which are typically stored in
                            emails to help us confirm your receipt of, and response to, our emails and to provide you with a more
                            personalized experience when using our Site.
                        </p>
                        <p>
                            We also use third party service provider(s), to assist us in better understanding the use of our Site.
                            Our service provider(s) will place cookies on the hard drive of your computer and will receive
                            information that we select that will educate us on such things as how visitors navigate around our site,
                            what pages are browsed and general transaction information.
                            Our service provider(s) analyses this information and provides us with aggregate reports. The
                            information and analysis provided by our service provider(s) will be used to assist us in better
                            understanding our visitors' interests in our Site and how to better serve those interests.
                            The information collected by our service provider(s) may be linked to and combined with information that
                            we collect about you while you are using the platform.
                            Our service provider(s) is/are contractually restricted from using information they receive from our
                            Site other than to assist us.
                        </p>
                        <p>Your continued use of this site, as well as any subsequent usage, will be interpreted as your consent to
                            cookies being stored on your device.</p>
                        <p>11. PRIVACY POLICY</p>
                        <p>Please see our detailed <a href="/privacyPolicy"><strong>Privacy Policy</strong></a>.</p>
                        <p>12. DISCLAIMER OF WARRANTIES</p>
                        <p>
                            (a) TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE
                            LAW, AND EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY US, OUR SERVICES
                            ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED
                            UNDER APPLICABLE LAW. WE EXPRESSLY DISCLAIM, AND YOU WAIVE, ALL WARRANTIES OF ANY
                            KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES
                            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT
                            AS TO OUR SERVICES, INCLUDING THE INFORMATION, CONTENT AND MATERIALS CONTAINED THEREIN.
                        </p>
                        <p>
                            (b) YOU ACKNOWLEDGE THAT INFORMATION YOU STORE OR TRANSFER THROUGH OUR SERVICES
                            MAY BECOME IRRETRIEVABLY LOST OR CORRUPTED OR TEMPORARILY UNAVAILABLE DUE TO A VARIETY
                            OF CAUSES, INCLUDING SOFTWARE FAILURES, PROTOCOL CHANGES BY THIRD PARTY PROVIDERS,
                            INTERNET OUTAGES, FORCE MAJEURE EVENT OR OTHER DISASTERS, SCHEDULED OR UNSCHEDULED
                            MAINTENANCE, OR OTHER CAUSES EITHER WITHIN OR OUTSIDE OUR CONTROL. YOU ARE SOLELY
                            RESPONSIBLE FOR BACKING UP AND MAINTAINING DUPLICATE COPIES OF ANY INFORMATION YOU
                            STORE OR TRANSFER THROUGH OUR SERVICES.
                        </p>
                        <p>13. LIMITATION OF LIABILITY</p>
                        <p>
                            EXCEPT AS OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL COMPANY, OUR DIRECTORS,
                            MEMBERS, EMPLOYEES OR AGENTS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL
                            DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF
                            USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING
                            BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED
                            WITH THE USE OF OR INABILITY TO USE OUR SERVICES OR THE COMPANY MATERIALS, INCLUDING
                            WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY ANY USER
                            ON ANY INFORMATION OBTAINED FROM COMPANY, OR THAT RESULT FROM MISTAKES, OMISSIONS,
                            INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION
                            OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM A FORCE
                            MAJEURE EVENT, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS
                            TO COMPANY’S RECORDS, PROGRAMS OR SERVICES.
                        </p>
                        <p>14. INDEMNITY</p>
                        <p>
                            You agree to defend, indemnify and hold harmless Company (and each of our officers,
                            directors, members, employees, agents and affiliates) from any claim, demand, action,
                            damage, loss, cost or expense, including without limitation reasonable attorneys’
                            fees, arising out or relating to
                        </p>
                        <p class="mb-0">
                            (a) your use of, or conduct in connection with,
                            our Services;</p>
                        <p class="mb-0">
                            (b) any Feedback you provide;</p>
                        <p class="mb-0">
                            (c) your violation of these Terms; or</p>
                        <p class="mb-0">
                            (d) your violation of any rights of any other person or entity.</p>
                        <p class="mt-4">15. MISCELLANEOUS.</p>
                        <p>
                            15.1. Entire Agreement; Order of Precedence. These Terms contain the entire agreement,
                            and supersede all prior and contemporaneous understandings between the parties regarding
                            the Services. These Terms do not alter the terms or conditions of any other electronic
                            or written agreement you may have with Company for the Services or for any other
                            Company product or service or otherwise. In the event of any conflict between these
                            Terms and any other agreement you may have with Company, the terms of that other
                            agreement will control only if these Terms are specifically identified and declared
                            to be overridden by such other agreement.
                        </p>
                        <p>
                            15.2. Amendment. We reserve the right to make changes or modifications to these
                            Terms from time to time, in our sole discretion. Amended Terms will become effective immediately on the
                            date they are posted to the
                            Services unless we state otherwise via our notice of such amended Terms. Any amended
                            Terms will apply prospectively to use of the Services after such changes become
                            effective. Your continued use of the Services following the effective date of such
                            changes will constitute your acceptance of such changes. If you do not agree to
                            any amended Terms, you must discontinue using the Services.
                        </p>
                        <p>
                            15.3. Waiver. Our failure or delay in exercising any right, power or privilege under
                            these Terms will not operate as a waiver thereof.
                        </p>
                        <p>
                            15.4. Severability. The invalidity or unenforceability of any of these Terms will
                            not affect the validity or enforceability of any other of these Terms, all of which
                            will remain in full force and effect.
                        </p>
                        <p>
                            15.5. Force Majeure Events. Company will not be liable for any loss or damage
                            arising from any event beyond Company’s reasonable control, including, but not
                            limited to, flood, extraordinary weather conditions, earthquake, or other act of
                            God, fire, war, insurrection, riot, labor dispute, accident, action of
                            government, communications, power failure, or equipment or software malfunction
                            (each, a “Force Majeure Event”).
                        </p>
                        <p>
                            15.6. Assignment. You may not assign or transfer any of your rights or
                            obligations under these Terms without prior written consent from Company,
                            including by operation of law or in connection with any change of control.
                            Company may assign or transfer any or all of its rights under these Terms, in
                            whole or in part, without obtaining your consent or approval.
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