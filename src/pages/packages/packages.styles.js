import styled from 'styled-components';

export const PackagesPageContainer = styled.div`
    margin: auto;
    padding-top: 15vh;
    width: 80%;
    text-align: center;

    h1{
        margin: auto;
        text-align: center;
        width: 40%;
        margin-bottom: 5vh;
    }
    .packages-container{
        display: flex;
        flex-wrap: wrap;
       
    }
    @media only screen and (max-width: 768px) {
        padding-top: 15vh;
        width: 100%;
        h1{
           width: 100%;
        }
    }
`