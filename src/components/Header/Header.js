import React from 'react'
import { HeaderContainer } from './Header.styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToFavoritesPage, goToHomePage } from '../../routes/coordinator'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const renderNavButton = () => {
    switch (location.pathname) {
      case "/":
        return <button data-testid="go-to-favorites-button" onClick={() => goToFavoritesPage(navigate)}>Ver favoritos</button>
      case "/favorites":
        return <button data-testid="go-to-homepage-button" onClick={() => goToHomePage(navigate)}>Ir para Homepage</button>
      default:
        return <></>
    }
  }

  return (
    <HeaderContainer>
      <h1>Dog CEO - gerador de dogs aleatórios</h1>
      {renderNavButton()}
    </HeaderContainer>
  )
}

export default Header