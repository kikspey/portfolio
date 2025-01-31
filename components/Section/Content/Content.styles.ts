"use client";

import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentPart = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;

    &:hover {
      color: var(--hover-color);
    }
  }
`;
