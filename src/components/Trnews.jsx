import { React, useContext } from 'react'
import NewsContext from '../Context/NewsContext'

function Trnews() {

    const {news} = useContext(NewsContext)
    console.log(news);

    console.log(news);
    return (

            <marquee className="trending" direction="left">
                <a target="_blank" >{news.title}</a>
            </marquee>

    )
}

export default Trnews