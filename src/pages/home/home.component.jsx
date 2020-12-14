import React from 'react'
import { HomePageContainer } from './home.styles'
import Image from '../../components/image/image.component'
import InstagramEmbed from 'react-instagram-embed';

const HomePage = () => {
    return (
        <HomePageContainer>
            <div className="welcome-card">
                <h2>Proven and Trusted System of Winning</h2>
                <h3>Current Record:</h3>
                <p>20-16-2 ATS (Best bets)</p>
                <p>13-5 (Teaser record)</p>
                <Image src='logo.png' />
            </div>
            <div className="info-container">
                        <p>Our Service</p>
                <ul>
                    <li>
                        <p>NFL.ATS is your complete handicapping service for all NFL games! My team and I have come together to build a trusted system for individuals looking to win real money during the NFL season. With years of experience in the world of professional NFL handicapping, we offer outstanding value to clients who want to significantly grow their bankroll! </p>
                    </li>
                    <li>
                        <p>Upon signing up for one of our packages you will receive the specified picks, along with customer support. This helps clients better manage their account to help them ride their winners and limit their losses. You won’t be disappointed!</p>
                    </li>
                </ul>
            </div>
            <div className="instagram-cards">

            </div>
        </HomePageContainer>
    )
}

export default HomePage;