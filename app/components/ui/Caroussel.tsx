import React from "react";
import Image from "next/image";

interface CarouselProps {
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  title1: string;
  title2:string;
  title3:string;
  title4:string;
}

const Carousel: React.FC<CarouselProps> = ({ imageUrl1, imageUrl2, imageUrl3, imageUrl4, title1, title2, title3, title4}) => {
  return (
    <>
   <div className="carousel w-full shadow-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={imageUrl1} alt={title1} layout="responsive" width={1918} height={1004} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between lg:flex hidden">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={imageUrl2} alt={title2} layout="responsive" width={1918} height={1004} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between lg:flex hidden">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={imageUrl3} alt={title3} layout="responsive" width={1918} height={1004} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between lg:flex hidden">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image src={imageUrl4} alt={title4} layout="responsive" width={1918} height={1004} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between lg:flex hidden">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;
