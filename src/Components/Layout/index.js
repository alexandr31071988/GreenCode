import React from 'react'

const Layout = ({children}) => {

  return(
    <main className="App">
      <header>Header</header>
      {children}
    </main>
  )
}

export default Layout