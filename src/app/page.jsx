import Image from "next/image";
const Home = () => {
  // throw new Error("lorem");
  return (
    <div className="flex flex-col lg:flex-row gap-20 pt-[40px] h-screen">
      <div className="text-container flex-1 flex flex-col justify-center">
        <h1 className="text-4xl mb-10">Lorem ipsum dolor</h1>

        <p
          className="mb-10
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="btn-wrapper flex gap-10">
          <button className="min-w-[120px] cursor-pointer p-[20px] text-white bg-secondary rounded-xl">
            Learn more
          </button>
          <button className="min-w-[120px] cursor-pointer p-[20px]  rounded-xl bg-white text-secondary">
            Contact
          </button>
        </div>

        <div className="img-wrapper   relative">
          <Image
            src="/png/brands.png"
            alt="img"
            width={500}
            height={50}
            priority={false}
            className="grayscale-[1]"
          ></Image>
        </div>
      </div>

      <div className="img-container flex-1">
        <div className="img-wrapper w-full h-full aspect-square relative ">
          <Image src="/png/hero.gif" alt="img" fill priority={false}></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
