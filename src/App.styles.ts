import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;


export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotosList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    

    input[type=submit] {
        background-color: #756DF4;
        height: 43px;
        width: 120px;
        font-weight: bold;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: opacity 0.3s;
        float: right;
        margin-top: 10px;
        &:hover {
            opacity: 0.8;
        }
    }

    input[type="file"] {
        padding: 20px 10px;
        background-color: #333;
        border-radius: 10px;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        margin-right: 20px;
    }

`;