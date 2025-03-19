"use client";

import styled from "styled-components";
import {Card, CardsContainer} from "../Section.styles";
import Link from "next/link";

export const ArticleDateIcon = styled.div`
    svg {
        margin-left: 0.5rem;
    }
`;

export const ArticlesContainer = styled(CardsContainer)``;

export const ArticleLink = styled(Link)`
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export const ArticleContainer = styled(Card)`
    align-items: center;

    svg {
        transition: all 0.2s;
    }

    &:hover {
        ${ArticleDateIcon} {
            svg {
                transform: rotate(90deg);
            }
        }
    }
`;

export const ArticleTitle = styled.h2`
    font-size: 1.1rem;
`;

export const ArticleDate = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 1rem;
`;
