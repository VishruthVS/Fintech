"use client";
import Developer from "@/components/developer";
import Wallet from "@/components/news";
import SwapExchange from "@/components/swapExchange";

import { useEffect, useState } from "react";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('./images/bg-1.png')" }}
    >
      <nav className="bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl text-white">FinTech agent</h1>
            {/* <Link href="/swap">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                Swap
              </button>
            </Link>
            <Link href="/news">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                News
              </button>
            </Link>
            <Link href="/dev">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                Developers
              </button>
            </Link> */}
            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 "
              onClick={connectWallet}
            >
              <span className="font-bold">
                {walletAddress && walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </nav>
      <section className="bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900 min-h-screen flex flex-col justify-center  items-center ">
        {/* <div className="container mx-auto text-center flex flex-row">
          <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 to-orange-200">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Log in</h2>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Continue
              </button>
              <div className="flex items-center">
                <div className="bg-gray-200 h-px flex-grow"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="bg-gray-200 h-px flex-grow"></div>
              </div>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
                Login with passkey
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">
                Plug-n-play web3 accounts with web2 UX
              </h3>
              <p className="text-gray-700">
                Make wallets invisible. Simple, non-custodial accounts to
                onboard users and transact with web2 UX.
              </p>
            </div>
          </div>
        </div> */}
        <Wallet />
        <SwapExchange />
        <Developer />
      </section>
    </div>
  );
}

export default App;
