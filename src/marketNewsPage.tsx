import { useState, useEffect } from "react";
import { generateMarketNews } from "../api/apiCalls.tsx";
import { useNavigate } from "react-router-dom";


export const MarketNewsPage: React.FC = () => {
    const navigate = useNavigate();
  const [markets, setMarkets] = useState<any[]>([]);

  

  useEffect(() => {
    const fetchData = async () => {
      const news = await generateMarketNews();
      setMarkets(news?.data?.news || []); 
        };

    fetchData();
  }, []);

  
  return (
    <div className="min-h-screen bg-slate-50 bg-gray-300  py-8">
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
              className=" px-2 py-1 text-sm font-bold text-slate-900 dark:text-white border-b-2 border-primary" 
            >
              News
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/trade");
              }}
              className=" px-2 py-1 text-sm font-semibold text-slate-500 dark:text-slate-400"
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
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          Market News
        </h1>

        {/* Top hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            {markets[0] && (
              <div
                className="relative h-[430px] rounded-xl overflow-hidden bg-cover bg-center group"
                style={{
                  backgroundImage: `url(${markets[0].article_photo_url})`,
                }}
              >
                {/* dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* text */}
                <div className="absolute bottom-0 p-8 text-white">
                  <span className="inline-block text-xs uppercase tracking-widest font-semibold bg-red-500 px-2 py-1 rounded-sm mb-4">
                    Breaking
                  </span>

                  <h2 className="text-3xl font-bold leading-tight mb-3 max-w-2xl">
                    {markets[0].article_title}
                  </h2>

                  <a
                    href={markets[0].article_url}
                    target="_blank"
                    className="text-sm text-slate-200 hover:text-white"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right stacked cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {markets[1] && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Markets
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                  {markets[1].article_title}
                </h3>

                <a
                  href={markets[1].article_url}
                  target="_blank"
                  className="mt-4 inline-block text-sm text-slate-500 hover:text-slate-900"
                >
                  Read article
                </a>
              </div>
            )}

            {markets[2] && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                  Finance
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                  {markets[2].article_title}
                </h3>

                <a
                  href={markets[2].article_url}
                  target="_blank"
                  className="mt-4 inline-block text-sm text-slate-500 hover:text-slate-900"
                >
                  Read article
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom news cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[markets[3], markets[4], markets[5]].map(
            (item, index) =>
              item && (
                <article
                  key={ index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.article_photo_url}
                      alt="market news"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-3">
                      {item.article_title}
                    </h3>

                    <a
                      href={item.article_url}
                      target="_blank"
                      className="mt-4 inline-block text-sm text-slate-500 hover:text-slate-900"
                    >
                      Read article
                    </a>
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketNewsPage;
