import React from "react";
import styled from "styled-components";
import Header from "../Header/header";
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

const Fees = (props)=>(<ScrollContext>
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|Fees</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} />
        <section className="fees">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Supported Banks</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="fees-content">
                            <div>
                                <p></p>
                                <p>You can pay to any of our following bank accounts for depositing funds via normal transfer option.</p>
                                <div className="please-note">Please Note:
                                    <p></p>
                                    <ul>
                                        <li>There are no fees for having a Bit7Pay wallet or for holding funds in your Bit7Pay wallet. You may hold assets as long as desired; your account will not be closed due to inactivity.
                                        </li>
                                        <li>You need to make payment from your bank account to Bit7Pay’s bank account via RTGS / NEFT, IMPS and mentioned the transaction id while creating an INR deposit request from Bit7Pay app.
                                        </li>
                                    </ul>
                                </div>
                                <div className="table-responsive">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Bank Name</strong></td>
                                            <td><strong>Bank Details</strong></td>
                                            <td><strong>RTGS/NEFT or IMPS</strong></td>
                                        </tr>
                                        <tr>
                                            <td>HDFC Bank</td>
                                            <td>Beneficiary Name: <strong>Omshanti Infracreations LLP</strong><br/> Account number: <strong>50200028326788</strong><br/> IFSC: <strong>HDFC0001464</strong><br/> Account Type: <strong>Current Account</strong>
                                            </td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>ICICI Bank</td>
                                            <td>Beneficiary Name: <strong>Omshanti Infracreations LLP</strong><br/> Account number: <strong>628205025306</strong><br/> IFSC: <strong>ICIC0006282</strong><br/> Account Type: <strong>Current Account</strong>
                                            </td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>AXIS Bank</td>
                                            <td>Beneficiary Name: <strong>Omshanti Infracreations LLP</strong><br/> Account number: <strong>916020020077257</strong><br/> IFSC: <strong>UTIB0000286</strong><br/> Account Type: <strong>Current Account</strong>
                                            </td>
                                            <td>Yes</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="fees-content">
                                <p></p>
                                <h2 className="fees-title">Fees</h2>
                                <p className="innerp"><span className=""><b>INR Deposit and Withdrawal Fees</b></span>
                                </p>
                                <div className="table-responsive">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Normal Transfer Deposit (RTGS / NEFT / IMPS)</strong></td>
                                            <td><strong>No Fees</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Withdrawal</td>
                                            <td>Rs 10</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="innerp"><span><b>Cryptocurrencies Deposit (Receive) and Withdrawal (Send) Fees</b></span>
                                </p>
                                <div className="table-responsive">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Coin</strong></td>
                                            <td><strong>Deposit</strong></td>
                                            <td><strong>Withdrawal</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Bitcoin</td>
                                            <td>No Fees</td>
                                            <td>0.0002 BTC - 0.0005 BTC</td>
                                        </tr>
                                        <tr>
                                            <td>Ether</td>
                                            <td>No Fees</td>
                                            <td>0.001 ETH</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <p><span className=""></span>*Dynamic – Fee varies dynamically depending on the network traffic. Please check app for the exact fees.</p>
                            </div>
                            <div className="fees-content">
                                <h2 className="fees-title">Limits</h2>
                                <p className="innerp"><span className=""><b>INR Deposit and Withdrawal Limits</b></span></p>
                                <div className="table-responsive">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Limits</strong></td>
                                            <td><strong>Per Transaction (Rs.)</strong></td>
                                        </tr>

                                        <tr>
                                            <td>Normal Transfer Deposit (RTGS / NEFT / IMPS)</td>
                                            <td>Min 1,000</td>
                                        </tr>

                                        <tr>
                                            <td>Withdrawal</td>
                                            <td>Min 1,000 <br/> Max 5 lacs</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="innerp">
                                    <span><b>Cryptocurrencies Deposit and Withdrawal Limits</b></span></p>
                                <div className="table-responsive">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><strong>Coin</strong></td>
                                            <td><strong>Limit</strong></td>
                                            <td><strong>Per Transaction</strong></td>
                                            <td><strong>Per Day</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Bitcoin</td>
                                            <td>Withdrawal</td>
                                            <td>Max 3 BTC</td>
                                            <td>Max 10 BTC</td>
                                        </tr>
                                        <tr>
                                            <td>Ether</td>
                                            <td>Withdrawal</td>
                                            <td>Max 5 ETH</td>
                                            <td>Max 25 ETH</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Container>
</ScrollContext>)

export default Fees;
