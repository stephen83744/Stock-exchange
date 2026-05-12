import{useNavigate} from "react-router-dom";
import { useState } from "react";

const SellPage: React.FC = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
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
              className="border-b-2 border-primary px-2 py-1 text-sm font-bold text-slate-900 dark:text-slate-400"
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
      <div className="w-full w-lg rounded-2xl p-8 shadow-xl bg-white mt-10">
      <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
        <button  onClick={() => navigate("/trade")} 
        className="flex-1 py-2 text-center text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700 bg-gray-200 rounded-md shadow-sm">
          Buy
        </button>
        <button
          
          className="flex-1 py-2 text-center text-sm font-semibold text-gray-900 hover:text-gray-700  rounded-md shadow-sm bg-white"
        >
          Sell
        </button>
      </div>

        {/* Position Card */}
        <div className="bg-white border rounded-xl p-4 mb-6">
          <p className="text-xs uppercase text-gray-400 mb-3">
            Portfolio Context
          </p>

          <div className="flex justify-between">
            <div>
              <p className="text-xs">Current Holding</p>
              <p className="font-bold text-lg">0.00 Shares</p>
            </div>

            <div className="text-right">
              <p className="text-xs">Market Value</p>
              <p className="font-bold text-lg">$0.00</p>
            </div>
          </div>
        </div>


        {/* Amount */}
        <div className="mb-6">
          <p className="text-xs uppercase text-gray-400 mb-2">
            Amount to Sell
          </p>

          <div className="relative">
            <input
              type="number"
              value={amount}
              placeholder="0"
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg p-4 text-2xl font-bold"
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
              <button className="text-xs bg-gray-100 px-2 py-1 rounded">
                MAX
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Estimated Price</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between text-sm text-red-500">
            <span>Fees</span>
            <span>-$0.00</span>
          </div>

          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        </div>

       
        <button className="w-full bg-black text-white py-4 rounded-lg font-bold">
         Execute Sell
        </button>
      </div>
    </div>
  );
};

export default SellPage;