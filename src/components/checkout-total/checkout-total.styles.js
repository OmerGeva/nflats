import styled from 'styled-components';

export const CheckoutTotalContainer = styled.div`
box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
0 2px 2px rgba(0,0,0,0.11), 
0 4px 4px rgba(0,0,0,0.11), 
0 6px 8px rgba(0,0,0,0.11),
0 8px 16px rgba(0,0,0,0.11);
border: .5px solid #FFFAFA;
border-radius: 4px;
width: 400px;
min-height: 45vh;
margin: 8px;
text-align: center;
display: flex;
flex-direction: column;


h3{
    margin: 5% auto;
    padding: 8px;
    font-size: 32px;
}

p{
    font-size: 22px;
}
.total-info{
    display: flex;
    justify-content: space-around;
}
.package-icon{
    font-size: 74px;
    margin: auto;
    margin-top: 5%;
}
.price{
    width: 30%;
    font-size: 42px;
}
.flex-grower{
    flex-grow: 1;
  }
.checkout-btn{
    border: 1px solid #DD1F24;
    width: 80%;
    padding: 16px;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 8%;
    cursor: pointer;
    &:hover{
        box-shadow: 0 2px 2px rgba(0,0,0,0.3), 
        0 3px 3px rgba(0,0,0,0.3), 
        0 4px 4px rgba(0,0,0,0.3), 
        0 6px 8px rgba(0,0,0,0.3),
        0 8px 16px rgba(0,0,0,0.3);
    }
}

@media only screen and (max-width: 768px) {
    .priceAndDescription{
        display: block;
        text-align: center;
        .price{
            margin: auto;
            text-align: center;
        }
    }
}
`
