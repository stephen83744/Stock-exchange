import { useNavigate } from "react-router-dom";
import { generateMarketNews } from "../api/apiCalls.tsx";
import { useEffect, useState } from "react";
const TrendsPage: React.FC = () => {
  const [trend, setTrend] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const trending = await generateMarketNews();
      setTrend(trending?.data?.trends || []);
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className=" text-on-surface bg-gray-100   min-h-screen">
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
              className="px-2 py-1 text-sm font-semibold text-slate-500 dark:text-slate-400"
            >
              Market
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/trends");
              }}
              className=" border-b-2 border-primary px-2 py-1 text-sm font-bold text-slate-500 dark:text-slate-400"
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
              className=" px-2 py-1 text-sm font-semibold text-slate-900 dark:text-slate-400"
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
      <div className="pt-14 pb-20 max-w-screen-xl mx-auto px-4">
        <section className="py-6">
          <p className="text-xs uppercase  text-slate-500">Trending Stocks</p>
          <h2 className="text-2xl font-bold">Trends</h2>
        </section>

        <section className="mb-6 bg-white p-4 flex flex-col md:flex-row gap-4 w-full hover:shadow-lg  rounded-2xl shadow-md ">
          <div className="flex-1">
            <p className="text-xs uppercase text-slate-500">
              Top Stock of the Day
            </p>
             {trend[0] && (
              <div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold"> {trend[0].name}</span>
              <span className="text-green-600 font-semibold">  {trend[0].change_percent > 0 ? "+" : ""}
                                                                 {trend[0].change_percent}%
                                                                 </span>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              NVIDIA surges following breakthrough AI infrastructure
              announcements.
            </p>
            </div>
              )}
          </div>
           
        </section>

        <div className="flex gap-6  rounded-lg mb-4 text-sm text-slate-500">
          <button className="border-b-2 border-black pb-2 text-black">
            Top Gainers
          </button>
          <button>Most Active</button>
          <button>Unusual Volume</button>
          <button>Social Sentiment</button>
        </div>

        <div className="space-y-2">
          {trend.map((stock, i) => (
            <div
              key={i}
              className="bg-white  mb-4 p-4 flex justify-between rounded-xl shadow-md items-center hover:shadow-lg cursor-pointer"
            >
              <div>
                <div className="font-bold">{stock.name}</div>
                <div className="text-sm text-slate-500">{stock.symbol}</div>
              </div>

              <div className="text-right">
                <div className="font-semibold">{stock.price}</div>
                <div
                  className={
                    stock.change_percent >= 0
                      ? "text-green-600 text-sm"
                      : "text-red-500 text-sm"
                  }
                >
                  {stock.change_percent > 0 ? "+" : ""}
                  {stock.change_percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;
