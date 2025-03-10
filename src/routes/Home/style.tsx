import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 300px;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    overflow-y: auto;
`

export const CardImg = styled.img`
    width: 100%;
    object-fit: cover;
`

export const CardTitle = styled.p`
margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
`

export const CardDescription = styled.p`
    font-size: 14px;
`