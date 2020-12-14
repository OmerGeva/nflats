import React  from 'react'
import { Link } from 'react-router-dom';

import { ContactPageContainer } from './contact.styles'
const ContactPage = () => {

    return (
        <ContactPageContainer>
            <h1>
                Contact Us
            </h1>
            <p>24/7 Customer Support at  <a href="mailto:support@nflats.net">support@nflats.net</a></p>
            <p>Response time less than 24 hours.</p>
            <p>Visit <Link to='/privacy' >FAQ's</Link> page for more!</p>
            
        </ContactPageContainer>
    )
}

export default ContactPage;