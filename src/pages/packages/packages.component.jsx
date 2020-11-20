import React from 'react'
import { PackagesPageContainer } from './packages.styles'
import Package from '../../components/package/package.component'


const PackagesPage = () => {
    return (
        <PackagesPageContainer>
            <h1>
            Packages
            </h1>
            <div className='packages-container'>
                <Package title='Singular Daily Pick' price='19' description='1 game daily pick (Thursday Night Football, Sunday Night Football, and Monday Night Football only).'/>
                <Package title='NFL ATS All Access Subscription' price='99' description='Every pick from every game for a given week. Includes our best bets for the week as well as additional teasers and parlays.'/>
                <Package title='Weekly Best Bets' price='59' description='Our best bets from the week’s slate of games. Includes 4-5 plays (a combination of picks, teasers, and parlays).'/>
                <Package title='Bi-Weekly NFL ATS All Access Subscription' price='169' description='Two full weeks of all our plays. Includes best bets for both weeks and all daily picks.'/>
                <Package title='Full Season NFL ATS All Access Subscriptions' price='899' description='The entire season of all our plays. Includes every pick from every game for the rest of the season along with all best bets.'/>
            </div>
        </PackagesPageContainer>
    )
}

export default PackagesPage;

