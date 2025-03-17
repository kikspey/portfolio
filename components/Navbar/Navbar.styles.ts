"use client";

import styled from "styled-components";

interface NavBannerProps {
  background: string;
  border?: string;
  color?: string;
}

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 5rem 0;
  padding-top: 0.7rem;

  @media (max-width: 36rem) {
    margin-top: 0;
  }

  a {
    width: 100%;
  }
`;

export const NavBanner = styled.div<NavBannerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  width: 100%;
  background: ${(props) => props.background};
  border: 1px solid ${(props) => (props.border ? props.border : "none")};
  border-radius: 0.5rem;
  color: ${(props) => (props.color ? props.color : "var(--background)")};
  font-weight: 600;
  z-index: -1;
`;

export const NavContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

export const NavTitle = styled.div`
  position: relative;
  color: var(--section-title);
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 0.7rem;
  margin-left: auto;
  list-style: none;
`;

export const NavbarLink = styled.li`
  cursor: pointer;
`;
