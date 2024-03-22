import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateInvoice from "./pages/CreateInvoice";
import Invoice from "./pages/Invoice";


function App() {
  return (
<BrowserRouter>

  <Routes>
    <Route path="/" element={< Home/>}></Route>
    <Route path="/invoice" element={< Invoice/>}></Route>
    <Route path="/create-invoice" element={<CreateInvoice/>}></Route>
  </Routes>

</BrowserRouter>
  );
}

export default App;
