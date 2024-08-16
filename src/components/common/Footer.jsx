import React from "react";
import { Select, SelectWrap } from "components/form/Select";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const languageCode = [
    { name: "한국어", value: "ko" },
    { name: "English", value: "en" },
    { name: "日本語", value: "jp" },
  ];
  const onChangeLanguage = (e) => {
    navigate(e.target.value);
  };
  return (
    <FooterWrap>
      <FixedWrap>
        <SelectWrap>
          <Select onChange={onChangeLanguage}>
            {languageCode?.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Select>
        </SelectWrap>
      </FixedWrap>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  width: 100%;
  /* display: flex; */
  /* justify-content: flex-end; */
  bottom: 0px;
  position: fixed;
`;
const FixedWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  right: 2rem;
`;
