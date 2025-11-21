import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import Spinner from "./Components/Spinner";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Spinner />; 
  }
  return (
    <BrowserRouter >
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
