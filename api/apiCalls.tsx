export const generateMarketNews = async () => {
    const response = await fetch ("https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=MARKET_INDEXES&country=us&language=en", 
        {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': ' 292ac236c1msh0bd1be1f64cd907p13a5e2jsn5f1e2579f80e',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    });
    const data = await response.json();
    return data;
}


export const searchtab = async(searchText: string) =>{
    const result = await fetch (`https://real-time-finance-data.p.rapidapi.com/search?query=${encodeURIComponent(searchText)}&language=en`,
    {
        method: "GET",
        headers:{
            'X-RapidAPI-Key': ' 292ac236c1msh0bd1be1f64cd907p13a5e2jsn5f1e2579f80e',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    });
    const answer = await result.json();
    return answer;
}

export const generateOverview = async() =>{
    const response = await fetch ("https://real-time-finance-data.p.rapidapi.com/stock-overview?symbol=AAPL%3ANASDAQ&language=en",
        {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': ' 292ac236c1msh0bd1be1f64cd907p13a5e2jsn5f1e2579f80e',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    });
    const result = await response.json();
    return result;
}
