import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.5);
    }

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;