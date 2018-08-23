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

const Aml = (props)=>(<ScrollContext >
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|AML Policies</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} />
        <section>
            <div className="terms-content">
                <div className="header-title">
                    <img src={require("../../img/quote.svg")} alt=""/>ANTI – MONEY LAUNDERING POLICY
                </div>
                <p>
                    OMSHANTI INFRACREATIONS LLP., (hereinafter referred to as <strong>“LLP”</strong> under brand Name <strong>“bit7pay”</strong>, which term shall refer to and include its owners, directors, investors, employees or other related parties) is a private
                    limited company incorporated under the laws of India and having its registered office at, 3M/1 TAGORE TOWN ALLAHABAD Allahabad UP 211002 INDIA. Persons availing of the any services from Bit7pay, or engaging in any transactions on any digital/non
                    digital platform provided or operated by Bit7pay, directly or indirectly, are referred to herein, as “Users”.
                </p>
                <p>
                    This is an agreement between Bit7pay and User, which is binding on the User. All Users are required to comply with the terms of this agreement at all times, and any instance of noncompliance will result in the termination of such User’s accounts on the
                    Bit7pay platform, and in appropriate reporting of the circumstances of such non-compliance and such termination to the relevant statutory authorities. Integrity, honesty and ethical business practices are some of the core values of Bit7pay, and
                    Bit7pay strongly condemns any and all activities related to terrorism, money laundering, and all other unlawful actions. In order to prevent misuse of the services provided on the Bit7pay platform, Users are required to strictly comply with the
                    terms contained herein, which forms part and parcel of the User Terms of Service. Terms not defined herein shall carry the same meaning as in the User Agreement, and in the absence thereof, to general usage and parlance.
                </p>
                <p>
                    Users are required to read, review, understand and then agree to the terms hereunder for using or availing of the Bit7pay Services, before clicking the “I Accept” option.
                </p>
                <p>
                    This Anti-Money Laundering Policy (herein after referred to as the <strong>“AML Policy”</strong>) supersedes and replaces any and all prior oral or written understandings or agreements between BIT7PAY and the User with respect to the AML Policy.
                </p>

                <h4 >
                    1. DEFINITIONS

                    <span ng-if="expand1 == true" className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        All terms defined in the Terms of Service and the Privacy Policy will carry the same meaning, force and effect in this AML Policy.
                    </div>
                    <li>
                        “Applicable Law” means all laws in force for the time being within the territory of India, including (but not restricted to) the Prevention of Money Laundering Act 2002 (<strong>“PMLA”</strong>), the Prevention of Money Laundering (Maintenance
                        of Records) Rules 2005 (<strong>“PML Rules”</strong>), and the Reserve Bank of India’s (<strong>“RBI”</strong>) Master Direction on Know Your Customer Rules (
                        <strong>“KYC Rules”</strong>), updated as of 25 February 2016;
                    </li>
                    <li>
                        “Designated Director” means a managing director or whole-time director of Bit7pay who has been appointed and authorised to administer Bit7pay’s anti-money laundering measures, in accordance with the PMLA;
                    </li>
                    <li>
                        “Principal Officer” means the officer appointed by Bit7pay to administer Bit7pay’s antimoney laundering measures, in accordance with the PMLA;
                    </li>
                    <li>
                        “Senior Management” means such directors, officers or other personnel of Bit7pay as are specifically designated to monitor and ensure know-your-customer compliance and the operation of Bit7pay’s internal audit systems;
                    </li>
                    <li>
                        “Suspicious Transaction” means a transaction, whether or not made in cash which, to a person acting in good faith:
                    </li>
                    <ol className="inner-ol">
                        <li>give rise to a reasonable ground of suspicion that it may involve proceeds of an offense specified in the Schedule to the Act, regardless of the value involved; or</li>
                        <li>appears to be made in circumstances of unusual or unjustified complexity; or</li>
                        <li>appears to have no economic rationale or bona fide purpose; or</li>
                        <li>gives rise to a reasonable ground of suspicion that it may involve financing of the activities relating to terrorism;</li>
                        <div className="inner-text">Explanation. —Transaction involving financing of the activities relating to terrorism includes transaction involving funds suspected to be linked or related to, or to be used for terrorism, terrorist acts or by a terrorist, terrorist organization
                            or those who finance or are attempting to finance terrorism</div>
                    </ol>

                </ol>

                <h4 >
                    2. MAINTENANCE OF RECORDS

                    <span ng-if="expand2 == true" className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>
                        Bit7pay shall maintain a record of, and has evolved an internal mechanism to detect, the following:
                    </li>
                    <ol className="inner-ol">
                        <li>Details pertaining to User transactions, including but not limited to:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>the nature of the transactions;</li>
                            <li>the amount of the transaction and the currency in which it was denominated;</li>
                            <li>the date on which the transaction was conducted; and</li>
                            <li>the parties to the transaction.</li>
                        </ol>
                        <li>All details for the following categories of User transactions, separately from those recorded under (i) above:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>User transactions of value of at least INR 10,00,000 (Indian Rupees Ten lakh), or its foreign currency equivalent; and</li>
                            <li>. User transactions that are connected to each other and that take place within a month of each other, with a monthly aggregate of at least INR 10,00,000 (Indian Rupees Ten lakh), or its foreign currency equivalent; and</li>
                        </ol>
                        <li>All Suspicious Transactions by way of deposits and credits, withdrawals into or from any accounts in whatsoever name they are referred to in any currency maintained by way of:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>cheques including third party cheques, pay orders, demand drafts, or any other instrument of payment of money including electronic receipts or credits and electronic payments or debits; or</li>
                            <li>transfers from one account within the same banking company, financial institution and intermediary, including to and from Nostro and Vostro accounts; or</li>
                            <li>any other mode in whatsoever name it is referred to;</li>
                        </ol>
                        <li>credits or debits into or from any non-monetary accounts such as demat account, security account in any currency maintained by Bit7pay;</li>
                        <li>money transfer or remittances in favor of own Users or non-Users from India or abroad and to third party beneficiaries in India or abroad including transactions on its own account in any currency by any of the following:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>demand drafts, or</li>
                            <li>telegraphic or wire transfers or electronic remittances or transfers, or</li>
                            <li>internet transfers, or</li>
                            <li>Automated Clearing House remittances, or</li>
                            <li>any other mode of money transfer by whatsoever name called;</li>
                        </ol>
                        <li>. letters of credit, standby letters of credit, guarantees, comfort letters, solvency certificates and any other instrument for settlement and/or credit support;</li>
                        <li>collection services in any currency by way of the collection of bills, cheques, instruments or any other mode of collection in whatsoever name it is referred to.</li>
                    </ol>
                </ol>

                <h4 >
                    3. PROCEDURE AND MANNER OF MAINTAINING INFORMATION

                    <span ng-if="expand3 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand3" type="I">
                    <li>Bit7pay will maintain hard and soft copies of the above-mentioned records of Transactions in accordance with the procedure and manner, as may be specified under applicable laws or regulations, from time to time.</li>
                    <li>In addition to the above, Bit7pay shall maintain records of transactions, as per its prevailing processes.</li>
                </ol>

                <h4 >
                    4. DISCLOSURE OF RECORDS

                    <span ng-if="expand4 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand4" type="I">
                    <li>Bit7pay may be required and / or directed to cooperate and aid the government and / or law enforcement authorities, police, investigating agencies, or Tribunals and Courts within the territory of India or from outside the said territory.</li>
                    <li>In such cases, subject to applicable laws with respect to data protection, Bit7pay shall be entitled to disclose any information about the User that is in its possession or control, including to government or law enforcement officials, police, investigating
                        agencies, Tribunals and Courts within the territory of India.</li>
                    <li>In particular, Bit7pay shall be entitled to initiate processes and disclosures, including but not limited to the following circumstances:</li>
                    <ol className="inner-ol">
                        <li>
                            information pertaining to or in pursuance of claims and legal process (such as summons / warrants);
                        </li>
                        <li>to protect Bit7pay’s property, rights, and safety and the property, rights, and safety of a third party or the public in general;</li>
                        <li>to identify and stop any activity that Bit7pay considers illegal, unethical, or legally actionable.
                        </li>
                    </ol>
                    <li>Bit7pay may, if so required under applicable Law, disclose the following information to the Director of the Financial Intelligence Unit-India, as appointed under the PMLA:</li>
                    <ol className="inner-ol">
                        <li>Name, designation and address of the Designated Director, the Principal Officer and all Senior Management;</li>
                        <li>User transactions listed in II(a)(ii) above by the 15th day of each succeeding month, or more frequently if so instructed by the authorities;</li>
                        <li>. User transactions listed in II(a)(iii) within seven working days of being satisfied that the transaction in question is suspicious in nature, or more frequently if so instructed by the authorities.
                        </li>
                    </ol>
                    <li>Bit7pay also compiles records and audit and compliance notes to determine the efficacy of its internal audit systems on an ongoing basis, and such notes are submitted to Bit7pay’s audit committee on a quarterly basis for this purpose.</li>
                </ol>

                <h4 >
                    5. VERIFICATION AND DUE DILIGENCE PROCESS FOR USERS

                    <span ng-if="expand5 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand5" type="I">
                    <li>Every User is compulsorily required to submit at the time of opening an account, documents and details as set out in this policy. Bit7pay is required to identify the said User based on the said documentation whenever an account is opened by a User</li>
                    <li>Bit7pay shall determine the identity of the User and shall take all reasonable steps to verify Users identity. An account will not be opened for a User if reliable customer due diligence cannot be conducted for such User.</li>
                    <li>If Bit7pay engages the services of a third party to carry out the User identification process, Bit7pay will ensure that:</li>
                    <ol className="inner-ol">
                        <li>
                            Bit7pay obtains the User due diligence carried out by such third party within two days;
                        </li>
                        <li>adequate steps are taken to ensure that copies of any part of the User due diligence will be made available by such third party without delay, upon request;</li>
                        <li>it is satisfied that such third party is regulated, supervised or monitored by, and complies with due diligence and record-keeping requirements prescribed under, the PMLA;</li>
                        <li>such third party is not based in a high-risk jurisdiction</li>
                        <li>no decision-making functions of Bit7pay are outsourced to such third-party;</li>
                        <li>Users are not required to furnish any additional copies of officially valid documents to such third-party;</li>
                        <li>Bit7pay itself is ultimately responsible for User due diligence; and</li>
                        <li>Bit7pay will comply with all other requirements that may be prescribed under all relevant anti-money laundering regulations.</li>
                    </ol>
                    <li>At the time of onboarding, all new Users are required to submit copies of: (I) their PAN card; (ii) bank account details, including account number, branch details, IFSC code, account name, and bank name; and (iii) Aadhaar card. Bit7pay will carry
                        out e-KYC authentication for a User using their Aadhaar number, if such User has provided explicit authorisation for the UIDAI to release their personal information through biometric authentication.</li>
                    <li>Bit7pay will determine whether a User is acting on behalf of a beneficial owner, and will take all necessary steps to identify such beneficial owner. If the User</li>
                    <li>Users are not permitted to act on behalf of another User, and can only transact on the Bit7pay platform on their own account, with their own funds, and for their own benefit.</li>
                    <li>Users are not permitted to open any of the following:</li>
                    <ol className="inner-ol">
                        <li>
                            an anonymous account;
                        </li>
                        <li>an account under a fictitious name; or</li>
                        <li>an account on behalf of other persons whose identity is undisclosed or unverifiable.</li>
                    </ol>
                    <li>No accounts will be opened by Bit7pay for any User who appears on the United Nations Security Council’s ISIL (Da’esh) & Al-Qaida Sanctions List, or on its 1988 Sanctions List.</li>
                    <li>Where the User is an individual, the User shall submit one copy of an officially valid document containing details of his/her permanent address or addresses, current address or addresses, and one copy of his/her recent photograph, which may be a
                        passport, a driving licence, PAN card, voter’s identity card, job card issued by the NREGA and signed by an official of the state government, and/or a letter issued by the UIDAI containing the name, address and Aadhaar number of such User.</li>
                    <li>Where the User is a company, it shall submit to Bit7pay the following: (i) Certificate of incorporation; (ii) Memorandum and Articles of Association; (iii) a resolution from the Board of Directors for trading in cryptocurrencies, and providing power
                        of attorney to its managers, officers or employees to transact on its behalf; (iv) Aadhaar number; (v) the PAN, driving licence, voter’s identity card, NREGA job card, or UIDAI letter containing name, address and Aadhaar number, of the managers,
                        officers or employees holding a power-of-attorney to transact on the User’s behalf; and other documents as may be requested.</li>
                    <li>Where the User is a partnership firm, it shall submit to Bit7pay one certified copy of the following documents: (i) registration certificate; (ii) partnership deed; and (iii) authorization letter for trading in cryptocurrencies; (iv) Aadhaar number;
                        (v) the PAN, driving licence, voter’s identity card, NREGA job card, or UIDAI letter containing name, address and Aadhaar number, of the person holding a power-of-attorney to transact on the User’s behalf; and other documents as may be requested.</li>
                    <li>Where the User is trust, it shall submit to Bit7pay one certified copy of the following documents: (i) registration certificate; (ii) trust deed; and (iii) authorization letter for trading in cryptocurrencies; (iv) Aadhaar number; (v) the PAN, driving
                        licence, voter’s identity card, NREGA job card, or UIDAI letter containing name, address and Aadhaar number, of the person holding a power-of-attorney to transact on the User’s behalf; and other documents as may be requested.</li>
                    <li>Where the User is a juridical person, it shall submit to Bit7pay one certified copy of the following documents: (i) document showing the name of the person authorised to act on behalf of the User; (ii) the PAN, driving licence, voter’s identity
                        card, NREGA job card, or UIDAI letter containing name, address and Aadhaar number, of the person holding a powerof-attorney to transact on the User’s behalf; ; and other documents as may be requested.</li>
                    <li>Where the User is a juridical person, Bit7pay shall verify that any person purporting to act on behalf of such User is so authorized and shall verify the identity of that person.</li>
                    <li>Bit7pay may, if so required under applicable Law, file know-your-customer records with the Central Registry of Securitisation Asset Reconstruction and Security Interest of India (
                        <strong>“CERSAI”</strong>) within 3 days of onboarding a new User, and may communicate a User’s KYC Identifier once it has been assigned by CERSAI for such User.</li>
                    <li>Bit7pay will not use the KYC records of any User for any purpose other than the verification of identity or address, and cannot transfer such records to any third party without prior authorisation of such User, or the Director or other regulator
                        appointed under the PMLA. All information collected from Users is treated as confidential, and will not be used for cross-selling. The information collected will be as non-intrusive as possible, and requests for any information that is not mandatory
                        will be labelled as optional.</li>
                    <li>Users who are politically exposed persons (“PEPs”) can only open an account on the Bit7pay platform under the following circumstances:</li>
                    <ol className="inner-ol">
                        <li>Bit7pay is able to gather sufficient information about the sources of funds of the family members and close relatives of such PEP;</li>
                        <li>the decision to open an account for the PEP on the Platform is taken by Senior Management, and Senior Management may decline to open such an account for any reason that it deems suitable, at its sole discretion;</li>
                        <li>the account of the PEP will be subjected to enhanced, ongoing monitoring, and such User is required to consent to such monitoring; and</li>
                        <li>if an existing User becomes a PEP at any point, Senior Management is required to provide its approval before such User’s relationship with Bit7pay can be continued, and Senior Management may decline to open such an account for any reason that
                            it deems suitable, at its sole discretion.</li>
                    </ol>
                </ol>

                <h4 >
                    6. ONGOING DUE DILIGENCE
                    MEASURES FOR TRANSACTIONS ON
                    THE BIT7PAY PLATFORM

                    <span ng-if="expand6 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand6" type="I">
                    <li>Bit7pay shall exercise ongoing due diligence with respect to the business relationship with every User and closely examine the transactions in order to ensure that they are consistent with their knowledge of the User, his business and risk profile
                        and where necessary, the source of funds.</li>
                    <li>Bit7pay will also review its due diligence measures and undertake measures to re-verify the identity of a User and obtain further information on a User’s activities, if Bit7pay has any suspicions of money laundering or the financing of terrorism.</li>
                    <li>Bit7pay will periodically verify the identity of all Users to determine whether there are any matches with any names appearing on any of the RBI’s sanctions lists.</li>
                    <li>All due diligence undertaken by Bit7pay is documented, designed to consider all relevant risk factors in determining overall risk and the appropriate mitigatory measures, is kept up to date; and will always be available to the relevant authorities
                        and self-regulating bodies.</li>
                    <li>Bit7pay will maintain physical copies of all identity documents of Users, after filing such documents and records with CERSAI for KYC purposes (if so required under applicable Law).
                    </li>
                    <li>Bit7pay will verify the identity of Users while carrying out transactions worth at least INR 50,000 (Indian Rupees Fifty thousand), whether through a single transaction or a series of connected transactions. If Bit7pay has reason to believe that
                        a User is intentionally structuring a transaction into a series of transactions, below the threshold of INR 50,000 (Indian Rupees Fifty thousand), it will undertake separate customer identification procedures.</li>
                    <li>In the event that it is brought to the attention of Bit7pay, that a particular User or account is maintained under a fictitious name, Bit7pay has the full right and authority to terminate and close such an account with immediate effect and without
                        prior notice to the User.</li>
                    <li>If Bit7pay doubts the adequacy or veracity of previously obtained customer identification data, Bit7pay shall review the due diligence measures including verifying again the identity of the User and obtaining information on the purpose and intended
                        nature of the business relationship, as the case may be. Bit7pay may also undertake customer identification procedures if third-party products are being sold on the Bit7pay platform, with dues of such sale exceeding INR 50,000 (Indian Rupees Fifty
                        thousand)
                    </li>
                    <li>Once a User has participated in transactions of a total value of at least INR 50,00,000 (Indian Rupees Fifty lakh) over the course of his/her engagement with the Bit7pay platform, Bit7pay will initiate a process of additional due diligence by seeking
                        the following documentation from such Users:</li>
                    <ol className="inner-ol">
                        <li>a customer declaration form, stating that all cryptocurrencies and all funds used by such User on the Bit7pay platform are sourced through legitimate channels, and containing other details in relation to the User;</li>
                        <li>bank statements for such Users over the previous three months;</li>
                        <li>a certificate from a chartered accountant, with details in relation to the financial soundness of the User and the User’s compliance with the PMLA and Foreign Exchange Management Act 1999; and</li>
                        <li>documents for the physical verification of identity and address for such User.</li>
                    </ol>
                    <li>Bit7pay will classify all Users ass high-risk, medium-risk or low-risk, and will periodically update the KYC records for all Users as follows:</li>
                    <ol className="inner-ol">
                        <li>once every two years for high-risk Users;</li>
                        <li>once every eight years for medium-risk Users; and</li>
                        <li>once every ten years for low-risk Users.</li>
                    </ol>
                    <li>Once a User has participated in transactions of a total value of at least over the course of his/her engagement with the Bit7pay platform, or deposits or transacts in an amount of at least INR 50,00,000 (Indian Rupees Fifty lakh) on the Bit7pay
                        Platform, Bit7pay will also conduct ‘chain analysis’ to identify the relevant public address for such User and earmark such User as either as ‘high risk’, ‘medium risk’, or ‘low risk’ based on parameters such as the use of cryptocurrencies by
                        such Users at online gambling websites, darknet websites, etc. This limit of INR 50,00,000 (Indian Rupees Fifty lakh) may be revised by Bit7pay from time to time, based on Bit7pay’s determination of appropriate thresholds in accordance with ongoing
                        compliance measures, and if so required under applicable Law.</li>
                    <li>Bit7pay will, in particular, monitor the following categories of transactions, and will conduct due diligence on an ongoing basis on them:</li>
                    <ol className="inner-ol">
                        <li>
                            large, complex transactions, including those with unusual patterns that are inconsistent with a User’s normal / expected level of activity, without an apparent economic rationale or legitimate purpose; and
                        </li>
                        <li>. transactions that involve high account turnover, inconsistent with the size of the balance ordinarily maintained by a User.</li>
                    </ol>
                    <li>As Users are not face-to-face customers of Bit7pay, Bit7pay may required to undertake enhanced due diligence, including certification of all documents provided by the Users, calling for additional documents whenever necessary, and requiring that
                        the first payments made by such Users be effected through the User’s KYC-compliant account with a bank. Any such requirements, as may be imposed under Applicable Law, will be incorporated into this AML Policy, and Bit7pay reserves the right to
                        update the AML Policy for this purpose.</li>
                    <li>Bit7pay’s staff are trained in Bit7pay’s due diligence and anti-money laundering measures, as well as all requirements prescribed under Applicable Law for this purpose, and may be contacted if any User has questions or concerns about any of measures
                        contained in this AML Policy.
                    </li>
                </ol>
                <h4 >
                    7. OBLIGATION ON THE PART OF THE USER

                    <span ng-if="expand7 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand7" type="I">
                    <li>The User hereby agrees and undertakes to not indulge, assist, abet and encourage in any manner whatsoever, in any activity involving money laundering or financing of any illegal or unlawful activities.</li>
                </ol>
                <h4 >
                    8. RETENTION OF RECORDS

                    <span ng-if="expand8 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand8" type="I">
                    <div className="inner-heading">Bit7pay shall maintain such records of the identity of Users in hard and soft copies in a manner, as may be specified under applicable laws or regulations, from time to time, and in the absence thereof, from the date of cessation of the transactions
                        between the User and Bit7pay for a period of</div>
                    <li>Ten years for ordinary transactions; and</li>
                    <li>Twelve years in case of Suspicious Transactions</li>
                </ol>
                <h4 >
                    9. NOTICES

                    <span ng-if="expand9 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand9" type="I">
                    <li>Any notice or other communication provided for in this Agreement shall be sent only through electronic mail. User hereby agrees to receive electronic or any other form of communication and notifications from Bit7pay. Email messages sent over the
                        Internet are not always secure and Bit7pay is not responsible or liable for non-receipt of such communication by User. Once the email is dispatched by Bit7pay, it shall be deemed to have been served on the User. Bit7pay shall be deemed to have
                        received communications from the User only upon actual receipt into the Inbox of the account of the person to whom such communication is addressed and acknowledged. Bit7pay shall not be liable or responsible for non-receipt of communications or
                        for any damages incurred by the result of sending email messages over the Internet.</li>
                    <li>All communications to Bit7pay shall be at <a href="https://bit7pay.com/support" target="_blank">https://bit7pay.com/support</a>. Bit7pay shall ensure that any change or modification to the same is uploaded on the Bit7pay Website.</li>
                    <li>All communications to User shall be at the electronic mail address provided by User, as part of the KYC norms. User shall ensure that any change in the electronic mail address or communication option is duly intimated to Bit7pay.</li>
                </ol>
                <h4 >
                    10. GOVERNING LAW & JURISDICTION

                    <span ng-if="expand10 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand10" type="I">
                    <li>This Agreement shall be governed by and construed in accordance with the laws of India.</li>
                    <li>The parties agree to irrevocably submit to the exclusive jurisdiction of the courts in Allahabad for the resolution of any disputes arising from this Agreement or in connection therewith or pursuant thereto.</li>
                </ol>
                <h4 >
                    11. SUCCESSORS

                    <span ng-if="expand11 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand11" type="I">
                    <div className="inner-heading">
                        This Agreement shall bind and inure to the benefit of the parties, and their respective successors and permitted assigns.
                    </div>
                </ol>
                <h4 >
                    12. SEVERABILITY

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>The invalidity or unenforceability of any provision of this Agreement shall not in any way affect, impair or render unenforceable this Agreement or any other provision contained herein, which shall remain in full force and effect.</li>
                    <li>This Agreement shall be considered divisible as to such provision, which is deemed to be invalid or unenforceable and the remainder of this Agreement shall be enforceable and binding on the Parties.</li>
                </ol>
                <h4 >
                    13. WAIVER

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">No provision of this Agreement may be waived or changed except by a writing signed by the party against whom such waiver is sought to be enforced. The failure or omission by either party at any time to enforce or require strict or timely compliance
                        to any provision of this Agreement shall not affect or impair that provision or any other provision in any way or the rights of such party hereof, to avail itself of the remedies it may have in respect of any subsequent breach of that or any other
                        provision.
                    </div>
                </ol>
                <h4 >
                    14. RECITALS

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        The Recitals, Schedules and Annexures in this Agreement shall form part of this Agreement and the contents thereof shall be read into this Agreement. Headings are for the purpose of easy reference and shall not affect the meaning or interpretation of
                        this Agreement.
                    </div>
                </ol>
                <h4 >
                    15. ENTIRETY

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        This Agreement, and the other agreements contemplated hereby, constitute the entire agreement.
                    </div>
                </ol>
                <h4 >
                    16. GOVERNMENT APPROVALS

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>This Agreement is subject to confirmation by the Government of India of the legality of facilitating the dealing in Cryptocurrencies (including bitcoins), and in the event that the Government of India was to hold that transactions involving cryptocurrencies
                        are invalid or illegal in India, this Agreement shall stand automatically terminated without further notice to User.
                    </li>
                    <li>Bit7pay has given full disclosure of the current Government in relation to Bit7pay’s business and regulatory status, and has sought discussions with the Government with respect to Cryptocurrencies including bitcoins in India and the risk involved
                        in dealing with or investing in the same. The current regulatory status and permissibility of the use of cryptocurrencies, including bitcoins, in India is unclear. The User is deemed to have understood, agreed to and accepted the risk and costs
                        of such investment.</li>
                </ol>
                <h4 >
                    17. DESIGNATED DIRECTOR AND PRINCIPAL

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        Bit7pay shall appoint a Principal Officer and a Designated Director, and will designated Senior Management as required under Applicable Law, along with setting up a compliance team, who shall be responsible for ensuring compliance, monitoring transactions,
                        and sharing and reporting information as required under the law/regulations.
                    </div>
                </ol>
                <h4 >
                    18. MODIFICATIONS

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <li>These terms may be periodically reviewed and revised. The revised terms will be uploaded on the Bit7pay Website and will reflect the modified date of the terms. The User is required to periodically visit the website and review terms and any changes
                        thereto.
                    </li>
                    <li>Continued use of the Bit7pay Services constitutes the agreement of User to the terms contained herein and any amendments thereto.</li>
                    <li>This agreement or the responsibilities or benefits arising therefrom cannot be assigned by User save and except with the prior written consent of Bit7pay.</li>
                </ol>
                <h4 >
                    19. MISCELLANEOUS

                    <span  className="pull-right"> - </span>
                </h4>
                <ol  type="I">
                    <div className="inner-heading">
                        All other provisions of the Bit7pay Terms of Service shall be read into this policy and shall form part hereof, including Governing Laws and Jurisdiction, notices, severability, assignment and such or other provisions.
                    </div>
                </ol>
            </div>

        </section>
        <Footer/>
    </Container>
</ScrollContext>)

export default Aml;
