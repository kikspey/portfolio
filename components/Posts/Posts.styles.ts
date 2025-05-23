"use client";

import styled from "styled-components";
import {CardUser, CardUsers} from "@/components/Section/Section.styles";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PostMetadata = styled.div`
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey);
`;

export const PostTitle = styled.h1`
    margin-top: 1rem;
`;

export const PostDate = styled.p`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
`;

export const PostAuthors = styled(CardUsers)`
`;

export const PostAuthor = styled(CardUser)`
`;

export const PostContent = styled.div`
    margin-top: 1.5rem;

    a {
        text-decoration: underline;
    }

    h2 {
        margin: 2rem 0 1rem;
    }

    p {
        margin-bottom: .8rem;
    }

    ul {
        padding-left: 1rem;
    }

    img {
        width: 100%;
        border-radius: 0.3rem;
    }

    em {
        font-size: 0.9rem;
        font-style: italic;
    }
`;
