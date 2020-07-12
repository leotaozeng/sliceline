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

const ButtonLogin = styled.button`
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

const ButtonLogout = styled(ButtonLogin)`
  margin-right: 0px;
`

const ButtonLanguage = styled(ButtonLogin)`
  margin-right: 15px;
`

export function Navbar({ loggedInUser, setOpenAuthDialog, logout }) {
  // return the translation function t(), and the i18n object
  const { t, i18n } = useTranslation()

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
            <ButtonLanguage
              onClick={() => {
                i18n.language === 'en'
                  ? changeLanguage('zh-CN')
                  : changeLanguage('en')
              }}
            >
              {i18n.language === 'en' ? '中文' : 'English'}
            </ButtonLanguage>

            <UserName>{loggedInUser.displayName}</UserName>

            <ButtonLogout onClick={logout}>
              {t('navbar.button-logout')}
            </ButtonLogout>
          </>
        ) : (
          <>
            <ButtonLanguage
              onClick={() =>
                i18n.language === 'en'
                  ? changeLanguage('zh-CN')
                  : changeLanguage('en')
              }
            >
              {i18n.language === 'en' ? '中文' : 'English'}
            </ButtonLanguage>

            <ButtonLogin onClick={showDialog}>
              {t('navbar.button-login')}
            </ButtonLogin>
          </>
        )}
      </UserStatus>
    </NavbarStyled>
  )
}
