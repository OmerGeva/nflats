import styled from 'styled-components';

export const CheckOutPageContainer = styled.div`
margin: auto;
padding-top: 15vh;
width: 80%;
text-align: center;

h1{
    margin: auto;
    text-align: center;
    width: 20%;
    margin-bottom: 5vh;
}

.packages-container{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
}

.checkout-total-container{
    width: 40%;
}

.packages-and-total{
    display: flex;
}

@media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    h1{
        margin: auto;
        width: 90%;
        margin-bottom: 5vh;
    }
    
    .packages-and-total{
        display: block;
    }
    .packages-container{
        margin: auto;
        width: 95%;
    }
    .checkout-total-container{
        border-top: 2px solid white;
        margin: auto;
        margin-top: 3vh;

        width: 95%;
    }
    
`