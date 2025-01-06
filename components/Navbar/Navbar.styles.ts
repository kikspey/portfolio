"use client";

import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin: 5rem 0;
`;

export const Navlogo = styled.div`
  position: relative;
  width: 7rem;
  height: 100%;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  list-style: none;
`;

export const NavbarLink = styled.li`
  color: var(--gray);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;