import styled from 'styled-components';

export const PackageContainer = styled.div`
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
    0 2px 2px rgba(0,0,0,0.11), 
    0 4px 4px rgba(0,0,0,0.11), 
    0 6px 8px rgba(0,0,0,0.11),
    0 8px 16px rgba(0,0,0,0.11);
    border: .5px solid #FFFAFA;
    border-radius: 4px;
    width: 30%;
    min-height: 45vh;
    margin: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align:center;
    h3{
        margin: 5% auto;
        padding: 8px;
        font-size: 32px;
    }
    .description{
        margin: 5% auto;

        font-size: 16px;
    }
    p{
        margin: 5% auto;

        width: 60%;
        font-size: 22px;
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
    .add-to-cart{
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
        margin: 2vh auto;
        width: 95%;
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