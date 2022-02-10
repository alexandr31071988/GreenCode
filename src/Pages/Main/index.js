import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {

  return(
    <main className="App">
      <Link to="/catalog">Каталог товаров</Link>
      <Link to="/type/:curial">Крупа</Link>
    </main>
  )
}

export default Main