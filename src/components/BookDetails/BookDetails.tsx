import { useState } from "react";
import {
  useAppSelector,
  getBookDetails,
  addItem,
  calculateTotals,
  useAppDispatch,
} from "../../store";
import { getAuthor, getPrice } from "../../utils";
import { BookTabs } from "../BookTabs";
import { Carousel } from "../Carousel";
import { FavoriteButton } from "../FavoriteButton";
import { Rating } from "../Rating";
import { Subscribe } from "../Subscribe";
import {
  StyledBookDetails,
  ImageWrapper,
  Image,
  BookDetailsList,
  PriceWrapper,
  Price,
  RowWrapper,
  DetailsTitle,
  Description,
  MoreDetails,
  CartButton,
  Preview,
} from "./styles";

export const BookDetails = () => {
  const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false);
  const { book } = useAppSelector(getBookDetails);
  const dispatch = useAppDispatch();

  const { authors, image, isbn13, language, pages, pdf, price, publisher, rating, title, year } =
    book;

  const handleDetails = () => {
    setIsMoreDetails(true);
  };

  const handleCartButton = () => {
    dispatch(addItem(book));
    dispatch(calculateTotals());
  };

  const detailedDescription = [
    ["Authors", getAuthor(authors)],
    ["Publisher", publisher],
    ["Language", language],
  ];

  const moreDeatiledDescription = [
    ["Year", year],
    ["Pages", pages],
    ["isbn13", isbn13],
  ];

  return (
    <StyledBookDetails>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <FavoriteButton book={book} />
      </ImageWrapper>
      <BookDetailsList>
        <PriceWrapper>
          <Price>{getPrice(price)}</Price>
          <Rating rating={rating} />
        </PriceWrapper>

        {detailedDescription.map((description) => {
          return (
            <RowWrapper key={description[0]}>
              <DetailsTitle>{description[0]}</DetailsTitle>
              <Description>{description[1]}</Description>
            </RowWrapper>
          );
        })}

        {isMoreDetails ? (
          moreDeatiledDescription.map((description) => {
            return (
              <RowWrapper key={description[0]}>
                <DetailsTitle>{description[0]}</DetailsTitle>
                <Description>{description[1]}</Description>
              </RowWrapper>
            );
          })
        ) : (
          <MoreDetails onClick={handleDetails}>More details</MoreDetails>
        )}

        <CartButton type="button" onClick={handleCartButton}>
          add to cart
        </CartButton>

        {pdf && <Preview href={Object.values(pdf)[0]}>Preview book</Preview>}
      </BookDetailsList>
      <BookTabs book={book} />
      <Subscribe />
      <Carousel />
    </StyledBookDetails>
  );
};
