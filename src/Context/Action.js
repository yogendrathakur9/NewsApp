const API_KEY = 'pub_15059f92e2843138cc437c488e3dd8f47fa58'

export const getNews = async (topic) => {
    // console.log(topic+" "+"topic hai");
    const reponse = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&q=${topic}&language=en`)

    const data = await reponse.json()

    return data.results
}