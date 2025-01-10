"use client";

import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin: 5rem 0;

  @media (max-width: 36rem) {
    margin-top: 0;
  }
`;

export const NavTitle = styled.div`
  position: relative;
`;

export const NavLogo = styled.div`
  position: relative;
  display: flex;
  width: 9rem;

  svg {
    g {
      fill: var(--main-button);
    }
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 0.7rem;
  margin-left: auto;
  list-style: none;
`;

export const NavbarLink = styled.li`
  color: var(--gray);
  cursor: pointer;
`;
