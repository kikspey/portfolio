"use client";

import styled from "styled-components";
import { Card, CardsContainer } from "../Section.styles";

export const ProjectsContainer = styled(CardsContainer)``;

export const ProjectLink = styled.a`
  margin-left: auto;
  color: var(--gray);
  transition: all 0.2s;
`;

export const ProjectContainer = styled(Card)`
  flex-direction: row;

  &:hover {
    ${ProjectLink} {
      transform: rotate(-45deg);
    }
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 3rem;
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
  margin-left: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--text-color);
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
`;
