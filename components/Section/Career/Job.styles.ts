"use client";

import styled from "styled-components";
import { Card } from "../Section.styles";

const BaseText = styled.p`
  font-size: 0.9rem;
`;

export const JobContainer = styled(Card)`
  align-items: flex-start;
`;

export const JobDate = styled(BaseText)``;

export const JobLocation = styled(BaseText)`
  margin-bottom: 0.5rem;
`;

export const JobCompany = styled(BaseText)``;
