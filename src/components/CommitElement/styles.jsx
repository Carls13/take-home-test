import styled from "styled-components";

export const CommitLink = styled.a`
    text-decoration: none;
    color: white;
`;

export const CommitContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 4px solid white;
    border-radius: 20px;
    padding: 0 10px;
`;

export const CommitDescription = styled.p`

`;

export const AuthorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const AuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const AuthorName = styled.label`
    font-weight: bold;
`;

export const Sha7 = styled.h3`
    font-weight: bold;
    margin-left: auto;
`;