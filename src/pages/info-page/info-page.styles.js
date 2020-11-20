import styled from 'styled-components';

export const InfoPageContainer = styled.div`
margin-top: 15vh;
text-align: center;
a{
    color: white;
    text-decoration: underline;
    &:hover{
        opacity: 0.7;
    }
}
.info{
    margin: 5vh auto;
    text-align: left;
    width: 60%;
}
@media only screen and (max-width: 768px) {
    .info{
        margin: 5vh auto;
        text-align: left;
        width: 90%;
    }
}

`