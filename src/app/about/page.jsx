import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="img-wrapper aspect-square  relative">
        <Image
          src="https://images.pexels.com/photos/20693639/pexels-photo-20693639/free-photo-of-a-single-yellow-flower-on-a-stick-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&_gl=1*zz6i3k*_ga*OTgwNzQ3NzEyLjE3MTM4NjA1MTU.*_ga_8JE65Q40S6*MTcxMzg2MDUxNS4xLjEuMTcxMzg2MDUyMi4wLjAuMA.."
          alt="img"
          fill
          priority={false}
        ></Image>
      </div>
    </div>
  );
};

export default AboutPage;
