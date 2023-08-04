import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

interface IRouterProps {}
const Router = ({}: IRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
        {/* <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
