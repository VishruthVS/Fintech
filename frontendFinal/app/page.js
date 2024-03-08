"use client";

import Developer from "@/components/developer";
import Navbar from "@/components/navbar";
import Wallet from "@/components/news";
import SwapExchange from "@/components/swapExchange";

function App() {
  return (
    <div className="bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./images/bg-1.png')" }}>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center  items-center ">
        <Wallet />
        <SwapExchange />
        <Developer />
      </section>
    </div>
  );
}

export default App;
