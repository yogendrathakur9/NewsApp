import React, { useContext, useEffect } from 'react'
import Trnews from "../components/Trnews"
import Card from "../components/Card"
import NewsContext from '../Context/NewsContext'
import { getNews } from '../Context/Action'

function Home() {

  const { topic, news, dispatch } = useContext(NewsContext)

  useEffect(() => {
    const getData = async (topic) => {
      const data = await getNews(topic)
      const newsandtopic = {
        data: data,
        topic: topic
      }
      dispatch({
        type: "GET_NEWS",
        payload: newsandtopic
      })
      console.log(data);
    }
    getData(topic)
  })

  return (
    <div className="hero-section row">
      <Trnews/>
      <h1 className="headline">Top News Of INDIA</h1>
      {
        news.map((item, index) => <Card key={index} news={item} />)
      }
    </div>
  )
}

export default Home