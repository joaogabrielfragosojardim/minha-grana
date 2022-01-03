import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Cards } from "../Pages/Cards";
import { Transactions } from "../Pages/Transactions";
import { Profile } from "../Pages/Profile";

import ROUTES from "./routes";

function RoutesIndex() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CARDS} element={<Cards />} />
      <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
}

export default RoutesIndex;
