"use client";

import Image from "next/image";
import Link from "next/link";

const Developer = () => {
  return (
    <>
      <div className="w-full mx-auto px-4 h-auto mb-[8vh] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col items-center sm:text-left p-4 xl:ml-[6vw] sm:p-8">
            <h1 className="leading-9 text-center font-mono lg:mt-[4vh] xl:mt-[6vh] 2xl:mt-[8vh] text-white">
              <p className="text-3xl sm:text-5xl font-caprasimo">Developers</p>
              <p className="pt-4 sm:pt-8 font-mono text-2xl sm:text-3xl">
                {" "}
                Elevate your development journey with our faucet platform.
                Access a diverse range of testnet tokens for your projects.
                Seamlessly acquire tokens for testing and experimentation.
                Empower your development process with our comprehensive faucet
                service
              </p>
            </h1>
            <Link href="/dev/faucets">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-5 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-4 px-8 ">
                Faucets
              </button>
            </Link>
          </div>

          <div className="w-[45vw] pt-10 px-[2vw] sm:px-[15vw] md:px-[20vw] lg:px-[2vw] xl:mx-[4vw]">
            <Image
              width={100}
              height={100}
              className="h-[60vh] w-[88vw] sm:h-[60vh] sm:w-[70vw] md:h-[66vh] md:w-[60vw] lg:h-[62vh] lg:w-[45vw] xl:h-[600px] max-w-[450px]"
              src="/base.svg"
              title="MatCrypt Wallet Image"
              alt="Wallet"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;
