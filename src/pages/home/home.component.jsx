import React from 'react'
import { HomePageContainer } from './home.styles'
import Image from '../../components/image/image.component'
const HomePage = () => {
    return (
        <HomePageContainer>
            <div className="welcome-card">
                <h1>  
                    Welcome!
                </h1>
                <Image src='logo.png' />
            </div>
        </HomePageContainer>
    )
}

export default HomePage;