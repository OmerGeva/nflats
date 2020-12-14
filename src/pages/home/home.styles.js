import styled from 'styled-components';

export const HomePageContainer = styled.div`
padding: 5rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.welcome-card{
    margin-top: 20vh;
    width: 50vw;
    text-align: center;
    h2{
        font-size: 38px;
    }

    p{
        font-size:24px;
    }
    img{
        width: 20%;
    }
}
.info-container{
    width: 80%;
    
}
@media only screen and (max-width: 768px) {
    .welcome-card{
        margin: 5vh auto;
        width: 90%;
    }
    .info-container{
        text-align: left;
        width: 90%;
    }
}
`