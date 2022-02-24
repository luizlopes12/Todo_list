import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 100px auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 90%;
    }
    h1{
        font-size: 2.2em;
        margin-bottom: 20px;
    @media screen and (max-width: 768px){
        font-size: 1.5em;
    }
    }
    form{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export const ListContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`;