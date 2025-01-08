"use client";

import styled from "styled-components";
import { Card, CardsContainer } from "../Section.styles";

export const CareerContainer = styled(CardsContainer)``;

export const JobContainer = styled(Card)`
  align-items: flex-start;
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
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.4rem;

  img {
    padding: 0.5rem;
  }
`;
