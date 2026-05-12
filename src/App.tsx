
import SignUp from "./SignupPage.tsx";
import LoginPage from "./LoginPage.tsx";
import MarketNewsPage from "./marketNewsPage.tsx";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TradePage from "./tradePage.tsx";
import SellPage from "./sellPage.tsx";
import  TrendsPage from "./trendingStocks.tsx";
import MarketPage from "./MarketPage.tsx";
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path ="/market" element={<MarketNewsPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/marketPage" element={<MarketPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
