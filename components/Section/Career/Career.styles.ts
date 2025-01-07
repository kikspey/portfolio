"use client";

import styled from "styled-components";

export const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const JobContainer = styled.div`
  display: flex;
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
`;

export const JobContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const BaseText = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
`;

export const JobTitle = styled(BaseText)`
  margin-bottom: 0.1rem;
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.1rem;
`;

export const JobDate = styled(BaseText)``;

export const JobLocation = styled(BaseText)``;

export const JobCompany = styled(BaseText)``;

export const JobDescription = styled(BaseText)`
  margin-top: 0.5rem;
  color: var(--text-color);
  font-size: 1rem;
`;

export const JobCompanyLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  width: 3rem;
  height: 3rem;
`;
