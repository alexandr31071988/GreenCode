import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {

  return(
    <main>
      <Link to="/catalog">Каталог товаров</Link>
      <Link to="/type/:curial">Крупа</Link>
    </main>
  )
}

export default Main