"use client";

import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutPart = styled.div`
  color: var(--gray);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
