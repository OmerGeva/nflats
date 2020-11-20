import { FooterContainer } from './footer.styles'
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

import moduleName from 'module'
const Footer = () => (
    <FooterContainer>
        <div className="top-part-of-footer">
            © 2020 NFL ATS All Rights Reserved.
            <a href="https://www.instagram.com/nfl.ats" target='_blank'>
                <InstagramIcon   style={{ marginLeft: 16}} />
            </a>
        </div>
        <div className="bottom-part-of-footer">
            <Link to='/terms'>Terms</Link> • <Link to='/privacy'>Privacy Policy</Link>
        </div>
    </FooterContainer>
)

export default Footer;