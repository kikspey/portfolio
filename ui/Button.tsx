"use client";

import * as React from "react";
import styled, { css } from "styled-components";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "icon";

const buttonVariants = {
  variant: {
    default: css`
      background-color: var(--main-button);
      border: 1px solid var(--main-button);
      color: var(--background);
    `,
    secondary: css`
      background-color: var(--foreground);
      border: 1px solid var(--border);
      color: var(--text-color);
    `,
    destructive: css``,
    outline: css``,
    ghost: css``,
    link: css``,
  },
  size: {
    default: css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `,
    sm: css``,
    lg: css``,
    icon: css`
      padding: 0.5rem;

      span {
        svg {
          margin-right: 0 !important;
        }
      }
    `,
  },
};

const ButtonBase = styled.button<{
  variant: Variant;
  size: Size;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;

  ${({ variant, size }) => css`
    ${buttonVariants.variant[variant]};
    ${buttonVariants.size[size]};
  `}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    filter: brightness(0.95);
  }

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonBase
        className={className}
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {children}
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";

export { Button };
