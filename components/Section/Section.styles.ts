"use client";

import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem 0;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--section-title);
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:active {
    transform: scale(0.98);
  }
`;
