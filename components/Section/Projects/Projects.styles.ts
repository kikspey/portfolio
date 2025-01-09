"use client";

import styled from "styled-components";
import { Card, CardsContainer } from "../Section.styles";
import Link from "next/link";

export const ProjectsContainer = styled(CardsContainer)``;

export const ProjectLink = styled(Link)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ProjectChevronIcon = styled.div`
  color: var(--gray);
  transition: all 0.2s;
`;

export const ProjectContainer = styled(Card)`
  flex-direction: row;

  &:hover {
    ${ProjectChevronIcon} {
      transform: rotate(-45deg);
    }
  }
`;

export const ProjectImage = styled.div`
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

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
  color: var(--text-color);
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
`;
