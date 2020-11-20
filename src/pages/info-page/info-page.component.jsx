import React from 'react'
import { InfoPageContainer } from './info-page.styles';
import { Link } from 'react-router-dom';

const InfoPage = ({isTermsPage}) =>  {
    return (
        <InfoPageContainer>
            <div className="header">
                {
                    isTermsPage ?
                    <h1>Terms and Conditions</h1>
                    :
                    <h1>FAQ's</h1>
                }
            </div>
            <div className="info">
                {
                    isTermsPage ?
                    <div className="terms-info">
                        <p>
                            BY USING THE WEBSITE, THE SERVICES, OR THE CONTENT, YOU ARE CONSENTING TO THE TERMS AND CONDITIONS IN THIS TERMS OF SERVICE AGREEMENT AS THEY APPLY TO YOU AND YOUR USAGE AND ACCESS.
                        </p>
                        <p>
                            Your use of the Website, the Content, and the Services is also subject to all applicable laws and regulations. If you do not agree to any of the terms of service in this agreement, you should not use the Website, the Services, or the Content. Your use of the Website, the Content, and the Services is also governed by our Privacy Policy, which is available through a link on our homepage as well as most of the other pages on the website.
                        </p>
                        <ol>
                            <li>
                                <p>TERMS OF SERVICE</p>
                                <p><a href='nflats.com'>nflats.com</a> provides the Website, the Content, and the Services to you subject to the following Terms of Service (“TOS”). The TOS may be updated by us from time to time without notice to you. We suggest that from time to time you review the TOS for possible changes. In addition, when using any Services or accessing any Content, you will be subject to any posted guidelines or rules applicable to such Services or Content. All such additional guidelines or rules are hereby incorporated by reference into the TOS.</p>
                            </li>
                            <li>
                                <p>SERVICES AND CONTENT</p>
                                <p><a href='nflats.com'>nflats.com</a> currently provides users with various features and services, including handicapper picks, and other features, all of which may be updated, deleted, or otherwise modified from time to time at the discretion of nflats.com. In addition, nflats.com provides access to certain photographs, text, images, statistics, logos, and other media and intellectual property related to or otherwise associated with nflats.com. Unless stated otherwise, the Website, the Services, and the Content are subject to the TOS. You understand and agree that the Website, the Services, and the Content are provided “AS IS” and that nflats.com assume no responsibility in connection with your use of the Website, the Services, or the Content. The Website, the Services, and the Content are provided for your non-commercial entertainment and enjoyment.The Company does not offer bookmaking services or gambling services on the Site or otherwise. The Company does not provide investment advice and none of the Picks nor any information on the Site or otherwise should be construed as or, deemed to be, investment advice. Under the TOS, you may download certain Content and Services available on the Website to a single personal computing device for your use and entertainment. However, you may not distribute, modify, republish, or publicly display any of the Content or Services unless you have the prior written permission of nflats.com, which permission may be withheld at  nflats.com’s sole discretion.</p>
                            </li>
                            <li>
                                <p>BACKGROUND INFORMATION</p>
                                <p>In order to use the Services, you may be required to register with nflats.com by providing certain information about yourself, including your name and email address. In consideration of your use of the Services, you agree to provide true, accurate, current and complete information about yourself as requested in connection with the provision of and/or registration for any of the Services, subject, of course, to all applicable laws. If you provide any information that is untrue, inaccurate, not current, or incomplete, or nflats.com has reasonable grounds to suspect that such information is untrue, inaccurate, not current, or incomplete, nflats.com has the right to suspend or terminate your password and/or refuse any and all current or future use of the Services.</p>
                            </li>
                            <li>
                                <p>PRIVACY POLICY</p>
                                <p>All information collected about you during registration for use of the Services will be used in accordance with our Privacy Policy and all applicable laws. Click <Link href='/privacy'>here</Link> to view our privacy policy.</p>
                            </li>
                            <li>
                                <p>MEMBER PASSWORD AND SECURITY</p>
                                <p>You will create a password upon completing the registration process for use of the Services. You are responsible for maintaining the confidentiality of the password, and are fully responsible for all activities that occur under your password. </p>
                            </li>
                            <li>
                                <p> REFUND POLICY</p>
                                <p>Due to the nature of the information being provided, all refund requests will be assessed on a case-by-case basis. All inquiries should be sent to <a href="mailto:support@nflats.com">support@nflats.com</a> where you will receive a response within 24 hours.</p>
                            </li>
                        </ol>
                        <p>If you have any questions or comments about our use of personal information, please contact us at:</p>
                        <p><a href="mailto:support@nflats.com">support@nflats.com</a></p>
                    </div>
                    :
                    <div className="privacy-policy">
                        <p>
                        This privacy notice discloses the privacy practices for nflats.com. This privacy notice applies solely to information collected by this website. It will notify you of the following:
                        </p>
                        <p>
                            Your use of the Website, the Content, and the Services is also subject to all applicable laws and regulations. If you do not agree to any of the terms of service in this agreement, you should not use the Website, the Services, or the Content. Your use of the Website, the Content, and the Services is also governed by our Privacy Policy, which is available through a link on our homepage as well as most of the other pages on the website.
                        </p>
                        <ol>
                            <li>
                                <p>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</p>
                            </li>
                            <li>
                                <p>What choices are available to you regarding the use of your data.</p>
                            </li>
                            <li>
                                <p>The security procedures in place to protect the misuse of your information.</p>
                            </li>
                            <li>
                                <p>How you can correct any inaccuracies in the information.</p>
                            </li>
                        </ol>
                        <h4>
                            Information Collection, Use, and Sharing
                        </h4>
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
                        <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                        <h4>
                            Your Access to and Control Over Information
                        </h4>
                        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                        <ul>
                            <li>See what data we have about you, if any.</li>
                            <li>Change/correct any data we have about you.</li>
                            <li>Have us delete any data we have about you.</li>
                            <li>Express any concern you have about our use of your data.</li>
                        </ul>
                        <h4>
                            Security
                        </h4>
                        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                        <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the web page.</p>
                        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                        <h4>
                            Registration
                        </h4>
                        <p>In order to use this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest.</p>
                        <h4>
                            Orders
                        </h4>
                        <p>We request information from you on our order form. To buy from us, you must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill your orders. If we have trouble processing an order, we’ll use this information to contact you.</p>
                    </div>

                }
            </div>

        </InfoPageContainer>
    )
}

export default InfoPage;