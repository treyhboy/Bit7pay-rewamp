import React from "react";
import styled from "styled-components";
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

const Kyc = (props)=>(<ScrollContext>
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|Kyc Standards</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} />

        <section className="kyc ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>KYC Standards</h1>
                        <p>
                            <h2 className="tag">
                                KNOW YOUR CUSTOMER (KYC) POLICY, ON BOARDING OF CUSTOMER, PREVENTION OF MONEY LAUNDERING & RISK
                                CATEGORISATION
                            </h2>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="page-content col-xs-12">
                        <div>
                            <h2>I THE BACKGROUND:</h2>
                            <p>RBI has issued Master Direction “Know Your Customer (KYC) Directions, 2016” having reference no.
                                Master Direction DBR.AML. BC.No.81/14.01.001/2015-16 dated February 25, 2016. The Master
                                Direction issued is mainly in respect of ‘Know Your Customer’ (KYC) Guidelines and Anti Money
                                Laundering Standards (AML) based on ‘Prevention of Money Laundering Act, 2002 and rules
                                thereunder, the recommendations made by the Financial Action Task Force (FATF) on anti-money
                                laundering standards and amendments made in the PMLA, 2002 from time to time. These Directions
                                lay down the minimum requirements / disclosures to be made in respect of clients.</p>
                        </div>
                        <div>
                            <h2>II OBJECTIVE:</h2>
                            <p> <span className="second-margin-contain"></span>-> This Policy shall be treated as internal guidelines for customer
                                acceptance, KYC and AML- PMLA activities undertaken by Omshanti
                                Infracreations LLP (Bit7Pay). The objective of this policy is to prevent
                                the Bit7Pay from being used, intentionally or unintentionally, by
                                criminal elements for money-laundering activities, KYC procedures
                                enable the Bit7Pay to know/understand their customers and their
                                financial dealings in better way which in turn helps manage the risks
                                prudently.</p>
                            <p> <span className="second-margin-contain"></span>-> To put in place systems and procedures for customer identification
                                and verifying his/her identity and residential address.</p>
                            <p><span className="second-margin-contain"></span>-> To monitor transactions of a suspicious nature.</p>
                            <p><span className="second-margin-contain"></span>-> The policy will be disseminated to all employees at all levels in the
                                organization who deal/handle account information, financial
                                transactions, money and customer records etc. relating to the clients.</p>
                        </div>
                        <div>
                            <h2>III PRINCIPAL OFFICER/ COMPLIANCE OFFICER AND
                                DESIGNATED DIRECTOR:</h2>
                            <p><span className="second-margin-contain"></span>1. Bit7Pay shall appoint a principal officer/compliance officer. He/She
                                will be located at the Head /Corporate Office of the Bit7Pay and shall be
                                responsible for internal controls and procedures relating to
                                implementation of this policy and identifying and reporting any
                                suspicious transaction or activity to the concerned authority. The
                                principal officer/compliance officer will be a Head of Risk and Legal of
                                the Bit7Pay and should be able to discharge the functions with
                                independence and authority. The Board of Directors or its nominated
                                committee can change the principal officer or compliance officer. The
                                Principal Officer shall maintain close liaison with the enforcement
                                agencies and other institutions who are engaged in the fight against the
                                money laundering and terrorist financing.</p>
                            <p><span className="second-margin-contain"></span>2. While interacting with the client, KYC desk may conduct due
                                diligence of the client for knowing the client’s background, history,
                                financial status / capability assessment of business patterns and to verify
                                genuineness of the client.</p>
                            <p><span className="second-margin-contain"></span>3. Cross check PAN details of the client like Permanent Account
                                Number, Name, Father’s Name (in case of Individual client), Date of
                                Birth / Incorporation with the details on the website of the Income Tax
                                Department and attach the proof of the same with KYC docket.</p>
                            <p><span className="second-margin-contain"></span>4. In case PAN details are not matching substantially with PAN details
                                printed on PAN Card and PAN details appearing on IT website, take
                                appropriate action to get it clarified from the client. In case of minor
                                discrepancy in the name, obtain the declaration from the client about the
                                same.</p>
                            <p><span className="second-margin-contain"></span>5. In case of default or any action taken by any regulatory authorities
                                against such client is found on verification then seek clarification from
                                the client and coordinate with client to find out further details in such
                                default and status as on date.</p>
                        </div>
                        <div>
                            <h2>IV Customer Acceptance Policy (CAP)</h2>
                            <p>The following Customer Acceptance Policy indicates the criteria for
                                acceptance of customers</p>

                            <p><span className="second-margin-contain"></span>1. No account shall be opened in anonymous or fictitious/benami
                                name(s).
                            </p>
                            <p><span className="second-margin-contain"></span>2. No Minors</p>
                            <p><span className="second-margin-contain"></span>3. No one above the age of 75 years.</p>
                            <p><span className="second-margin-contain"></span>4. No HUF, Societies.</p>
                            <p><span className="second-margin-contain"></span>5. Only Indian resident can open account with Bit7Pay.</p>
                            <p><span className="second-margin-contain"></span>6. No Foreigner, NRI.</p>
                            <p><span className="second-margin-contain"></span>7. PAN, Aadhar, Bank details shall be mandatory for every customer.</p>
                            <p><span className="second-margin-contain"></span>8. Account to be opened through app ONLY.</p>
                            <p><span className="second-margin-contain"></span>9. No walk ins.</p>
                            <p><span className="second-margin-contain"></span>10. One customer ONLY one account.</p>
                            <p><span className="second-margin-contain"></span>11. Enhanced documents may be sought by Bit7Pay based on the
                                velocity of customers from time to time.
                            </p>

                        </div>
                        <div>
                            <h2>V Due Diligence from PMLA Point of view:</h2>
                            <p><span className="second-margin-contain"></span>1. Customer due diligence (“CDD”) measures shall be applied to an
                                extent that is sensitive to the risk of money laundering and terrorists
                                financing depending on the type of customer, business relationship or
                                transactions involved.</p>
                            <p><span className="second-margin-contain"></span>2. Bit7Pay shall determine from available sources of information
                                whether the client or potential client is a politically exposed person</p>
                            <p><span className="second-margin-contain"></span>3. Documents required, and other information will be collected from
                                clients as mentioned below. Any additional documents or due diligence
                                can be carried out Bit7Pay depending upon perceived risk. Below is the
                                indicative list of documents to be collected from the client.
                            </p>
                            <div className="pe-wp-default">
                                <h2>KYC documents </h2>
                                <div className="table-responsive">
                                    <table className="kyc-doc-table">
                                        <tbody>
                                        <tr className="kyc-doc-tr">
                                            <td><strong>Types of Entity</strong></td>
                                            <td><strong>Documents required</strong></td>
                                        </tr>
                                        <tr className="kyc-doc-tr">
                                            <td><strong>Individual</strong></td>
                                            <td>
                                                <ol>
                                                    <li>PAN card with photo on it</li>
                                                    <li> Aadhar card</li>
                                                    <li> Cancelled bank cheque</li>
                                                    <li>Self Photo (PP Size/Selfie)</li>
                                                </ol>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <i>
                                    Note- Apart from these above documents Bit7Pay reserves the right to
                                    call for additional documents for further verification based on customer
                                    volume and monitoring pattern.
                                </i>

                            </div>
                            <p><span className="second-margin-contain"></span>
                                4. In case of corporate, the antecedents of the company (change of name
                                and registered office in particular) and of all promoters and directors will
                                be traced.
                            </p>
                            <p><span className="second-margin-contain"></span>
                                5. An assessment shall be made of the financial worthiness of the client
                                by obtaining appropriate declarations at KYC stage.
                            </p>
                            <p><span className="second-margin-contain"></span>6. A thorough assessment shall be carried out to ascertain whether the
                                client is dealing with the company on his own behalf or someone else is
                                the beneficial owner. If there doubts, before acceptance of the clients,
                                thorough due diligence shall be carried out to establish the genuineness
                                of the clients. Secrecy laws shall not be allowed as a reason to disclose
                                true identity of the beneficiary/transacting party.</p>
                            <p><span className="second-margin-contain"></span>
                                7. No account shall be opened in a fictitious name / benami name or on
                                an anonymous basis.
                            </p>
                            <p><span className="second-margin-contain"></span>
                                8. No client shall be accepted where it is not possible to ascertain the
                                identity of the client, or the information provided is suspected to be nongenuine,
                                or if there is perceived non-cooperation of the client in
                                providing full and complete information. Bit7Pay shall not continue to
                                do business with such a person and file a suspicious activity report.
                                Bit7Pay shall consult the relevant authorities in determining what action
                                it shall take when it suspects suspicious transactions being carried out
                            </p>
                            <p><span className="second-margin-contain"></span>
                                9. No transaction or account-based relationship is to be undertaken
                                without following the Client Due Diligence Process.
                            </p>
                            <p><span className="second-margin-contain"></span>
                                10. Any transaction from the client shall be accepted only after KYC and
                                banking details of the customer are accepted by Bit7Pay and procedure
                                is completed.
                            </p>
                        </div>
                        <div>
                            <h2>VI CLIENT RISK CATEGORIZATION:</h2>
                            <p><span className="second-margin-contain"></span>1. Based on the various factors and risk parameters, the clients shall be
                                categorized into High, medium and low risk category.</p>
                            <p><span className="second-margin-contain"></span>2. Certain clients may be of a higher or lower risk category depending
                                on the circumstances such as the client’s background, type of business
                                relationship or transaction, etc. The illustrative factors for risk profiling
                                is given as under (list is indicative and can be expanded as per business
                                requirements and experience):</p>
                            <div className="third-margin-contain">
                                <p>I. Geographical Location and Category of client.</p>
                                <p>II. Nature of Business activity</p>
                                <p>III. Financial Health vs Trade Volume</p>
                                <p>IV. Income Range</p>
                            </div>
                            <p><span className="second-margin-contain"></span>3. The authority to enter in to financial transactions on behalf of a
                                corporate customer (private/public limited company) shall be backed by
                                a resolution of the Board of Directors. In case of a partner entering into a
                                financial transaction on behalf of a partnership firm, the LOA or POA
                                shall be signed by all the remaining partners of the firm. In case of a
                                Trust or a Foundation, such an authority shall be backed by a resolution
                                passed by the Board of Trustees or Managing Board as the case may be.</p>
                            <p><span className="second-margin-contain"></span>4. Client identification process shall be carried out at following different
                                stages:</p>
                            <div className="third-margin-contain">
                                <p>I. While establishing the relationship with the client.</p>
                                <p>II. While carrying out transactions for the client.</p>
                                <p>III. When the Bit7Pay has doubts regarding the veracity or the adequacy
                                    of previously obtained client identification data.</p>
                            </div>
                            <p><span className="second-margin-contain"></span>5. Failure/Refusal by prospective client to provide satisfactory evidence
                                of identity shall be noted and reported to the higher authority within the
                                organization.</p>
                            <p><span className="second-margin-contain"></span>6. Risk based Monitoring approach shall be followed. Broad categories
                                of monitoring and reason for suspicion and examples of suspicious
                                transactions for Bit7Pay are indicated as under:</p>
                            <h2 className="tag2 second-margin-contain">
                                1. Identity of Client
                            </h2>
                            <div className="third-margin-contain">
                                <p>a) False identification documents</p>
                                <p>b) Identification documents which could not be verified within
                                    reasonable time.</p>
                                <p>c) Doubt over the real beneficiary of the account.</p>
                                <p>d) Accounts opened with names very close to other established business
                                    entities.</p>
                            </div>
                            <h2 className="tag2 second-margin-contain">2. Suspicious Background</h2>
                            <div className="third-margin-contain">
                                <p>a) Suspicious background or links with known criminals</p>
                            </div>
                            <h2 className="tag2 second-margin-contain">3. Multiple Accounts</h2>
                            <div className="third-margin-contain">
                                <p>Large number of accounts having a common account holder or
                                    authorized signatory with no rationale.</p>
                                <p>b) Unexplained transfers between multiple accounts with no rationale.</p>
                            </div>
                            <h2 className="tag2 second-margin-contain">4. Activity in Accounts</h2>
                            <div className="third-margin-contain">
                                <p>a) Unusual activity compared to past transactions.</p>
                                <p>b) Sudden activity in dormant accounts.</p>
                                <p>c) Activity inconsistent with what would be expected from declared
                                    business.</p>
                            </div>
                            <h2 className="tag2 second-margin-contain">5. Nature of Transactions</h2>
                            <div className="third-margin-contain">
                                <p>a) Unusual or unjustified complexity.</p>
                                <p>b) No economic rationale or bonafide purpose.</p>
                                <p>c) Source of funds/Cryptocurrencies are doubtful.</p>
                            </div>
                            <h2 className="tag2 second-margin-contain">6. Value of Transactions</h2>
                            <div className="third-margin-contain">
                                <p>a) Value just under the reporting threshold amount in an apparent
                                    attempt to avoid reporting</p>
                                <p>b) Inconsistent with the clients apparent financial standing</p>
                                <p>c) Inconsistency in the transactions pattern by Customers.</p>
                            </div>
                            <div className="tag2 second-margin-contain">
                                <p>7. Bit7Pay will ensure that information sought from the customer is
                                    relevant to the perceived risk, is not intrusive, and is in conformity with
                                    the guidelines issued in this regard. Any other information from the
                                    customer will be sought separately with the client’s consent and after
                                    opening the account.</p>
                            </div>
                        </div>
                        <div>
                            <h2>VII. EXCEPTION HANDLING:</h2>
                            <p>Exceptions to this Policy must be approved by the Chief Compliance
                                Officer, or a designated person. All exceptions must be documented,
                                with reasons for the exceptions, including expiration or review date and,
                                wherever necessary, include an action plan and timelines for compliance
                                with the policy.</p>
                        </div>
                        <div>
                            <h2>VIII. KYC REJECTION PROCEDURES:</h2>
                            <p>In case where the documents or information obtained from client is not
                                sufficient as outlined in the policy, the KYC will be rejected unless it is
                                covered under the exception handling procedure as mentioned in clause
                                above. Any changes/amendments made in the Policy shall be put before
                                the Board of Directors in their meeting immediately succeeding such
                                changes/amendments, for purpose of information.</p>
                        </div>
                        <div>
                            <h2>IX. EFFECTIVE DATE AND REVIEW:</h2>
                            <p>The policy would be reviewed in line with review requirements of the
                                Bit7Pay or as and when considered necessary by Chief Compliance
                                Officer and/or Board of Directors but not later than once a year.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Container>
</ScrollContext>)

export default Kyc;
