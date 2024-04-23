import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={"flex flex-col lg:flex-row gap-20 pt-[40px] h-screen"}>
      <div className={"flex-1 flex flex-col justify-center"}>
        <h2 className={"text-6xl mb-10"}>About Agency</h2>
        <h1 className={""}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={""}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>

        <div className={"mt-10"}>
          <div className={""}>
            <h1 className="text-2xl">10 K+</h1>
            <p className="text-l">Year of experience</p>
          </div>
          <div className={""}>
            <h1 className="text-2xl">10 K+</h1>
            <p className="text-l">Year of experience</p>
          </div>
          <div className={""}>
            <h1 className="text-2xl">10 K+</h1>
            <p className="text-l">Year of experience</p>
          </div>
        </div>
      </div>
      <div className={"flex-1 self-center"}>
        <div className="img aspect-square max-w-[700px]  relative ml-auto">
          <Image src="/png/about.png" alt="About Image" fill className={""} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
