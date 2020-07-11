import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { pizzaRad } from '../Styles/colors'
import { Title } from '../Styles/title'

const NavbarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  background-color: rgb(${pizzaRad});
  padding: 10px;
  box-sizing: border-box;
  z-index: 999;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`

const UserStatus = styled.div`
  margin-right: 30px;
  font-size: 14px;
  color: white;
`

const UserName = styled.span`
  margin-right: 15px;
`

const LoginButton = styled.button`
  position: relative;
  min-height: 20px;
  border: none;
  border-radius: 0.3rem;
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: transparent;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 50%;
    height: 2px;
    background-color: white;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    &::before {
      opacity: 1;
      margin-bottom: -16.5px;
    }
  }

  &:focus {
    outline: none;
  }
`

const LogoutButton = styled(LoginButton)`
  margin-right: 0px;
`

const LanguageButton = styled(LoginButton)`
  margin-right: 15px;
`

export function Navbar({ loggedInUser, setOpenAuthDialog, logout }) {
  const { i18n } = useTranslation()

  function changeLanguage(language) {
    i18n.changeLanguage(language)
  }

  function showDialog() {
    setOpenAuthDialog(true)
  }

  return (
    <NavbarStyled>
      <Logo>
        Sliceline&nbsp;
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>

      <UserStatus>
        {loggedInUser === 'loading' ? (
          'Loading...'
        ) : loggedInUser ? (
          <>
            <LanguageButton onClick={() => changeLanguage('zh-CN')}>
              中文
            </LanguageButton>
            <UserName>{loggedInUser.displayName}</UserName>
            <LogoutButton onClick={logout}>Log Out</LogoutButton>
          </>
        ) : (
          <>
            <LanguageButton onClick={() => changeLanguage('zh-CN')}>
              中文
            </LanguageButton>
            <LoginButton onClick={showDialog}>Sign In</LoginButton>
          </>
        )}
      </UserStatus>
    </NavbarStyled>
  )
}
