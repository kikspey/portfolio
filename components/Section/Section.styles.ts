"use client";

import styled from "styled-components";
import Link from "next/link";

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

export const CardChevronIcon = styled.div`
  margin-left: auto;
  transition: all 0.2s;
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

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    ${CardChevronIcon} {
      transform: rotate(-45deg);
    }
  }
`;

export const CardLink = styled(Link)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--text-color);
`;

export const CardDescription = styled.p`
  margin-top: 0.2rem;
  font-size: 0.9rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const CardImage = styled.div`
  position: relative;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--background);
  border: 1px solid var(--border);

  img {
    padding: 0.2rem;
    border-radius: 50%;
  }
`;
