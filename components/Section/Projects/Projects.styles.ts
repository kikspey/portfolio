"use client";

import styled from "styled-components";

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledProjectLink = styled.a`
  margin-left: auto;
  color: var(--gray);
`;

export const StyledProject = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    ${StyledProjectLink} {
      transform: rotate(-45deg);
    }
  }
`;

export const StyledProjectImage = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.2rem;
  border-radius: 50%;
  background: var(--background);
  border: 1px solid var(--border);
`;

export const StyledProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const StyledProjectTitle = styled.h3`
  font-size: 1rem;
  color: var(--text-color);
`;

export const StyledProjectDescription = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
`;