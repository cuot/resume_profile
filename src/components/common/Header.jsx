import { Select, SelectWrap } from 'components/form/Select';
import React, { css } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function Header() {
  const navigate = useNavigate();
  const languageCode = [
    { name: "한국어", value: "ko" },
    { name: "English", value: "en" },
    { name: "日本語", value: "jp" }
  ]
  const onChangeLanguage = (e) => {
    navigate(e.target.value);
  }
  return (
    <HeaderWrap>
      {/* <MenuWrap>
        <Menu>메뉴1</Menu>
        <Menu>메뉴2</Menu>
        <Menu>메뉴3</Menu>
      </MenuWrap> */}
      <SelectWrap>
        <Select onChange={onChangeLanguage}>
          {languageCode?.map((item, index) => {
            return <option value={item.value} key={index}>{item.name}</option>
          })}
        </Select>
      </SelectWrap>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: center;
`;

const MenuWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const Menu = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px;
`;

