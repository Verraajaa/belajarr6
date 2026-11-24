import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./componens/Navbar";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
export default App;