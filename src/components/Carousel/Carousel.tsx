import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledCarousel } from "./styles";
import { getNewBooks, useAppSelector } from "../../store";
import { CarouselItem } from "../CarouselItem";

export const Carousel = () => {
  const { books } = useAppSelector(getNewBooks);
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <StyledCarousel {...settings}>
      <Slider>
        {books.map((book) => {
          return <CarouselItem book={book} key={book.isbn13} />;
        })}
      </Slider>
    </StyledCarousel>
  );
};
