import React, { useContext, useState } from 'react'
import { getNews } from '../Context/Action'
import NewsContext from '../Context/NewsContext'
function Navbar() {

  const [search, setSearch] = useState("")

const{dispatch} = useContext(NewsContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
      const data = await getNews(search)
      const newsandtopic={
        data:data,
        topic:search
      }
      dispatch({
        type:"GET_NEWS",
        payload:newsandtopic
      })
      setSearch("")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-danger ">
      <div className="container-fluid">
        <h1 className="navbar-brand text-white fs-2 text">🅽 🅴 🆆 🆂 APP</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white fw-bold" aria-current="page" href="../pages/Home.jsx">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="../pages/About.jsx">ABOUT</a>
            </li>


          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => { handleSubmit(e) }}>
            <input className="form-control me-2" value={search} type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Enter any Topic here" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar