import styled, { css } from "styled-components";

const SelectWrap = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        display: inline-block;
        border-color: #434055 !important;
        border-width: 0 1px 1px 0;
        padding: 2.5px;
        margin: 0 4px;
        vertical-align: middle;
        border-style: solid;
        top: 45%;
        right: 8px;
        transform: rotate(45deg) translateY(-50%);
      }
      &::after {
      }
    `;
  }}
`;

const Select = styled.select`
  ${({ theme }) => {
    return css`
      height: 2rem;
      padding: 0.25rem 0.5rem 0.25rem 1.325rem;
      font-size: ${theme.fonts.size.sm};
      border: 1px solid ${theme.colors.adminGray};
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      padding-right: 2rem;
      cursor: pointer;
      outline: none;
      transition: border-color 0.3s ease-in-out;
      &:hover {
        border-color: ${theme.colors.adminBlack};
        transition: border-color 0.3s ease-in-out;
      }
      &:focus {
        transition: border-color 0.3s ease-in-out box-shadow 0.3s ease-in-out;
        border-color: ${theme.colors.adminBlue};
        box-shadow: rgb(56 202 241 / 58%) 0px 1px 4px 0px;
      }
      ${({ full }) => {
        return full && `width:100%`;
      }};
      ${({ padding }) => {
        return padding && `padding: ${padding}`;
      }};
    `;
  }}
`;
export { SelectWrap, Select };
