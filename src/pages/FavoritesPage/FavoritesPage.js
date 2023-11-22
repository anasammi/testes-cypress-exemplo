import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import GlobalContext from '../../context/GlobalContext'
import { FavoritesPageContainer } from './FavoritesPage.styled'
import Card from '../../components/Card/Card'

function FavoritesPage() {
  const { favorites } = useContext(GlobalContext)

  return (
    <FavoritesPageContainer>
      <Header />

      <div>
        <button>Salvar no local storage</button>
        <button>Limpar local storage</button>
      </div>

      <div className='card-grid'>
        {favorites.map((dog) => {
          return (
            <Card dog={dog} key={dog.id} />
          )
        })}
      </div>
    </FavoritesPageContainer>
  )
}

export default FavoritesPage