import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <h1>Preview</h1>
      <Slider className="image-slider" {...settings}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((fileNo) => (
        <div className="image-slider__container" key={fileNo}>
          <img src={`/SliderImg/ArcaneAviansRandom${fileNo}.png`} alt=""></img>
        </div>
      ))}
    </Slider>
    </>
    
  );
};

export default ImageSlider;
