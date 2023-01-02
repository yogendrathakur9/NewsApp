import React from 'react'
import noImage from '../no-image-icon-6.png'
function Card({news}) {


  const { title, category, image_url, pubDate, link}  = news
  return (
    <div className="card">
      <img src={image_url!==null?image_url:noImage} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text text-secondary ">{pubDate}</p>

        <a href={link}  target="_blank" rel="noopener noreferrer"className="btn btn-outline-light">Read More</a>
      </div>
    </div>
  )
}

export default Card