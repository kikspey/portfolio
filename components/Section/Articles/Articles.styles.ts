"use client";

import styled from "styled-components";

export const ArticleDateIcon = styled.div`
  svg {
    margin-left: 0.5rem;
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
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
  color: var(--gray);
`;
