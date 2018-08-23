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

const Terms = (props)=>(<ScrollContext>
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|Terms of Use</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} />
        <section>
            <div className="terms-content">
                <div className="header-title">
                    <img src={require("../../img/quote.svg")} alt=""/>Terms of use
                </div>
                <p>
                    Omshanti Infracreations LLP, is a private limited company incorporated under the laws of India and having its registered office at, 3M/1 Tagore town, Allahabad,Uttar Pradesh, India. (herein after referred to as “Bit7pay”, which term shall refer to and
                    include its owners, directors, investors, employees, officers, representatives, affiliates, or other related parties). Persons availing of the Bit7pay Services (as defined below), directly or indirectly, are referred to herein, as “Users”. Only
                    natural or legal persons, resident in India, can be Users, and no person other than a natural or legal person with a valid, authorised account with Bit7pay can avail of the Bit7pay Services in any manner whatsoever. This is an agreement between
                    Bit7pay and User, which together with the Privacy Policy (collectively referred to herein as the “Agreement”) shall be binding on the User. By clicking the “I Agree” button in the Bit7pay app, User hereby agrees to be bound by the Terms and Conditions
                    of Service set out hereunder for availing of the Bit7pay Services and also the policies mentioned herein and to any modifications, amendments or updates made to the said Agreement.
                </p>
                <p>
                    Bit7pay provides facilitation services,inter alia, the Bit7pay Android App, Bit7pay iPhone App (collectively, “Bit7pay App”) and the Bit7pay website at “www.Bit7pay.com” (“Bit7pay Website”, and collectively with the Bit7pay App, the “Bit7pay Platform”),
                    in addition to other current or future services, products,features, technologies, and functionalities across a variety of platforms (collectively “Bit7pay Offers”). Bit7pay App, Bit7pay Website and Bit7pay Offers are collectively referred to hereunder,
                    as “Bit7pay Services”, and any account opened by a User with Bit7pay to avail of the Bit7pay Services in any form shall be referred to as a “User Account”. The terms governing such offer of services, the consideration payable, limitations applicable
                    thereto and the representations and warranties of Bit7pay are more fully set out herein.
                </p>
                <p>
                    Users are required to read, review, understand and agree to the terms hereunder for using or availing of the Bit7pay Services, by clicking on the “I Accept” option in the Bit7pay App. Upon clicking “I Accept” in the Bit7pay App, or upon availing of any
                    part of the Bit7pay Services, or upon applying for the opening of a User Account on the Bit7pay Platform, a User indicates their acceptance of the terms of this Agreement and their intention to be bound by it. By executing this agreement, Users
                    are deemed to have understood the technology behind the creation and circulation of cryptocurrencies, including “Bitcoins”, are deemed to have understood and accepted the risks inherent in dealing in cryptocurrencies and in availing of the Bit7pay
                    Services, and are deemed to have expressly given their consent to be bound by the terms herein, including the representations, warranties and disclosures set out hereunder. Once the terms contained hereunder are accepted by a User, the same shall
                    be binding on such User while availing of the Bit7pay Services in any manner whatsoever, and subsequent to such User’s use of the Bit7pay Services. Every User shall ensure that no third party uses its account on the Bit7pay Platform, and that such
                    User uses the Bit7pay Services only for its own account and for its own benefit. Further, in addition to the terms contained herein, Users shall be bound by the terms and conditions governing purchase, sale or trading of Cryptocurrencies, including
                    “Bitcoins”, as stipulated by the issuers thereof. Users shall be permitted to avail of the Bit7pay Services including the User Account only after reading the terms herein and in the policy documents set out hereunder and after accepting the same.
                </p>

                <h4 ng-click="expand1 = !expand1">
                    1. LIMITATIONS ON USE OF BIT7PAY SERVICES
                    <span ng-if="expand1 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand1" type="I">
                    <li>
                        Bit7pay offers a platform for trading in cryptocurrencies through the Bit7pay Platform. Presently the platform offers trading in Bitcoins, although the Bit7pay Services may extend to other cryptocurrencies as well in the future (for which all of the terms
                        contained herein will apply). Bit7pay is neither the creator nor the administrator of any cryptocurrencies including Bitcoins, and is not in any way responsible for the global pricing of any cryptocurrency, the operation of any blockchain with
                        respect to any cryptocurrency, or the mining process in relation to any cryptocurrency. It merely facilitates the tradingin cryptocurrency by Users on the Bit7pay Platform, and does not engage in such trading itself, or buy or sell any cryptocurrency
                        for its own account or for its own benefit. Bit7pay has no control over the generation, distribution, retention (except in its wallets), verification, termination, or market volatility of any cryptocurrencies. It merely acts as an intermediary
                        for the trading in cryptocurrencies by User, and provides other ancillary services in relation thereto, which are more fully set out hereunder.
                    </li>
                    <li>
                        Bit7pay does not provide any warranty of any kind, either express or implied, in relation to the Bit7pay Services. The Bit7pay Services and the products offered therein, including facilitation services for the trading ofcryptocurrencies between Users,
                        are provided on an “as-is”and “as available” basis. Users avail of the Bit7pay Services, and deal in cryptocurrencies at their own risk and with full awareness of the risk of the possiblediminishment, devaluation and (potentially) complete loss
                        of the entire holding or valuation of the User Account and all cryptocurrencies held therein, in the event of the occurrence of any of the risk factors outlined in this Agreement (as well as other risk factors inherent in any transactions involving
                        cryptocurrencies), including, but not limited to, changes in the regulatory or legal regime in India and/or outside India,andany legal, regulatory, contractual or other restrictions that may be placed on Bit7pay. It is hereby expressly declared
                        that Bit7pay offers no warranty of any kind regarding the Bit7pay Services.
                    </li>
                    <li>
                        Bit7pay Services are strictly available for use only within India, to the extent (and till such time) that transactions or trading in cryptocurrencies are permitted and not been curtailed in such parts of India. In the event that a User resides in any
                        such jurisdiction within India where any transactions in cryptocurrencies may be prohibited (“Prohibited Jurisdiction”), Users are not permitted to usetheBit7pay Services in any form (“Prohibited Jurisdiction Use”). Any Prohibited Jurisdiction
                        Use will amount to a breach of this Agreement, and Bit7pay shall forthwith be entitled to terminate this Agreement and the use and operation of the relevant User Account, shall extend all cooperation to the relevant governmental and enforcement
                        authorities, and shall not be liable in any manner whatsoever for any Loss arising out of such, in relation to, or subsequent to such Prohibited Jurisdiction Use. Users are therefore duly warned against availing of the Bit7pay Services in any
                        manner whatsoever in or from a Prohibited Jurisdiction, or from anywhere outside India. Users shall be solely responsible for ensuring compliance with this requirement, and for compliance with the laws and regulations of the jurisdiction in or
                        from where they are availing of the Bit7pay Services. Subject to confirmation by the User to be bound by the terms contained herein, and compliance with the terms contained herein at all times, Bit7pay hereby grants to the User a personal, revocable,
                        non-exclusive, non-transferable, non-sub-licensable, and limited right to use the Bit7pay Services.
                    </li>
                    <li>
                        Users are hereby duly cautioned that presently in India, ‘virtual currencies’ (including all cryptocurrencies) have not been recognised or authorised as a medium for payment, as a commodity for trade, or in any form, by central bank, monetary authority,
                        or governmental or regulatory bodyin India. The Reserve Bank of India (“RBI”) has currently issued threepress release viz.dated 24th December 2013, 1stFebruary 2017 and 5th December 2017 respectively, cautioning users, holders and tradersagainst
                        the use of, and trading in,virtual currencies. Copies of these circulars are available on the Bit7pay Website at www.Bit7pay.com/legal. Users hall therefore avail of the Bit7pay Services subject to the above caution issued by the RBI, and should
                        be aware of the regulatory and financial risks inherent in dealing with cryptocurrencies in any manner.
                    </li>
                    <li>
                        Bit7pay may use third party service providers to render some or all of the Bit7pay Services, or for facilitating the same. User agrees to the use of such third parties, and hereby provides consent for collection, analysis, use, dissemination and retention
                        by such third parties of any and all personal data, or and sensitive personal data and information, of the User. User shall be bound by the terms of service of such third parties to the same extent as Bit7pay would be bound. Bit7pay shall however
                        not be responsible or liable for any act, inaction, commission or omission by such third parties, including with respect to data protection, privacy, security practices, or compliance with applicable laws and regulations with respect thereto,
                        including (but not limited to) the Information Technology Act 2000.
                    </li>
                    <li>
                        These terms shall be applicable to all existing and new Users. Bit7pay reserves the right to modify or amend the terms herein, and an intimation thereof shall be sent to existing Users, who may decide to opt out of the Bit7pay Services at such time by
                        intimating Bit7pay of such intention in writing. Continued use of the Bit7pay Services shall be deemed to amount to confirmation and acceptance of the modified or altered terms hereof.
                    </li>
                    <li>
                        The Parties agree that the terms set out hereunder arein consideration of good and valuable consideration, and shall be and are intended to be binding on both Parties.
                    </li>
                </ol>

                <h4 ng-click="expand2 = !expand2">
                    2. SCOPE OF SERVICES
                    <span ng-if="expand2 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand2" type="I">
                    <li>
                        Bit7pay offers a platform for its registered Users to buy or sell Cryptocurrencies on the Bit7pay Platform. Presently Bit7pay offers its services in facilitating and providing a platform for Users to buy and sellcryptocurrencies to and from each other
                        (and not to or from Bit7pay, directly or indirectly).
                    </li>
                    <li>
                        Subject to the conditions set out above, Users may utilize the Bit7pay Services to purchase and/or sell cryptocurrencies to and from each other, using the Bit7pay Platform. The authentication of such buyers and sellers is the sole responsibility of the
                        concerned User(s), and Usersare required to ensure that all of the Bit7pay Services are availed of only for legal purposes and through legal means
                    </li>
                </ol>


                <h4 ng-click="expand3 = !expand3">
                    3. BIT7PAY ACCOUNT
                    
                    <span ng-if="expand3 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand3" type="I">
                    <div className="inner-heading">User may open a User Account subject to the following conditions:</div>

                    <li className="inner-heading-li">
                        Opening of User Account.
                    </li>
                    <ol className="inner-ol">
                        <li>User may create a User Account by first downloading and installing the Bit7pay App on their Android smartphone or iPhone by using the Play Store or App Store, as applicable, subject to the terms contained herein.</li>
                        <li>User shall comply with the procedures prescribed for opening the User Account, including providing a valid and subsisting email address and completing the verification process and providing all requisite details and documents.</li>
                        <li>Bit7pay reserves the right to reject opening, registration or validation of a User Account on any grounds it deems suitable, at its sole discretion, with due regard to legal and regulatory considering concerning cryptocurrencies.</li>
                    </ol>

                    <li className="inner-heading-li">
                        Data Disclosures & Consent.
                    </li>
                    <ol className="inner-ol">
                        <li>User hereby allows access to and consents to Bit7pay availing of and using the personal data and sensitive personal data and information of the User including but not limited to:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>name, address, contact informationidentification documents and details contained therein;</li>
                            <li>mobile numbers and IP addresses from which the Bit7pay Services are being accessed; and</li>
                            <li>identity numbers and details of all equipment utilised to access or avail of the Bit7pay Services, including devices from which the Bit7pay Services are accessed; the device numbers, model and such or other details that may be culled out through
                                automated processes; IMEI, ISMI, operating system, device model, RAM, CPU and other details for computers and mobile phones,unique installation number, iCloud device or email id for Apple products, fingerprinting details and other sensitive
                                personal information required for allowing or completing the transactions envisaged herein, as Bit7pay’s sole discretion.</li>
                        </ol>
                        <li>Bit7pay may call upon User to furnish additional details and / or documents, either pursuant to governmental or regulatory compliance or due to modifications in any terms contained herein. User hereby agrees and undertakes to comply with the same
                            within the timelines prescribed.</li>
                        <li>In addition to the terms contained herein, Users shall be bound by the terms of the Privacy Policy available at <a href="https://www.bit7pay.com/privacy-policy" target="_blank">www.bit7pay.com/privacy-policy</a>.</li>
                    </ol>
                    <li className="inner-heading-li">
                        Know Your Customer Compliance.
                    </li>
                    <p>In addition to the terms contained herein, Users shall be bound by the terms of Bit7pay’s Anti-Money Laundering Policy (“AML Policy”), which is available at https://www.Bit7pay.com/aml-policy/. By virtue of using any part of the Bit7pay Services,
                        and/or by virtue of accepting and entering into this Agreement, Users are deemed to have accepted, and to have agreed to comply at all times with, the terms ofthe AML Policy. Only Users complying with the following Know Your Customers (“KYC”)
                        procedures, as well as all terms and procedures contained in the AML Policy, would be allowed to avail of the Bit7pay Services:
                    </p>
                    <ol className="inner-ol">
                        <li>Users shall provide the following details, along with digitized copies of supporting documents for such details, simultaneously with the application for a User Account on the Bit7pay Platform, failing which the User Account shall not be activated:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Name in Full, as in the PAN card / Bank Account;</li>
                            <li>Contact Number;</li>
                            <li>Email Address;</li>
                            <li>Digitized copy of the PAN card;</li>
                            <li>Bank Account Details including the Bank Account Number; Account Holder’s Name in full.</li>
                        </ol>
                        <li>User hereby consents to retention of the above details and documents by Bit7pay for its own use, for as long as Bit7pay deems necessary. Bit7pay shall be entitled to retain the above details and documents even for of those Users whose registration
                            has been rejected by Bit7pay.</li>
                        <li>Bit7pay shall take reasonable care and caution in the collection and retention of allinformation, data and documents provided byUsers. Bit7pay shall comply with the terms of the Privacy Policy available at <a href="https://www.bit7pay.com/privacy-policy"
                                                                                                                                                                                                                                             target="_blank">www.bit7pay.com/privacy-policy</a> for collection and retention of User data, including sensitive personal data and information. The Privacy Policy may be periodically reviewed and revised, modified or updated. By accepting the
                            terms herein and by continued use of the Bit7pay Services, Users are deemed to have agreed to such revised terms of the Privacy Policy, and shall be bound by such terms. In the event that a User wishes otherwise, upon compliance with the procedures
                            set out hereunder for termination, User may terminate this Agreement.</li>
                        <li>An Aadhaar card must be provided by all prospective Users, as Bit7pay will use Aadhaar details to carry out verification procedures for each such User’s identity and residence. However, Bit7pay may call for additional documents as well during
                            the KYC process, at its discretion.</li>
                        <li>Acceptance of the terms herein shall be tantamount to acceptance of the Privacy Policy and the AML Policy, and the terms contained therein. Users are required to read, understand and affirm the AML Policy and the Privacy Policy before clicking
                            the “I Accept” button to our Terms of Service.</li>
                        <li>Bit7pay may call upon User to furnish additional details and / or documents, either pursuant to governmental or regulatory requirements, or due to modifications in any of the terms of this Agreement, the Privacy Policy or the AML Policy. User
                            hereby agrees and undertakes to comply with the same within the timelines prescribed.</li>
                    </ol>
                    <li className="inner-heading-li">
                        Verification Process.
                    </li>
                    <ol className="inner-ol">
                        <li>Bit7pay shall, at its sole discretion activate the User Account upon verification of the details provided through the KYC process included in this Agreement and in the AML Policy. In the event of any factual inaccuracies or other problems with
                            the details or documentation provided by a prospective User during this process, Bit7pay shall be entitled to forthwith terminate the User Account without notice to the concerned User, and such User shall not be permitted to use the User Account
                            or the Bit7pay Services thereafter. Bit7pay may call upon User to furnish additional details and / or documents, either pursuant to governmental or regulatory requirements, or due to modifications in any of the terms of this Agreement, the Privacy
                            Policy or the AML Policy,andBit7pay is entitled to terminate existing User Accounts for non–compliance with such requests for further details or information after due notice.</li>
                        <li>Bit7pay may, at its sole discretion, send to the User intimation of reasons for non-activation of a User Account. Bit7pay is not under any obligation, however, to provide such notice.</li>
                        <li>Only natural or legal persons with a valid Indian PAN Card and an Aadhaar card may apply for a User Account and avail of any part of the Bit7pay Services. Upon verification, if the PAN Card details furnished by a User are found to be falsified,
                            invalid or otherwise inaccurate, Bit7pay shall forthwith terminate the relevant User Account without notice to the concerned User.</li>
                        <li>Existing Users may be called upon to comply with the KYC and verification process contained in this Agreement and in the AML Policy. In the event of termination or deactivation of an existing User Account, Users shall be duly intimated by Bit7pay,
                            along with reasons for such deactivation and the procedures for redress (if any). Delay in termination of such User Accounts shall not amount to a waiver of the mandatory information and documentary requirements contained in this Agreement and
                            in the AML Policy.</li>
                    </ol>
                </ol>

                <h4 ng-click="expand4 = !expand4">
                    4. TERMS OF PAYMENT
                    
                    <span ng-if="expand4 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand4" type="I">
                    <li>Users shall be bound by the policies, rules and User Guidelines prescribed by Bit7pay periodically, the terms of which shall form part of this Agreement.</li>
                    <li>User is hereby cautioned that Bit7pay does acceptany payments in cash and has not authorised any person whatsoever to accept any payments in cash. User is advised not to give cash to any person, irrespective of any representations that such person
                        may make with respect to creating an account or depositing suchamounts with Bit7pay or with another User on behalf of such User. User is also hereby cautioned that each User Account is intended only for the use of that single User, and no other
                        person. Hence no User is permitted to either offer or accept from any another person, services in relation investing in any cryptocurrencies through another User Account.</li>
                    <li>Users are required to conduct all transactions in relation to the Bit7pay Services only through their own, duly authenticated, and legally opened and maintained bank accounts in India. All payments shall be made in Indian Rupees (INR) for purchase
                        or sale of cryptocurrencies on the Bit7pay Platform. Subsequent to any transaction on the Bit7pay Platform, User shall ensure that immediate intimation of payments made, the bank details from which such payment was made and the Bit7pay account
                        to which such payment to be credited,is made to Bit7pay through the Bit7pay App. Any payments made without furnishing these details shall be deemed to be unaccounted payments, and Bit7pay shall not be liable for any non–accounting, non-crediting
                        or other treatment of such sums, or of the cryptocurrencies pertaining to such sums, to the relevant User Account. Bit7pay shall also not be responsible for any Loss that may be caused to the User due to such non–crediting of the said sum, including
                        losses from any fluctuations in the price of cryptocurrenciesthat occur during the time it takes Bit7pay to verifythe above details, or on account of the non–transfer or non-credit thereof. User shall be solely responsible for ensuring prompt
                        intimation of the above details to Bit7pay to ensure immediate completion of the transaction of the purchase of the concerned cryptocurrencies. Bit7pay shall not be responsible or liable in any way for any unaccounted payments deposited to anybank
                        account from unregistered or anonymous Users. Bit7pay shall be entitled to appropriate such unaccounted payments to its account, and User shall forfeit the same, if the verification details sought for above are not furnished to Bit7pay by the
                        relevant User within seven days of the date on which the transaction is effected by the User. </li>
                    <li>Bit7pay offers the Bit7pay Services for consideration in the form of transaction fees, as intimated to User prior to completion of the transaction. User hereby agrees to make the payment of such transaction fees, on terms set out on the Bit7pay
                        Website. All payments due to Bit7pay shall be automatically debited from the relevant User Account, and User consents to such debit on a periodic basis. Any transaction fees due from a User, which cannot be debited from the concerned User Account
                        on account of an insufficiency of funds, or for any other reasons whatsoever, shall be charged to such User through an invoice issued by Bit7pay to the User, which shall be paid by the User in accordance with the terms set forth in such invoice.
                        All payments to Bit7pay shall be in INR.</li>
                    <li>Any payments to be made by Bit7pay to any User in relation to any transaction entered into between Users (and facilitated by Bit7pay on the Bit7pay Platform) shall be made after all appropriate deductions and withholding is made, as per applicable
                        Law.
                    </li>
                </ol>
                <h4 ng-click="expand5 = !expand5">
                    5. <span className="blue">ANTI-MONEY LAUNDERING & ANTI – ABUSE</span>
                    
                    <span ng-if="expand5 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand5" type="I">
                    <div className="inner-heading">Bit7pay has zero tolerance towards use of any portion of the Bit7pay Services for or in connection with any illegal or unlawful purpose. Any such use of the Bit7pay Services by any User shall result in forthwith termination of the relevant User
                        Account, and Bit7pay shall cooperate with governmental and regulatory authorities in the reporting and investigation of such actions (including by providing any information and details that such User has provided to Bit7pay).</div>
                    <li>
                        Users shall be bound by the terms of the AML Policy at all times, in addition to the terms contained herein. The terms of the AML Policy shall be read as part and parcel of this Agreement.
                    </li>
                    <li>Users shall ensure that the terms of the AML Policy are strictly complied with at all times, both during and after the User’s use of the Bit7pay Services. Bit7pay shall not allow the Bit7pay Services to be used for any illegal or criminal purposes,
                        including (but not limited to) money laundering and the funding of terrorist activities.</li>
                    <li>Bit7pay shall report all suspicious activities to the concerned authorities to ensure initiation of investigation and prosecution. Users are therefore strongly cautioned against misuse of the Bit7pay Services in any manner for illegal activities.</li>
                    <li>Acceptance of the terms herein shall be tantamount to acceptance of the AML Policy and the terms contained therein. Users are required to read, understand and affirm the AML Policy before clicking the “I Accept” button to these Terms of Service.
                        Bit7pay may periodically review and revise, modify or update the AML Policy to ensure that it complies with all requirements of applicable Law, and for any other reason that it may deem suitable at its sole discretion. By accepting the terms contained
                        herein and by continued use of the Bit7pay Services, Users are deemed to have agreed to such revised terms of the AML Policy and shall be bound by the same. Non-receipt of such intimation shall not exonerate User from complying with the revised
                        AML and KYC Policies. Users who do not wish to abide by the same may decide to opt out of the Bit7pay Services at such time by intimating Bit7pay of such intention in writing, and such Users shall not be permitted to avail of the Bit7pay Services
                        in any way after such intimation.</li>
                    <li>Bit7pay reserves the right to decline or discontinue, as the case may be, any User Account, at its discretion, with present as well as prospective Users at all times. In the event of any suspicious activity being disclosed, or if a User is suspected
                        of abusing the Bit7pay Services in any way, Bit7pay shall have the right to suspend or terminate the relevant User Account of a User, and this Agreement shall stand terminated forthwith.</li>
                    <li>Where applicable, intimation of such suspension or termination shall be duly sent to the User and the accumulated monies or cryptocurrencies in the account of such User shall be duly secured and shall accrue in favour of such User, unless otherwise
                        appropriated by Bit7pay towards dues owed to it, or retained pending confirmation from a regulatory or statutory authority or in compliance with an order from a governmental or regulatory authority, court, or quasi-judicial body. Amounts lying
                        in any User Account suspected of being associated with anyactivity that contravenes any applicable Law, or of abusing the Bit7pay Services, shall not be released in favour of any User until an appropriate order is received from a governmental,
                        regulatory, judicial or quasi-judicial body that is competent to pass such an order.</li>
                </ol>
                <h4 ng-click="expand6 = !expand6">
                    6. USER GUIDELINES
                    
                    <span ng-if="expand6 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand6" type="I">
                    <li>
                        Users shall ensure strict compliance with the following user guidelines set out hereunder (<strong>“User Guidelines”</strong>), as well as the terms of the AML Policy:
                    </li>
                    <ol className="inner-ol">
                        <li>Users shall ensure that they provide current, accurate, and complete information during the process of opening the User Account, and shall ensure that all such information is updated immediately upon any change of circumstances, or when prompted
                            to do so by Bit7pay.</li>
                        <li>User shall not divulge their account details to any third parties, including other Users. Users shall be solely responsible for ensuring the confidentiality and protection of the data pertaining to their User Account.</li>
                        <li>Users shall not share their account passwords with any third parties, including other Users.</li>
                        <li>Users shall not allow any third parties (including any other Users) to use their User Account in any manner, or to derive any benefit whatsoever from such User Account. Each UserAccount is intended for the use of a single User, who has registered
                            with Bit7pay in the manner prescribed under this Agreement and in the AML Policy. Each User is only permitted to have one User Account, and cannot open or maintain multiple User Accounts, or attempt to operate or gain access to another User
                            Account (irrespective of whether the consent of such User has been obtained for such use or access).</li>
                        <li>User shall be wholly responsible and liable for all activities that occur in relation to, or in connection, their User Account, irrespective of whether the User has personal knowledge or controlin relation to such activities.</li>
                        <li>Users shall utilise the Bit7pay Services only for their personal purposes, and not for any commercial, industrial or professional purposes whatsoever.</li>
                        <li>Users shall use the Bit7pay Services only for lawful purposes and shall not use any part of the Bit7pay Services, for or in connection with any action or conduct which may amount to a violation of any applicable Law. Users shall be solely liable
                            for all consequences (whether under applicable Law or otherwise) of any activities in connection with their User Accounts that contravene applicable Law in any manner whatsoever.</li>
                        <li>Without prejudice to the generality of the above, Users shall not use the Bit7pay services for any unlawful purpose, including but not limited to money laundering, terrorism or any other illegal activity. Users shall also not use or avail of the
                            Bit7pay Services to convert illegal or wrongful gains, including those from criminal activities.</li>
                        <li>Users shall comply with the IPR policy set out herein and shall not violate the proprietary rights of Bit7pay, or of any third party.
                        </li>
                        <li>Users shall not use circumvention or obfuscating technologies to mask their IP addresses, or to hide transaction details, or attempt in any way to conceal or alter information or details that Bit7pay is entitled to ascertain, analyse, collect
                            or retain under applicable Law, or in accordance with the terms of the Agreement, the Privacy Policy or the AML Policy. Users shall not create or distribute any technologies for such purposes, or provide any assistanceto any other person in
                            any manner for such purposes.</li>
                        <li>.Users shall ensure that true and correct details are furnished to Bit7pay including allinformation required for the account opening process and the KYC process (both during User onboarding and on an ongoing basis); transactional details and such
                            or other information, details and clarifications thatBit7pay may require from time to time;</li>
                        <li>. Users shall not make any misrepresentation in any communication to Bit7pay, or with respect to any information or details rendered to Bit7pay at any time, and shall not otherwise attempt to misinform or misguide Bit7pay in any manner. Users
                            are hereby duly informed that Bit7pay shall share all such details with regulatory or legal authorities, as required under applicable Law, and the User shall be solely responsible for the correctness and veracity of the contents thereof. Bit7pay
                            shall have no liability whatsoever for any inaccuracy or falsehood in any information, document or communication from a User.</li>
                        <li>User shall ensure that the source of the monies used for purchase or transfer of cryptocurrencies on the Bit7pay Platform is entirely lawful, and that such transfer is made from a legal Indian bank account of such User. User shall be solely liable
                            for any illegality with respect to the source of funds used for transactions on the Bit7pay Platform, or for any other illegality with respect to such transactions.</li>
                        <li>User shall not misuse or abuse the Bit7pay Services in any manner. In particular, User shall not:</li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Violate these terms or the terms of the policies and guidelines prescribed by Bit7pay;</li>
                            <li>Upload or share any information belonging to another person which the User does not have any right to share;</li>
                            <li>Impersonate another person, including any other User;</li>
                            <li>Upload or share any information that is invasive of another person’s privacy;</li>
                            <li>Upload or share any information that is grossly harmful, harassing, blasphemous, defamatory, libellous, obscene or pornographic;</li>
                            <li>Put forth any information that is hateful, or racially, ethnically objectionable, disparaging;</li>
                            <li>commit any act relating to or encouraging money laundering or gambling;</li>
                            <li>Do any act that is paedophilic or harming minors in any way;</li>
                            <li>Infringe any patent, trademark, copyright or any other proprietary rights of Bit7pay or of third parties;</li>
                            <li>Violate any law in India for the time being in force;</li>
                            <li>Deceive or mislead or communicate any information, which is grossly offensive or menacing in nature or about the origin of messages containing such information;</li>
                            <li>Upload any information containing software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                            <li>Do any act that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevent investigation of any
                                offence or insult any other nation;</li>
                            <li>Knowingly host or upload any information or initiate the transmission of any information mentioned above from points (ii) to (xiii):</li>
                            <li>User shall take reasonable measures to secure personal devices and information contained on it. User will ensure not circumvent any law in force by changing the technical configuration of personal devices, which has the capability to change
                                their normal course of operation other than what it is supposed to perform.</li>
                            <li>User shall not induce or entice other persons to avail of the Bit7pay services or to open accounts.</li>
                            <li>Bit7pay does not encourage Users to promote or advertise its services. Participation in its referral program is limited to Users sharing their experience with peers and the same should not be to misrepresent or mislead any third parties. Users
                                shall not make any representations or any warranties with respect to Bit7pay services to any third parties. Users are not allowed to represent Bit7pay in any manner whatsoever and shall be solely liable for any third parties acting on their
                                representations or statements.</li>
                            <li>Users shall bear all responsibility for maintaining the confidentiality of their account information, including User Name, password / PIN, safeguarding their User Accounts including the cryptocurrencies stored therein; undertaking / implementing
                                reasonable security measures to protect the same from malicious attacks or inadvertent losses and for any activity including transactions that are undertaken from the User Account.</li>
                            <li>Bit7pay shall take reasonable measures to ensure security of their infrastructure but shall not be responsible or liable for any Loss arising due to breach or violation of third party infrastructure.</li>
                            <li>User shall be responsible for the confidentiality of the transactions in their account. Users have been duly notified that their transactions are not anonymous and that transaction activity will be shared if called upon by any legal, governmental
                                or regulatory authority.</li>
                            <li>User shall notify Bit7pay through “ticket.Bit7pay.com” immediately upon noticing any suspicious activity on their User Account, or any unauthorized use of the User Account or their password or login details, or any breach of security in relation
                                to the User Account. Bit7pay shall not be liable for any Loss caused to the User as a result of such unauthorised use or access, if such Loss occurs pursuant toa failure to notify Bit7pay in a timely manner.</li>
                            <li>Users are cautioned against undertaking any suspicious activity or suspicious transactions on their User Accounts. In the event of any suspicious or large transactions being undertaken on a User Account, Bit7pay shall have the right (but not
                                the obligation) to verify such activity and carry out further KYC procedures, and if required, to suspend the transactions or freeze the relevant User Accounts, till compliance by the User with Bit7pay’s authentication processes (as described
                                in this Agreement or in the AML Policy) to Bit7pay’s satisfaction. Bit7pay shall be entitled to call for all such transaction details, as it deems fit. Bit7pay shall not be liable for either taking such action to suspend or terminate such
                                accounts, or for any inaction on its part, in the event a suspicious transaction is undertaken with respect to a User Account.</li>
                            <li>User shall not be entitled torequest or claim any reversal of transactions that have been confirmed by the User, as cryptocurrency transactions cannot be reversed;</li>
                            <li>User shall ensure that they do not wilfully or erroneously interfere or tamper with, or alter in any unauthorised manner, the Bit7pay Platform. Any loss or deletion of cryptocurrencies on account of such unauthorised use is permanent and cannot
                                be reversed. Bit7pay shall not be responsible or liable for any Loss caused due to such tampering, interference or use.</li>
                            <li>Before making any direct transfers or sale of cryptocurrencies to another User on the Bit7payPlatform,User shall carefully verify the particulars of such transaction, including the sum and quantum of cryptocurrency involved, and the recipient.
                                Any errors in any transaction entered into on the Bit7pay Platform is irreversible,and User will not be able to retrieve such cryptocurrencies once they are transferred. Bit7pay shall not be responsible for effecting any such reversals and
                                will not be liable for any Loss arising from any error, omission, misapprehension or misconception on the part ofthe User.</li>
                            <li>User shall not invest in cryptocurrencies under any assumption of high earnings or profits. Cryptocurrencies being digital assets issued by private entrepreneurs are subject to market risks and volatile pricing, which may even render them worthless.
                                Users are therefore cautioned of the inherent risks involved in procuring cryptocurrencies;</li>
                            <li>In the event that any transfers of cryptocurrencies are erroneously credited to the User Account, the User is bound to report the same and to arrange to refund or transfer it to Bit7pay or to the rightful owner, as confirmed by Bit7pay. Failure
                                to do so would amount to a material breach and in addition to remedies available through court processes, Bit7pay shall be entitled to block the such amounts lying in the User Account and debit the same for remedying the erroneous transfer.</li>
                        </ol>
                    </ol>
                    <li>
                        The above requirements are mandatory to ensure security of the User accounts and to ensure authenticity of the same. Failure to comply with any of the above shall amount to a material breach, which may result in suspension, cancellation and / or termination
                        of the User account and Bit7pay shall be entitled to claim compensation for any Loss due to such material breach by a User.
                    </li>
                </ol>
                <h4 ng-click="expand7 = !expand7">
                    7. USER RIGHTS
                    
                    <span ng-if="expand7 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand7" type="I">
                    <li>Subject to compliance of the above User Guidelines, User is entitled to the benefits of the Bit7pay Services;</li>
                    <li>Bit7pay shall take all measures to ensure rendering of its services to User. Bit7pay shall however not be responsible or liable for disruption or cessation of Bit7pay Services due either to Regulatory, Governmental or Judicial actions or technical
                        issues or due to circumstances beyond their control.</li>
                    <li>Users shall bear all liabilities towards taxes, as applicable.</li>
                </ol>
                <h4 ng-click="expand8 = !expand8">
                    8. REPRESENTATIONS AND WARRANTIES
                    
                    <span ng-if="expand8 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand8" type="I">
                    <li>User understands that Bit7pay is not the creator or developer of any cryptocurrency. Bit7pay has no control over the generation, issuance, recording, verification or storage of any cryptocurrency, the maintenance of any ledger entries with respect
                        to any cryptocurrencies, or any operations with respect to the blockchain for any cryptocurrency. Bit7pay cannot be held responsible or liable for the fluctuation or volatility of the price of any cryptocurrency, and does not have any control
                        over the price fluctuations in any cryptocurrency. Bit7pay does not provide any advisory services with respect to any investment, including any potential investment in any cryptocurrency, and does not guarantee any returns or profits on such investment.
                        Bit7pay does not extend any warranties with respect to any of the products or cryptocurrencies which are made available by Users on the Bit7pay Platform.</li>
                    <li>User hereby confirms that it has not been canvassed, solicited or encouraged by Bit7pay to invest in any cryptocurrency, or to otherwise avail of the Bit7pay Services, in any manner whatsoever, and that User has arrived at an independent decision
                        to avail of the Bit7pay Services of their own volition.</li>
                    <li>User has reviewed and understood the following, and has decided to engage in cryptocurrency transactions and to avail of the Bit7pay Services in full knowledge of the following:</li>
                    <ol className="inner-ol">
                        <li><strong>Cryptocurrency</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Cryptocurrencies like “Bitcoins” are merely software, as reflected in the relevant blockchain and in the public addresses of Users, that creates a digital asset, which is not regulated by any central authority and has no independent existence.</li>
                            <li>The price or value of such cryptocurrency is not set or regulated by any central or governmental authorities.</li>
                            <li>Cryptocurrencies such as bitcoins do not even have an identified creator.</li>
                            <li>Bit7pay only offers a platform to users for rendering the Bit7pay Services set out herein, and performs only the role of an intermediary. Bit7pay does not advise on the purchase or sale of any cryptocurrencies, does not guarantee returns from
                                any investment or transactions, and does not itself buy or sell any of the cryptocurrencies that are made available for purchase or sale by Users on the Bit7pay Platform</li>
                            <li>Users are cautioned against speculative investments in cryptocurrencies, in the light of the above and are directed to avail these services, including purchase or sale of cryptocurrencies or investing therein, upon fully understanding the technology
                                that has created cryptocurrencies and subject to the risks that arise from such an unregulated asset, which only exists in digital form.</li>
                        </ol>
                        <li><strong>Risk Factors</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Cryptocurrencies being a digital asset are subject to loss, harm or damage arising due to unforeseen circumstances inadvertent errors, offensive attacks, or closure of business;</li>
                            <li>These risks set out herein above include possibility of either servers on which cryptocurrencies are hosted going out of service; or the Bit7pay servers becoming dysfunctional; disruption of services; inadvertent deletion of an asset class;
                                offensive attacks including through hacking, virus, denial of service, or technology induced attacks on either the infrastructure hosting the cryptocurrencies or on the user’s personal devices.</li>
                            <li>Cryptocurrencies also run the risk of destruction through unforeseen circumstances i.e., technology induced or other forms of disruptions, which have not come to the fore till date.</li>
                            <li>Bitcoin is an as on date an autonomous and largely unregulated worldwide system of value transfer between individuals. It is not backed by any government or central bank backed currencies. India has issued cautions against dealing in the said
                                cryptocurrency, as well as other cryptocurrencies and ‘virtual currencies’;</li>
                            <li>There is also the risk of loss of confidence in cryptocurrency trading, which could collapse demand relative to supply. For example, confidence might collapse in cryptocurrenciesbecause of unexpected changes imposed by the software developers,
                                the creation of superior competing alternatives, a deflationary or inflationary spiral, or due to governmental actions. Confidence might also collapse because of technical problems, for instance, if the anonymity of the system is compromised,
                                or if any entity is able to prevent any transactions from settling;</li>
                            <li>Trading in cryptocurrenciesrequires some effort on the part of the User to ensure that his / her privacy is maintained. Cryptocurrency transactions are stored publicly and permanently on the network. This means that a User’s balance and transactions
                                is viewable by the public.</li>
                            <li>However, the identity of the user behind a cryptocurrency address remains unknown until information is revealed during a purchase or in other circumstances.</li>
                            <li>Users have to therefore full care and precautions to adopt good practices in order to protect their own privacy. Additionally, all Users must also be cautious and aware of the following:</li>
                            <li>User should carefully assess whether their financial situation and tolerance for risk is suitable for buying, selling or trading cryptocurrencies;</li>
                            <li>Bit7pay uses banking service providers only for the receipt of client money and making payments. The said banking service providers do not transfer cryptocurrencies, exchange cryptocurrencies, or provide any services in connection with cryptocurrencies;</li>
                            <li>Bit7pay does not entertain Refund and Cancellation in any circumstances;</li>
                            <li>Bit7pay Website does not store, send or receive cryptocurrencies. cryptocurrenciesexist only by virtue of the ownership record maintained in the blockchain network;</li>
                            <li>Any transfer of title in cryptocurrenciesoccurs within a decentralized nodalnetwork, and not on the Bit7pay Website.</li>
                        </ol>
                        <li><strong>Security</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Bit7pay has taken all reasonable efforts to secure its infrastructure. Bit7pay however has no control over the infrastructure in which cryptocurrencies are hosted outside of its own network or over the personal devices of users.</li>
                            <li>Cryptocurrencies being a digital asset are subject to known and unknown risks, malicious attacks and inadvertent losses. Such digital assets require very high security measures to be undertaken for protection at all levels, including by the
                                User.
                            </li>
                        </ol>
                        <li><strong>Price</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Cryptocurrencies are subject to high volatility and price fluctuations. Market forces decide the value of such digital assets and Bit7pay cannot be held responsible or liable for price fluctuations or volatility of any Cryptocurrency. There
                                is no guarantee of assured profits to Users from procuring or trading in cryptocurrencies and there is high possibility of heavy losses including the depletion of the entire valuation of cryptocurrencies;</li>
                            <li>There is no guarantee of liquidity of such forms of digital assets;</li>
                            <li>Cryptocurrencies being decentralised with no governmental or regulatory control are high risk investments and users are cautioned against indulging in speculative trading;</li>
                        </ol>
                        <li><strong>Legal</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Engaging in transaction including buying, selling, receiving or retaining cryptocurrencies are subject to local laws of each jurisdiction. India currently has no regulatory regime in place for cryptocurrencies, and there is a risk that cryptocurrencies
                                will be subject to regulation (or even an outright ban) from one or more of India’s regulatory authorities with respect to fiscal operations, securities, etc. Various regulatory authorities are currently discussing and considering regulatory
                                changes, which may be introduced in the near future and may adversely affect the legality and enforceability of transactions involving cryptocurrencies.</li>
                            <li>Presently in India, RBI has issued 3press release viz. dated 24th December 2013, 1stFebruary 2017 and 5thDecember 2017 respectively (available on the Bit7pay Website at www.Bit7pay.com/legal), wherein RBI has cautioned users against transacting
                                in cryptocurrencies. In the event that the RBI or another regulatory authority so directs, intermediaries including Bit7pay will be required to close all accounts on their platforms, and transactions pertaining to cryptocurrencies will become
                                illegal and unenforceable. Such regulation may come into force at any time, and it is not possible to determine how cryptocurrencies will be treated under applicable Law in future. Users are hereby cautioned that any transactions in cryptocurrencies
                                using the Bit7pay Services are subject to the regulations, orders etc that may be made, passed or implemented by Indian governmental, regulatory and judicial bodies.</li>
                        </ol>
                        <li><strong>Irreversible Errors</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Most cryptocurrency transactions, and “Bitcoin” payments in particular, are irreversible</li>
                            <li>Users are cautioned that erroneous or inadvertent transfers of any cryptocurrencies (or other cryptocurrencies) cannot be reversed irrespective of the reasons for such error. This is applicable for both direct transfers by User of any cryptocurrenciesto
                                other cryptocurrencyusers or through the Bit7pay Services. This is so even if the transfer is to another Bit7pay User.</li>
                            <li>User may therefore exercise due care and caution before completing any transaction of cryptocurrencies. Bit7pay shall not be responsible or liable for any loss arising from any such transactions by Users.</li>
                        </ol>
                        <li><strong>Privacy</strong></li>
                        <ol className="inner-ol inner-2-ol">
                            <li>Bit7pay does not guarantee the privacy of User details or transactions;</li>
                            <li>Whilst Bit7pay takes all care and caution to ensure protection of User information, when called upon, Bit7pay is mandated to and shall provide details to government or regulatory authorities;</li>
                            <li>Users are therefore cautioned against using any circumventing or obfuscating methods to hide their personal details including IP address and from providing any incorrect or misleading or false details or documents.</li>
                            <li>Bit7pay takes best efforts to provide uninterrupted services to its customers but it shall not be responsible or liable for disruptions or cessation of Bit7pay Services beyond the control of Bit7pay. Bit7pay does not give any guarantee for uninterrupted
                                access or against any delay, failure, errors, omissions or loss of transmitted information.</li>
                            <li>Bit7pay may suspend use of Bit7pay App and Services for maintenance and will take best efforts to give reasonable notice. However, in cases of emergency such prior notice may not be feasible and absence of such notice shall not amount to deficiencies
                                of any nature, which User is hereby required to acknowledge.</li>
                            <li>If Bit7pay is required to cease its operations, or to cease to offer any part of the Bit7pay Services, in the event of any change in applicable Law, Bit7pay shall not be liable for any such cessation or suspension in any manner whatsoever.</li>
                            <li>Bit7pay does not provide any investment advice in connection with or related to cryptocurrencies. Any data or details including of the value, range, volatility of any cryptocurrencies, and events that may affect/have affected the value of any
                                cryptocurrencies, is for information purposes only. User shall not rely on the same either as advice or inducement to invest in cryptocurrencies. Bit7pay will not be liable for any Loss suffered by User in connection with any transaction involving
                                any cryptocurrencies.</li>
                        </ol>
                    </ol>
                </ol>
                <h4 ng-click="expand9 = !expand9">
                    9. BIT7PAY COVENANTS
                    
                    <span ng-if="expand9 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand9" type="I">
                    <div className="inner-heading">Subject to compliance by the User of the User Guidelines and the terms contained herein, Bit7pay covenants to comply with the following:</div>
                    <li>Bit7pay shall continue to render its services to the User. This is subject to orders or directions that may be passed by the Government or RBI or a Court with respect to cryptocurrencies;</li>
                    <li>Bit7pay shall take all reasonable security practises to ensure the safety of its infrastructure;</li>
                    <li>Bit7pay shall ensure compliance with requisite laws and regulations;</li>
                    <li>Bit7pay shall take best efforts to secure the rights of the User including the cryptocurrencies in the User accounts.</li>
                </ol>
                <h4 ng-click="expand10 = !expand10">
                    10. LIMITATION OF LIABILITY
                    
                    <span ng-if="expand10 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand10" type="I">
                    <li>Bit7pay shall not be liable for any Loss caused to the User due to discontinuation of any cryptocurrency that is being offered through the Bit7pay Services.</li>
                    <li>Bit7pay shall not be liable for any disruption of service, whereby the User is denied access to their cryptocurrencies, including those stored on the User Account.</li>
                    <li>Bit7pay shall not be liable for any Loss caused to the User through loss of any cryptocurrency stored on the User’s account for any reason whatsoever, save and except due to a wilful and malicious commission or omission by Bit7pay directly resulting
                        in such loss. Bit7pay shall not be liable for any discontinuation, alteration, suspension or termination of any part of the Bit7payServicescaused or occasionedany Force Majeure event (as defined below) or any change in applicable Law with respect
                        to cryptocurrencies.</li>
                    <li>Bit7pay shall not be liable for any Loss caused to User due to fluctuations in the price of cryptocurrencies. Bit7pay does not guarantee profits from sale or purchase or transfers of cryptocurrencies.</li>
                    <li>Bit7pay shall not be liable for any Loss caused to User for suspension, cancellation or termination of a User Account, including on account ofa violation by such User violations of any of the terms of this Agreement, the Privacy Policy, the AML
                        Policy, or any applicable Law.</li>
                    <li>User agrees that Bit7pay will not be liable to User or to any third party for termination of the User Account or for restricting access to the Bit7pay Services, which shall be at the sole discretion of Bit7pay.</li>
                    <li>User shall not be entitled to any damages for any reason whatsoever including for consequential or compensatory damages against Bit7pay for any reasons including suspension, cancellation or termination of the User Account or for cessation of Bit7pay
                        Services. The User shall only be entitled to refund / recovery of the amounts credited to the User Account, subject to deductions towards dues owed to Bit7pay and other legal, regulatory or statutory dues or those stipulated under applicable Law,
                        and to the permissibility of such refund or recovery under applicable Law. In the event that any cryptocurrencies lying in any UserAccount are seized, or Bit7pay is unable to access or convert the same into INR for payment to User, Bit7pay shall
                        not be held liable or responsible for the same. User is cautioned to avail of the Bit7pay Services subject to the above risk. At no point of time will Bit7pay, its directors, shareholders, employees, representatives, officers, affiliates or assigns
                        be held liable for any Claims whatsoever for cessation of services or termination of any part of the Bit7pay Services or any disruption with respect to access to any User Accounts. All Claims shall be limited to the amounts lying in the relevant
                        User Account, subject to the abovementioned conditions.</li>
                    <li>The liability of Bit7pay in any event, for any Claim, shall be limited to the amounts actually received from the User, in INR, as consideration for the services rendered by Bit7pay in relation to the transaction to which the Claim relates. If the
                        Claim does not relate to any transaction in particular, then Bit7pay’s liability shall be limited to the amounts actually received from the User, in INR, as consideration for the services rendered by Bit7pay in relation to the three transactions
                        immediately preceding the date on which the Claim is made by the User.</li>
                </ol>
                <h4 ng-click="expand11 = !expand11">
                    11. FORCE MAJEURE
                    
                    <span ng-if="expand11 == true" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand11" type="I">
                    <li>Bit7pay services are offered only on the digital domain, which is subject to risks including offensive attacks. Bit7pay shall not be liable for any Loss caused to the User’s account or the monies or cryptocurrencies accrued therein if the same arises
                        due to any Force Majeure event, including commissions or omissions by third parties, forces of nature, offensive attacks on Bit7pay servers or on the personal devices of the users, changes in applicable Law, or any Loss caused by conditions or
                        events beyond the reasonable control of Bit7pay.</li>
                    <li>The above limitation on liability includes any Force Majeure event set out hereunder including acts of god; fire, act of terrorists, act of civil or military authorities, civil disturbance, war, strike or other labour dispute, interruption in telecommunications
                        or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond reasonable control of Bit7pay; offensive attacks including virus attack, hacking, denial of service
                        attack or theft of the personal devices of the User resulting in Loss to the account.</li>
                    <li>Bit7pay shall not be liable for any Loss caused to User due to a data breach of confidential information of the User, including of the User account details or User password, including when such breach has occurred due to the User sharing such details
                        with third parties or due to the User’s failure to follow reasonable due diligence. Bit7pay shall also not be liable or responsible for any disclosure by User of any User Account details, including on account of a phishing attack or other third-party
                        disruption.
                    </li>
                    <li><strong>“Force Majeure”</strong> shall mean and include any cause arising from or attributable to acts, or events, beyond the reasonable control of Bit7pay, including natural calamity, strikes, terrorist action or threat, civil commotion, riot,
                        crowd disorder, invasion, war, threat of or preparation for war, fire, explosion, storm, flood, earthquake, subsidence, structural damage, epidemic or other natural disaster, calamity, attacks including through computer viruses, hacking, denial
                        of service attacks, ransomware or other manmade disruptions or any law, order enactment, statutory direction, legislation, regulation, rule or ruling of government or any court of law or of a Government or regulatory authority.</li>
                </ol>
                <h4 ng-click="expand12 = !expand12">
                    12. INDEMNITY
                    <span ng-if="expand12" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand12" type="I">
                    <li>User shall indemnify and hold harmless Bit7pay, its representatives, affiliates and their respective directors, officers, shareholders, representatives and assigns (the <strong>“Indemnified Parties”</strong>) against and in respect of any and all
                        Losses(whether direct, indirect, consequential or otherwise) incurred or suffered by the Indemnified Parties in any manner from or due to any failure or default by the User, to duly perform its obligations under this Agreement and the terms contained
                        herein or due to any material breach by User of the Privacy Policy or the AML Policy.</li>
                    <li>Bit7pay shall indemnify User and hold harmless against and in respect of any Losses incurred or suffered by the User solely due to any proven wilful and malicious act or default on the part of Bit7pay. This indemnity is subject to the representations
                        and warranties set out herein above i.e., Bit7pay shall not be liable for any Losses arising out of risks or consequences set out in the representations and warranties, which have been read, acknowledged and understood by the Userby virtue of
                        their use of the Bit7pay Services, or for actions initiated by Bit7pay against User for suspension, cancellation or termination of their User Account for any reason. The liability of Bit7pay in any event shall be limited to the amounts actually
                        received from the User, in INR, as consideration for the services rendered by Bit7pay in relation to the transaction to which the indemnity claim relates. If the claim does not relate to any transaction in particular, then Bit7pay’s liability
                        shall be limited to the amounts actually received from the User, in INR, as consideration for the services rendered by Bit7pay in relation to the three transactions immediately preceding the date on which the claim is made by the User.</li>
                    <li>These provisions shall survive the expiration or termination of this Agreement.</li>
                </ol>
                <h4 ng-click="expand13 = !expand13">
                    13. INTELLECTUAL PROPERTY RIGHTS (“IPR”)

                    <span ng-if="expand13" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand13" type="I">
                    <li>Unless otherwise specified, all materials on Bit7pay App and Services are the property of Bit7pay and are protected under copyright, trademark and other applicable laws;</li>
                    <li>Users may view, print, and/or download a copy of such Materials on any single computer solely for your personal, informational, non-commercial use, provided you keep intact all copyright and other proprietary notices;</li>
                    <li>The trademarks, service marks and logos of Bit7pay and others used in Bit7pay and Services (“Trademarks”) are the property of Bit7pay and their respective owners;</li>
                    <li>The software, text, images, graphics, data, prices, trades, charts, graphs, video, and audio used on this Website belong to Bit7pay;</li>
                    <li>User or visitor to our website or any persons using or viewing our Apps are strictly prohibited from copying, reproducing, publishing, republishing, circulating, modifying, uploading, transmitting, collecting and / or distributing the trademarks
                        and materials of Bit7pay in any form or by any means, whether manual or automated;</li>
                    <li>Any unauthorized use of such property will be in direct violation of copyright, trademark, and other applicable laws and will result in criminal and / or civil legal actions and penalties;</li>
                    <li>Users shall not reverse engineer or disassemble any aspects of the Bit7pay App or Bit7pay Services for any reason whatsoever. Any such action shall amount to violation of the Bit7pay IPR in and to such software;</li>
                    <li>Bit7pay Services includes third party IP including the software used for creating or distributing Cryptocurrencies. Bit7pay does not own any rights to such third-party IP and is bound by the license terms for such IP. Users shall also be bound by
                        the license terms and shall violate any third-party IP that resides on or is accessible through the Bit7pay Services.</li>
                </ol>
                <h4 ng-click="expand14 = !expand14">
                    14. PRIVACY

                    <span ng-if="expand14" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand14" type="I">
                    <li>User data furnished to Bit7pay shall be subject to the terms of the Privacy Policy of Bit7pay, as periodically revised or amended. User is deemed to have consented to the Privacy Policy, by accepting these terms.</li>
                    <li>User hereby consents to the collection, storage, use, sharing and disclosure of User’s personal and sensitive personal information, as per the terms of the Privacy Policy. In the event that the User wishes to retract the consent herein furnished
                        the User may do so by following the process prescribed for terminating this agreement. Consent to the terms herein and those set out in the Privacy Policy are mandatory preconditions for continued use of the Bit7pay Services.</li>
                    <li><strong>Confidentiality</strong></li>
                    <ol className="inner-ol inner-2-ol">
                        <li>User recognises that Bit7pay will be given and have access to confidential including sensitive personal information of the User. User hereby agrees and consents to use by Bit7pay of such confidential data and information for their commercial use.
                            Bit7pay shall take best efforts to keep such information confidential and not to disclose to any third parties except in the course of its business or for marketing, analytical and for processing of such data. This limitation shall however not
                            apply to (a). data already in the public domain; (b). furnishing of data in pursuance of a request from a legal or regulatory authority or order from a Court;</li>
                        <li>The provisions of this clause shall survive the termination of this Agreement.</li>
                    </ol>
                </ol>
                <h4 ng-click="expand15 = !expand15">
                    15. COMPLAINTS
                    <span ng-if="expand15" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand15" type="I">
                    <li>Users may submit their complaints to Bit7pay in the form available at ticket.Bit7pay.com. Such complaints may be either with respect to Bit7pay Services or any problems faced by Users in connection with their accounts with Bit7pay. Bit7pay shall
                        revert, as soon as possible to such complaints.</li>
                    <li>Bit7pay will not be able to resolve the following complaints, or provide any of the following remedies to any User:</li>
                    <ol className="inner-ol">
                        <li>Reversal of wrongful or erroneous transfers of Cryptocurrencies;</li>
                        <li>Reversal of transfers from User Accounts due to any of the risk factors set out above, including on account of hacking, virus attacks, denial of service attacks, ransomware, phishing attacks or other data breaches, as well as any fluctuations
                            in the price of cryptocurrencies or any volatility thereof, or on account of any change in applicable Law;</li>
                        <li>Disruption or cessation of services by any cryptocurrency creator, developer, distributor, miner, server operator or other network participants; or</li>
                        <li>Any technical problems caused to the User due to reasons beyond the control of Bit7pay;</li>
                    </ol>
                </ol>
                <h4 ng-click="expand16 = !expand16">
                    16. TERM & TERMINATION
                    <span ng-if="expand16" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand16" type="I">
                    <li>User and Bit7pay agree and confirm the following terms for continuation, suspension, cancellation or termination of this agreement.</li>
                    <li>This Agreement shall come into effect upon confirmation of the terms by the User herein and subsist till termination of the same upon any of the reasons set out hereunder (<strong>“Term”</strong>).</li>
                    <li>Bit7pay reserves the right to suspend or terminate a User account for the following reasons (<strong>“Termination”</strong>).</li>
                    <li>Bit7pay shall be entitled to suspend, and after due verification, and its sole discretion, terminate a User Account immediately upon the occurrence or detection of any of the following:</li>
                    <ol className="inner-ol">
                        <li>Use of a User Account for any suspicious activities, or any activities that are not consistent with applicable Law;</li>
                        <li>Failure of User to comply with the KYC norms contained in this Agreement or in the AML Policy;</li>
                        <li>Misrepresentations or misstatements by a User, or any inaccuracy, falsehood or misrepresentation in any of the information, documentation or details provided by a User;</li>
                        <li>Failure of User to update KYC details, when called upon;</li>
                        <li>Failure of User to comply with any of the terms of this Agreement, the Privacy Policy or the AML Policy, and failure to rectify such non-compliance subsequent to a notice to this effect from Bit7pay; and</li>
                        <li>A User Accounts lying dormant or inactive for a period of over six months.</li>
                    </ol>
                    <li>In addition to the above the following actions or circumstances shall give the right but not the obligation for Bit7pay to suspend and / or terminate a User Account:</li>
                    <ol className="inner-ol">
                        <li>attempts to use in an unauthorised manner, or gain unauthorized access to, the Bit7pay Services or to another User’s User Account, or providing assistance to any other person’s attempt to do so;</li>
                        <li>attempts to overcome or circumvent any software security features on the Bit7pay Platform;</li>
                        <li>if Bit7pay has reasonable apprehension that User may be misusing the Bit7pay Services for any unlawful activities such as money laundering, illegal gambling operations, financing terrorism, or other criminal activities, or if there are unaccounted
                            for amounts retained in the relevant User Account, or if the User Account has been used for inordinately large transactions or transactions with an unclear or indeterminate purpose;</li>
                        <li>Failure to pay dues owed to Bit7pay including any commissions fees payable to it; or</li>
                        <li>If the User undertakes fraudulent transactions through the Bit7pay Services, or any unaccounted for or suspicious transactions, for which the User fails to provide suitable explanation despite service of notice by Bit7pay in this respect.</li>
                    </ol>
                    <li>Bit7pay may also suspend and thereafter terminate any User Accounts for the following reasons:</li>
                    <ol className="inner-ol">
                        <li>Technical errors or glitches resulting in suspension of Bit7pay Services, in part or full;</li>
                        <li>Any change in applicable Law;</li>
                        <li>If continuation of Bit7pay Services is difficult or impossible due to technical or operational issues or due to change in the legal, regulatory or statutory provisions;</li>
                        <li>In the event of unexpected operational difficulties; or</li>
                        <li>Upon receipt of requests from governmental, regulatory, judicial, quasi-judicial or law enforcement authorities.</li>
                    </ol>
                    <li>Each of the instances set out above may be invoked to suspend and thereafter terminate this Agreement, or to directly terminate this Agreement.</li>
                    <li>In addition to the above, this Agreement shall stand automatically terminated if either party (a). becomes insolvent; (b). makes an assignment for the benefit of its creditors; (c) files a petition for bankruptcy; (d) takes steps towards dissolution
                        or liquidation; or (e) appoints a trustee or receiver for all or any part of its assets.</li>
                    <li>The terms of this Agreement, which by their very nature survive termination of this Agreement shall subsist. Without prejudice to the generality of the above, provisions pertaining to IPR, Confidentiality, Privacy, Indemnity, Limitation of Liability,
                        Governing Law, Dispute Resolution and choice of jurisdiction shall survive termination or cancellation of this Agreement.</li>
                    <li><strong>Process for Termination</strong> Bit7pay may terminate the Agreement forthwith for any of the reasons set out above or first suspend the account pending verification and thereafter issue a communication of termination, where Bit7pay determined
                        that it is practicable to do so. Each of the instances set out above may be invoked for instantaneous termination or cancellation of the User Account. The onus of proving bad faith shall be on the User. In any event damages shall not exceed the
                        amounts credited in the User Account, as on the date of suspension, cancellation or termination, whichever is earlier. User may terminate this Agreement with written notice to Bit7pay, but such termination shall only be effective once such notice
                        is accepted and acknowledged by Bit7pay.</li>
                    <li><strong>Consequences of Termination</strong></li>
                    <ol className="inner-ol">
                        <div className="inner-heading">
                            Upon termination of this Agreement or earlier determination, the following consequences shall ensue:
                        </div>
                        <li>The User Account and rendering of the Bit7pay Services shall stand immediately terminated. User shall not be entitled to access or use the User Account or avail of any of the Bit7pay Services;</li>
                        <li>Bit7pay shall cease to be liable or responsible to User except to the extent of any amounts in INR lying in the User Account. In the event that Bit7pay is unable to effect a refund of these amounts to the User due to applicable Law, User shall
                            bear any and all Losses arising from termination of the Agreement and loss of all amounts and all cryptocurrencies lying in the User Account.</li>
                        <li>Parties shall be entitled to the rights and dues already accruing to them.</li>
                        <li>Bit7pay shall be entitled to retain / deduct amounts due to it from the User and transfer or refund the balance lying in the User Account, except when it is unable to do so in compliance with applicable Laws. Transfers shall be to any other cryptocurrency
                            account or wallet specified by User, and refund shall be in Indian Rupees.</li>
                        <li>User agrees that Bit7pay will not be liable to User or to any third party for termination of the User Account or any restriction of access to the Bit7pay Services.</li>
                        <li>User shall be entitled to recover the amounts lying in the User Account, as on the date of termination, subject to any deductions to be made by, or payments to be made to, Bit7pay.</li>
                        <li>Permissions and licenses granted to User under this Agreement shall cease immediately upon termination of this Agreement, and the User shall not be entitled to any access to the User Account or the Bit7pay Services, or any rights or benefits in
                            this respect, in any manner whatsoever.</li>
                        <li>User shall return to Bit7pay any of Bit7pay’s IPR, or affirm deletion thereof immediately upon termination of this Agreement.</li>
                    </ol>
                </ol>
                <h4 ng-click="expand17 = !expand17">
                    17. Accuracy / Reliability of / Liability for Information published on website

                    <span ng-if="expand17" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand17" type="I">
                    <div className="inner-heading">
                        Bit7pay does not provide any investment advice in connection with Bit7pay Services contemplated by these Terms of Use. While Bit7pay may provide information on the value, range, volatility of cryptocurrencies, and events that may affect/have affected
                        the value of cryptocurrencies, this is not considered investment advice and should not be construed as such. Bit7pay will not be liable for any Loss suffered by User in connection with any transaction involving cryptocurrencies.
                    </div>
                </ol>
                <h4 ng-click="expand18 = !expand18">
                    18. NOTICES

                    <span ng-if="expand18" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand18" type="I">
                    <li>Any notice or other communication provided for in this Agreement shall be sent only through electronic mail. User hereby agrees to receive electronic or any other form of communication and notifications from Bit7pay. Email messages sent over the
                        Internet are not always secure and Bit7pay is not responsible or liable for non – receipt of such communication by User. Once the email is dispatched by Bit7pay, it shall be deemed to have been served on the User. Bit7pay shall be deemed to have
                        received communications from the User only upon actual receipt into the Inbox of the account of the person to whom such communication is addressed and acknowledged. Bit7pay shall not be liable or responsible for non – receipt of communications
                        or for any damages incurred by the result of sending email messages over the Internet.</li>
                    <li>All communications to Bit7pay shall be at: ticket.Bit7pay.com. Bit7pay shall ensure that any change or modification to the same is uploaded on the Bit7pay Website.</li>
                    <li>All communications to User shall be at the electronic mail address provided by User, as part of the KYC norms or via in – App messages or SMS to the User’s registered mobile number. User shall ensure that any change in the electronic mail address
                        or communication option is duly intimated to Bit7pay.</li>
                </ol>
                <h4 ng-click="expand19 = !expand19">
                    19. GOVERNING LAW & JURISDICTION

                    <span ng-if="expand19" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand19" type="I">
                    <li>This Agreement shall be governed by and construed in accordance with the laws of India.</li>
                    <li>The parties agree to irrevocably submit to the exclusive jurisdiction of the courts in Ahmedabad for the resolution of any disputes arising from this Agreement or in connection therewith or pursuant thereto.</li>
                </ol>
                <h4 ng-click="expand20 = !expand20">
                    20. ASSIGNMENT

                    <span ng-if="expand20" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand20" type="I">
                    <div className="inner-heading">
                        This Agreement or any rights or obligations hereunder shall not be assigned by the Service Provider to any third party without the prior written consent of the Customer. The Customer may assign all or any of his rights without prior intimation or approval
                        of the Service Provider to any third Party.
                    </div>
                </ol>
                <h4 ng-click="expand21 = !expand21">
                    21. SUCCESSORS

                    <span ng-if="expand21" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand21" type="I">
                    <div className="inner-heading">
                        This Agreement shall bind and inure to the benefit of the parties, and their respective successors and permitted assigns.
                    </div>
                </ol>
                <h4 ng-click="expand22 = !expand22">
                    22. SEVERABILITY

                    <span ng-if="expand22" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand22" type="I">
                    <li>The invalidity or unenforceability of any provision of this Agreement shall not in any way affect, impair or render unenforceable this Agreement or any other provision contained herein, which shall remain in full force and effect.</li>
                    <li>This Agreement shall be considered divisible as to such provision, which is deemed to be invalid or unenforceable and the remainder of this Agreement shall be enforceable and binding on the Parties.</li>
                </ol>
                <h4 ng-click="expand23 = !expand23">
                    23. WAIVER

                    <span ng-if="expand23" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand23" type="I">
                    <div className="inner-heading">
                        No provision of this Agreement may be waived or changed except by a writing signed by the party against whom such waiver is sought to be enforced. The failure or omission by either party at any time to enforce or require strict or timely compliance to
                        any provision of this Agreement shall not affect or impair that provision or any other provision in any way or the rights of such party hereof, to avail itself of the remedies it may have in respect of any subsequent breach of that or any other
                        provision.
                    </div>
                </ol>
                <h4 ng-click="expand24 = !expand24">
                    24. RECITALS

                    <span ng-if="expand24" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand24" type="I">
                    <div className="inner-heading">
                        The Recitals, Schedules and Annexures in this Agreement shall form part of this Agreement and the contents thereof shall be read into this Agreement. Headings are for the purpose of easy reference and shall not affect the meaning or interpretation of
                        this Agreement.
                    </div>
                </ol>
                <h4 ng-click="expand25 = !expand25">
                    25. ENTIRETY

                    <span ng-if="expand25" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand25" type="I">
                    <div className="inner-heading">
                        This Agreement, and the other agreements contemplated hereby, constitute the entire agreement.
                    </div>
                </ol>
                <h4 ng-click="expand26 = !expand26">
                    26. TAXES

                    <span ng-if="expand26" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand26" type="I">
                    <li>User shall be solely responsible and liable for ensuring payment of all applicable taxes arising due to or pursuant to execution of these terms or availing of Bit7pay Services.</li>
                    <li>Bit7pay shall not be responsible for either determining the tax liability of the User or for collecting, reporting or remitting any taxes arising from any transaction undertaken on the Bit7pay Platform.</li>
                    <li>The above is subject to any changes to the statutory or regulatory process under applicable Law.</li>
                </ol>
                <h4 ng-click="expand27 = !expand27">
                    27. RELATIONSHIP

                    <span ng-if="expand27" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand27" type="I">
                    <div className="inner-heading">
                        None of the provisions of this Agreement shall be deemed to constitute a partnership between the parties hereto and no party shall have any authority to bind or shall be deemed to be the agent of the other(s) in any way. User shall not misrepresent or
                        mislead or induce any person to avail of Bit7pay Services or to invest in any cryptocurrency.
                    </div>
                </ol>
                <h4 ng-click="expand28 = !expand28">
                    28. GOVERNMENT APPROVALS

                    <span ng-if="expand28" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand28" type="I">
                    <div className="inner-heading">
                        This Agreement is subject to confirmation by the Government of India of the legality of dealing in Cryptocurrencies, and in the event that the Government of India were to hold such dealing to be invalid or illegal in India, this Agreement shall stand
                        automatically terminated without further notice to User. Bit7pay has provided full disclosure of the current Government and regulatory status with respect to Cryptocurrencies in India under this Agreement, and the risk involved in dealing with
                        or investing in the same. User is deemed to have understood, agreed to and accepted the risk and costs of such investment.
                    </div>
                </ol>
                <h4 ng-click="expand29 = !expand29">
                    29. MODIFICATIONS

                    <span ng-if="expand29" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand29" type="I">
                    <li>These terms may be periodically reviewed and revised. The revised draft will be uploaded on the Bit7pay Website and will reflect the modified date of the terms. User is required to periodically visit the website and review terms and any changes
                        thereto.
                    </li>
                    <li>Continued use of the Bit7pay Services constitutes agreement of User to the terms contained herein and any amendments thereto.</li>
                </ol>
                <h4 ng-click="expand30 = !expand30">
                    30. DEFINITIONS

                    <span ng-if="expand30" className="pull-right"> - </span>
                </h4>
                <ol ng-if="expand30" type="I">
                    <li><strong>“Bitcoin”</strong> refers to a type of cryptocurrency, whose creator is identified only as “Satoshi Nakamoto” and which is created using open source software. Bitcoin is not issued by any centralised authority or Government but uses “peer-to-peer
                        technology” to operate, manage transactions and ensure authenticity (for more information on Bitcoins, please refer to <a href="https://www.bitcoin.org" target="_blank">https://www.bitcoin.org</a>).</li>
                    <li><strong>“Claims”</strong> includes any and all charges, complaints, actions, agreements, amounts, damages, claims, liabilities, promises, controversies, damages, or causes of action, litigation, suits, rights, demands, costs, losses, debts, interest,
                        indemnities, fines, penalties, and expenses (including attorneys’ consultants’, and statutory fees and costs incurred), and obligations of any nature or description whatsoever, past, present, or future, under applicable Law, contract, or in equity,
                        known or unknown, suspected or unsuspected, existing or prospective, irrespective of whether the concerned Party proposes to appeal/challenge such claims.</li>
                    <li><strong>“Cryptocurrency”</strong>, means virtual currencies, which are open instruments usable on any online platform and which may be acquired or disposed of only as a digital transaction.</li>
                    <li><strong>“INR”</strong> shall mean Indian Rupees</li>
                    <li>“Laws” means and includes (i) all applicable provisions of all constitutions, treaties, statutes, laws (including common law), codes, rules, regulations, ordinances, bye-laws or orders of, or any similar form of decision, interpretation or policy
                        of, or determination by, any governmental or similar authority, (ii) governmental approvals, consents, licenses, registrations, etc., and (iii) orders, decision, injunctions, judgments, awards and decrees of or agreements with any governmental
                        or similar authority.</li>
                    <li>“Loss” means includes all losses, Claims, demands, liabilities, obligations, fines, expenses, costs (including litigation costs and costs of remedying any default or damage caused), and damages (whether or not resulting from third party Claims),
                        taxes, including interests and penalties with respect thereto and expenses, including reasonable attorneys’, consultants’, and accountants’ fees and disbursements.</li>
                </ol>
                <div className="disclaimer">
                    <div className="heading">LEGAL NOTICE</div>
                    <div className="content">
                        <p className="primary">
                            This disclaimer applies to services (including websites and mobile applications) operated for or on behalf of OMSHANTI INFRACREATIONS LLP Technology Limited, a India-based company with the registered address 3M/1 TAGORE TOWN ALLAHABAD Allahabad UP 211002
                            INDIA,. hereafter collectively referred as “OMSHANTI INFRACREATIONS LLP.” Please make sure you that you read this statement and understand it before you use OMSHANTI INFRACREATIONS LLP services.
                        </p>
                        <h3>
                            NO FIDUCIARY DUTY, NO OFFER, AND NO SOLICITATION
                        </h3>
                        <p>
                            OMSHANTI INFRACREATIONS LLP has no fiduciary duty to users of its services. Furthermore, OMSHANTI INFRACREATIONS LLP expressly reserves the right to alter the prices or product composition of its services at any time.
                        </p>
                        <p>
                            The information provided by OMSHANTI INFRACREATIONS LLP services does not constitute an offer of or solicitation for the purchase or disposal of financial assets. Investors must not rely on this information for investment decisions.
                        </p>
                        <h3>NO WARRANTY AND NO LIABILITY</h3>
                        <p>
                            While OMSHANTI INFRACREATIONS LLP takes great effort to include accurate and up-to-date information on its website, it makes no representations or warranties in relation to the information provided by OMSHANTI INFRACREATIONS LLP services.
                        </p>
                        <p>Without prejudice to the paragraph above, OMSHANTI INFRACREATIONS LLP does not warrant that:</p>
                        <ul>
                            <li>The information provided by OMSHANTI INFRACREATIONS LLP services will be constantly available, or available at all.</li>
                            <li>The information provided by OMSHANTI INFRACREATIONS LLP services is complete, true, accurate, up-to-date, or non-misleading.</li>
                        </ul>
                        <p>You should not delay seeking legal advice, disregard legal advice, or commence or discontinue any legal action because of information provided by OMSHANTI INFRACREATIONS LLP services.</p>
                        <h3>LIABILITY</h3>
                        <p>Nothing in this legal disclaimer will limit any of OMSHANTI INFRACREATIONS LLP's liabilities in any way that is not permitted under applicable law, or exclude any of OMSHANTI INFRACREATIONS LLP’s liabilities that may not be excluded under applicable
                            law.
                        </p>
                        <h3>LINKS</h3>
                        <p>Links to third party websites are provided for convenience only. OMSHANTI INFRACREATIONS LLP does not express any opinion on the content of any linked third party websites and expressly disclaims any responsibility or liability for all third party
                            information and the use of it. Should you use a link from OMSHANTI INFRACREATIONS LLP services to any other website you do so entirely at your own risk.
                        </p>
                        <h3>TRADEMARKS</h3>
                        <p>All mentioned trademarks are owned by or licensed to OMSHANTI INFRACREATIONS LLP.
                        </p>
                        <h3>COPYRIGHT</h3>
                        <p>OMSHANTI INFRACREATIONS LLP services and the information contained and referenced therein are for informational purposes only. Any reproduction, retransmission or other use is strictly prohibited. Request for permission to reproduce any information
                            provided by OMSHANTI INFRACREATIONS LLP services should be addressed to the business development contact on this page: https://bitcoin-india.org</p>
                    </div>
                </div>

            </div>

        </section>
        <Footer/>
    </Container>
</ScrollContext>)

export default Terms;
