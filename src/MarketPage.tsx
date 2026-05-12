import { useNavigate } from "react-router-dom";
import { generateOverview } from "../api/apiCalls.tsx";
import { useEffect } from "react";
import { useState } from "react";
import{searchtab} from "../api/apiCalls.tsx";

export default function MarketPage() {
  const navigate = useNavigate()
  const [overview, setOverview] = useState<any[]>([]); 
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
      const getData = async () => {
          const summary = await generateOverview();
          setOverview(summary?.data ? [summary.data] : []);
        };
    
        getData();
      }, []);
   
    useEffect(() => {
        const fetchSearch = async () => {
            
            if (searchText.trim()==="") { 
                setResults([]);
                return;
            };
       const searching = await searchtab(searchText);
            const combinedResults = [
           ...(searching?.data?.stock || []),
           ...(searching?.data?.index || []),
           ...(searching?.data?.currency || []),
         ];

         const filteredResults = combinedResults.filter((item) =>{
            const name = item.name || item.symbol || "";

               return (
        name.toLowerCase().includes(searchText.toLowerCase()) ||
        (item.symbol &&
          item.symbol.toLowerCase().includes(searchText.toLowerCase()))
    
         );
         });
                 
            setResults(filteredResults);    
        }
        fetchSearch();
    },[searchText]);
        


  return (
    <div className="min-h-screen  bg-gray-300  py-8">
       <header className="fixed top-0 z-50 flex h-14 w-full  items-center justify-between  bg-gray-700  px-4 ">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-extrabold text-white ">AlphaRise</h1>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/marketPage");
              }}
              className=" border-b-2 border-primary px-2 py-1 text-sm font-bold text-slate-900 dark:text-slate-400"
            >
              Market
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/trends");
              }}
              className="px-2 py-1 text-sm font-semibold text-slate-500 dark:text-slate-400"
            >
              Trends
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/market");
              }}
              className=" px-2 py-1 text-sm font-semibold text-slate-500 dark:text-white"
            >
              News
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/trade");
              }}
              className="px-2 py-1 text-sm font-semibold text-slate-500 dark:text-slate-400"
            >
              Trade
            </a>
          </nav>

          <button className="p-2" onClick={(e) => {
            e.preventDefault();
            navigate("/marketPlace");
          }}>
            <span className=" text-slate-900 text-white">search</span>
          </button>
        </div>
      </header>
        <div className="pt-16 px-6 max-w-7xl mx-auto ">
        <section className="mt-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400"></span>
            <input
            id="tab"
            value={searchText}
              placeholder="Search markets, tickers, or news..."
              className="w-full bg-white  border-slate-300 py-3 pl-10 pr-4 rounded-2xl outline-none"
              onChange={(e)=>setSearchText(e.target.value)}
            />
            <div className="absolute left-0 right-0 mt-1 bg-white  rounded-lg shadow">
        {results.map((item, index) => (
          <div key={index}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            {item.name || `${item.symbol}${item.currency ? ` → ${item.currency}` : ""}`}
          </div>
        ))}
      </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Market Indices</h2>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Live</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'S&P 500', value: '5,137.08', change: '+0.82%' },
              { name: 'NASDAQ', value: '16,274.94', change: '+1.14%' },
              { name: 'Dow Jones', value: '38,989.83', change: '-0.12%' },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 p-4  bg-white   rounded-xl shadow-md items-center hover:shadow-lg cursor-pointer">
                <p className="text-xs uppercase text-slate-500">{item.name}</p>
                <p className="text-2xl font-semibold mt-1">{item.value}</p>
                <p className={`mt-2 text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watchlist</h2>

          <div className="space-y-2">
            {overview.map((stock, i) => (
              <div
                key={i}
                className="grid grid-cols-4 bg-white border border-slate-200 p-4 items-center mb-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
              >
                <div>
                  <p className="font-semibold">{stock.symbol}</p>
                  <p className="text-xs text-slate-500"> <a href={stock.company_website} className="" target="_blank" >
                    {stock.name}
                  </a></p>
                </div>
                <div className="text-right">{stock.price}</div>
                <div className={`text-right ${String(stock.change_percent).startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change_percent}
                </div>
                <div className="text-right text-slate-400 text-sm">Trend</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 text-white p-6 rounded-lg">
            <p className="text-xs uppercase text-slate-400">Macro Insight</p>
            <h3 className="text-xl font-semibold mt-2">Fed hints at potential rate cuts by Q3 2024</h3>
            <p className="text-sm text-slate-300 mt-3">
              Chairman Jerome Powell&apos;s recent testimony suggests a shift in policy.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-lg">
            <p className="text-xs uppercase text-slate-500">Volatility Index</p>
            <h3 className="text-4xl font-bold mt-3">13.44</h3>
            <p className="text-green-600 mt-2">-2.1%</p>
          </div>
        </section>
      </div>
    </div>
  );
}
