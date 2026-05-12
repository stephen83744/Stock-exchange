import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TradePage: React.FC = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
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
      <div className=" w-full w-lg rounded-2xl p-8 shadow-xl bg-white">

      <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
        <div className="flex-1 py-2 text-center text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm">
          Buy
        </div>
        <button
          onClick={() => navigate("/sell")}
          className="flex-1 py-2 text-center text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Sell
        </button>
      </div>
      <form>
        <div>
          <label htmlFor="stock">Order Type</label>
          <br></br>
          <select
            id="stock"
            className="w-full rounded-lg border border-gray-300 p-2"
          >
            <option value="market">Market</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Amount</label>
          <br></br>
          <input
            type="number"
            placeholder="QTY"
            value={amount}
            className="mb-6 w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <hr></hr>
        <div className="flex justify-between items-center mb-4">
          <p> Estimated Price</p>
          <p> $0.00</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Fees & Tax</p>
          <p> $0.00</p>
        </div>
        <hr></hr>
        <div className="flex justify-between items-center mb-4">
          <p>Total</p>
          <p> $0.00</p>
        </div>
        <button className="mt-3 w-full rounded-lg bg-black p-2 text-white cursor-pointer hover:bg-black-100">
          Execute Trade
        </button>
      </form>
      </div>
    </div>
  );
};
export default TradePage;
