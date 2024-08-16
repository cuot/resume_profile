import React from 'react'
import styled, { css } from 'styled-components'

export default function Layout({ children }) {
  return (
    <Inner>{children}</Inner>
  )
}

const Inner = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      max-width: 1140px;
      min-height: 1500px;
      margin: 0 auto;
      padding: 4rem 0;

      ${theme.device.tablet} {
        width: auto;
        margin-right: 0;
        margin-left: 0;
        padding-right: 20px;
        padding-left: 20px;
      }

      ${theme.device.smTablet} {
        padding-right: 10px;
        padding-left: 10px;
      }
    `;
  }}
`;