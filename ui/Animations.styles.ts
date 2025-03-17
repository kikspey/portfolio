"use client";

import { keyframes } from "styled-components";

export const grow = keyframes`
    from {
        transform: scale(.95);
    }
    to {
        transform: scale(1);
    }
`;

export const size = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;