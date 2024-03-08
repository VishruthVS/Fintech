import Image from "next/image";

function Loading() {
  return (
    <div>
      <Image
        width={100}
        height={100}
        className="h-[60vh] w-[88vw] sm:h-[60vh] sm:w-[70vw] md:h-[66vh] md:w-[60vw] lg:h-[62vh] lg:w-[45vw] xl:h-[600px] max-w-[450px]"
        src="/base.svg"
        title="MatCrypt Wallet Image"
        alt="Wallet"
      />
    </div>
  );
}

export default Loading;
