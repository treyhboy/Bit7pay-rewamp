import React from "react";
import styled,{keyframes} from "styled-components";
import Header from "../Header/header";
import img from "../../img/features/bg-1.jpg";
import Footer from "../Footer/footer";
import { ScrollContext } from 'react-router-scroll-4';
import {Helmet} from "react-helmet";

const Container = styled.div`
display: flex;
flex-flow: column;
height:100%;
width:100%;  
background-color: white;
z-index: 12;
overflow: hidden;
`

const Privacy = (props)=>(<ScrollContext >
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|Privacy</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} />
        <section>
            <div className="terms-content">
                <div className="header-title">
                    <img src={require("../../img/quote.svg") }alt=""/>PRIVACY POLICY
                </div>

                <p>Omshanti Infracreations LLP is a limited liability company incorporated under the laws of India and having its registered office at, 3M/1 Tagore Town, Allahabad-211002, Uttar Pradesh, India. (herein after referred to as “Company” or “Bit7Pay”, which
                    term shall refer to and include its owners, directors, investors, employees or other related parties. Persons availing of the Bit7Pay Services, directly or indirectly, are referred to herein, as “Users”.
                </p>
                <p>This is an agreement between Bit7Pay and User, which is binding and requires mandatory compliance by User. Integrity, honesty and ethical business practices are some of the core values for Bit7Pay. Bit7Pay strongly condemns any and all activities
                    related to money laundering and such other illegal actions. In order to prevent misuse of the Bit7Pay Services, Users are required to strictly comply with the terms contained herein, which forms part and parcel of the User Terms of Service. Terms
                    not defined herein shall carry the same interpretation, as in the User Agreement and in the absence thereof to general usage and parlance.
                </p>
                <p>Users are required to read, review, understand and then agree to the terms hereunder for using or availing of the Bit7Pay Services, before clicking the “I Accept” option.
                </p>
                <p><strong>This Agreement supersedes and replaces any and all prior oral or written understandings or agreements between BIT7PAY and the User with respect to the Privacy Policy.
                </strong></p>

                <h4 >
                    1. DEFINITIONS
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        All terms defined in the Terms of Service and the Anti Money Laundering Policy will carry the same meaning, force and effect in this Privacy Policy.
                    </div>
                    <div className="inner-heading">
                        <strong>“Applicable Law”</strong> means the law in force for the time being within the territory of India;
                    </div>
                </ol>

                <h4 >
                    2. PRIVACY POLICY
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>
                        Bit7Pay is committed to ensuring the safety and protection of all data and information shared with Bit7Pay by its Users subject to Applicable Laws and the terms and conditions set out hereunder and processes established by Bit7Pay in compliance with the
                        applicable reasonable security practices and procedures, prescribed by Government or Regulatory authorities, as the case may be.
                    </li>
                    <li>Bit7Pay shall not be liable for any breach or violation of its systems or policies due to malicious attacks, errors, commissions or omissions not willfully initiated by Bit7Pay, leading to breach of data or information of User.</li>
                </ol>

                <h4 >
                    3. DATA COLLECTED
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>Bit7Pay collects all personal data and information of the User including sensitive personal information. Use of the Bit7Pay services is contingent on acceptance of the terms contained herein. User shall be deemed to have volunteered the data and
                        information collected, retained, used and disseminated by Bit7Pay, upon accepting the terms herein and those contained in the Terms of Service of Bit7Pay.</li>
                    <li>User hereby consents that when personal data is shared with Bit7Pay, User hereby agrees and acknowledges Bit7Pay’s right to use or disseminate such data or information including transfer of the personal and sensitive personal information of the
                        User from current location to external sources including outside India and third parties.</li>
                    <li>Bit7Pay collects and retains data and information of user including the following:
                    </li>
                    <ol className="inner-ol">
                        <li>Information provided / shared by the User:</li>
                        <div className="inner-text">
                            Bit7Pay collects any and all personal information provided by User to Bit7Pay. This information may include that which is provided by the Users, at the time of opening an account and transacting with Bit7Pay including the following:
                        </div>
                        <ol className="inner-ol inner-2-ol">
                            <li>Name,
                            </li>
                            <li>Residential Address,
                            </li>
                            <li>Registered Mobile Number,
                            </li>
                            <li>Email Address,</li>
                            <li>Permanent Account Number (PAN) Card,
                            </li>
                            <li>Bank Account Details
                            </li>
                            <li>Any other information.
                            </li>
                        </ol>
                        <li>Bit7Pay may collect, retain, use or store data or information automatically collected from a device or through connections associated to such device, including but not limited to the following:
                        </li>
                        <ol className="inner-ol inner-2-ol">
                            <li>User’s device information including but not limited to IMEI or equipment identification number, IMSI or subscriber identification, MAC address, Android version, device details, network operator, contact list information, Wifi / Data Network
                                connectivity.
                            </li>
                            <li>Information generated by the User’s use of the app and the website, including cookies and IP addresses.</li>
                            <li>Access to User’s Photo Gallery / Media / Files / Camera;
                            </li>
                            <li>Access to User’s other apps and services including messaging through SMS; usage data;</li>
                            <li>Geolocation of a User’s device or such or other automatically collated data or information of User.</li>
                        </ol>
                    </ol>
                </ol>

                <h4 >
                    4. PURPOSE & USE OF DATA COLLECTED
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>Bit7Pay collects, retains and puts to use the information shared by the User, as above, with the consent of and concurrence of the User. The data and information collected above is utilized by Bit7Pay, to ensure effective rendering of its Bit7Pay
                        Services and to comply with legal requirements.</li>
                    <li>Bit7Pay does not sell the data collected and retained of User.</li>
                    <li>Data collected from User is put to use by Bit7Pay for enhancing its services to User.</li>
                </ol>

                <h4 >
                    5. COLLECTION OF DATA
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li className="inner-heading-li">
                        Cookies
                    </li>
                    <ol className="inner-ol">
                        <li>Bit7Pay uses cookies on its App and website to collect data about User. Cookies collect User information including App usage, visits to the App or website and other User generated information. Cookies allow Users to navigate from page to page
                            without having to re-login each time, count visits, and see which areas and features of the Bit7Pay App and website are popular.</li>
                        <li>Bit7Pay may also use the data collected via cookies to tailor advertisements to Users and to track the popularity of its website. Use of cookies and other technologies may allow Bit7Pay and third parties to collect information about User browsing
                            activities over time and across different websites following use of Bit7Pay services.</li>
                        <li>Bit7Pay also collects information that your browser sends whenever User visits its site. This information may include information such as the device’s Internet Protocol (“IP”) address (with replaced last byte), browser type, browser version, the
                            pages of Bit7Pay site that User visits, the time and date of visit, the time spent on those pages and other statistics.</li>
                    </ol>
                    <li className="inner-heading-li">
                        Analytics
                    </li>
                    <ol className="inner-ol">
                        <li>Bit7Pay uses third party analytical tools to collect data about User devices and Internet connections. That information includes the IP address of User computer and/or Internet service provider, when User accesses its website, the Internet address
                            of websites from which User links to the Bit7Pay website, specifications of User browser, and User movements and preferences on the Bit7Pay website. All of this information is used internally for the purpose of understanding how the Bit7Pay
                            website is being used and to improve the same.</li>
                        <li>Bit7Pay also uses third party analytical tools to collect data about usage of the Bit7Pay mobile app. The information collected identifies the types and timing of actions taken, including installation, registration, uploading, and certain types
                            of navigation. All of this information is used internally for the purpose of understanding how the Bit7Pay mobile app is being used and to improve the same.</li>
                    </ol>
                    <li className="inner-heading-li">
                        Action Tags
                    </li>
                    <ol className="inner-ol">
                        <li>Bit7Pay uses action tags (also called pixel tags, clear GIF, or beacons) to identify pages visited and interacted with by the User. Action tags may collect and transmit this data in a manner that identifies the User if User has registered with
                            the Bit7Pay website, or is logged into the Bit7Pay website. Bit7Pay also uses action tags in emails, to determine whether an email has been opened or whether it has been forwarded to a third party.</li>
                        <li>Bit7Pay also uses action tags in the mobile app which may identify the websites visited by the User and the manner in which the User interacts with them.</li>
                    </ol>
                    <li className="inner-heading-li">
                        Do Not Track
                    </li>
                    <ol className="inner-ol">
                        <li>Bit7Pay currently does not respond to “Do Not Track” signals and operates as described in this Privacy Policy whether or not a Do Not Track signal is received. If there is a change in such policy, a suitable modification to this Privacy Policy
                            will be made by Bit7Pay listing out the mechanism and procedure for the same.</li>
                    </ol>
                </ol>

                <h4 >
                    6. GRIEVANCE
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>User may register their grievance with respect to data collection, retention or use to Bit7Pay’s Grievance Officer via <a href="https://www.bit7pay.com/support" target="_blank">https://www.bit7pay.com/support</a>.</li>
                </ol>
                <h4 >
                    7. DATA RETENTION
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>Bit7Pay shall retain the User’s information for as long as the account is active or as needed to provide services in accordance with applicable laws.</li>
                    <li>The retention period may be extended to comply with legal obligations, resolve disputes, and enforce agreements for a period of ten years after termination of the account or such extended period, under applicable laws. Bit7Pay may retain data for
                        such or further periods but is not obligated to do so in all instances. Bit7Pay shall not be liable or responsible for non – availability or non – retention of data or information beyond the termination of the User account.</li>
                    <li>The retention period may extend beyond the end of User account, but it will be only as long as it is necessary for Bit7Pay to have sufficient information to respond to any issues that may arise later, including but not limited to retention for the
                        purpose of investigations or ongoing prosecutions or in case of Suspicious transactions or if Bit7Pay requires the information for its records or to support legal proceedings, or if Bit7Pay believes in good faith that a law, regulation, rule or
                        guideline requires it.</li>
                </ol>
                <h4 >
                    8. UPDATION OF USER DATA AND WITHDRAWAL OF USER CONSENT
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>The User shall ensure that all data and information shared with Bit7Pay is accurate, correct and complete. User shall ensure that change of the User’s address or any change in circumstances impacting use of the Bit7Pay Services, is promptly communicated
                        to Bit7Pay through <a href="https://www.bit7pay.com/support" target="_blank">https://www.bit7pay.com/support</a>.</li>
                    <li>Bit7Pay will not be held liable or responsible for any incorrect information provided by the User to Bit7Pay.</li>
                    <li>User may, upon termination of the use of the Bit7Pay Services, as provided in the Terms of Service, withdraw consent granted herein to Bit7Pay. The same shall however not affect actions undertaken or data and information collated or technological
                        processes initiated prior to such withdrawal of consent. Such withdrawal of consent shall also not affect retention of data and information collected prior to such withdrawal.</li>
                </ol>
                <h4 >
                    9. SHARING OF INFORMATION WITH THIRD-PARTIES
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">The User agrees and consents to Bit7Pay sharing the following anonymized data or to otherwise gives Bit7Pay permission to share with third-parties the following:</div>
                    <li>For advertising, referral, operations, financial services and technology services (such as hosting providers, identity verification, support, payment, and email service providers);</li>
                    <li>If required by applicable law or legal process, or if Bit7Pay believes that it is in accordance with applicable law or legal process;</li>
                    <li>To protect the rights, property and safety of Bit7Pay, its users and the public, including, including but not limited to usage in court proceedings, or to detect or prevent criminal activity, fraud, material misrepresentation, or to establish its
                        rights or defend against legal claims; or</li>
                    <li>In connection with selling, merging, transferring, or reorganizing all or parts of Bit7Pay’s business.</li>
                </ol>
                <h4 >
                    10. REASONABLE SECURITY PRACTICES
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>Protection of the User’s personal information is of utmost importance to Bit7Pay and it takes all reasonable steps to secure data and information pertaining to its Users, including those prescribed under applicable laws and Rules framed thereunder
                        Including but not limited to the applicable provisions of the Information Technology Act, 2000 (as amended) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                    <li>Bit7Pay takes appropriate legal, administrative, physical, and electronic measures designed to protect the information that Users share with Bit7Pay from accidental or unlawful destruction, accidental loss or unauthorized access, use, modification,
                        interference, or disclosure.</li>
                    <li>Bit7Pay however does not extend any warranties with respect to the security or safety of data and information transmitted through digital platforms or online, both of which are susceptible to malicious attacks.</li>
                </ol>
                <h4 >
                    11. MODIFICATIONS
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>These terms may be periodically reviewed and revised. User will be notified through an update of the App. The revised draft will be uploaded on the Bit7Pay Website and will reflect the modified date of the terms. User is required to periodically
                        visit the website and review terms and any changes thereto. Continued use of the Bit7Pay Services constitutes agreement of User to the terms contained herein and any amendments thereto.</li>
                </ol>
                <h4 >
                    12. MISCELLANEOUS
                    {/*<span  className="pull-right"> + </span>*/}
                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>All other provisions of the Bit7Pay Terms of Service shall be read into this policy and shall form part hereof, including Governing Laws and jurisdiction, notices, severability, assignment and such or other provisions.</li>
                </ol>
            </div>

        </section>
        <Footer/>
    </Container>
</ScrollContext>)

export default Privacy;
