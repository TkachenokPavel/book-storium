import { CSSProperties, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { ArrowBackIcon } from "../../assets";
import { BookTabs, Carousel, FavoriteButton, Rating, Title } from "../../components";
import { ErrorMassage } from "../../components/BooksList/styles";
import { fetchBookDetails } from "../../store/features/bookDetails/bookDetailsSlice";
import { addItem, calculateTotals } from "../../store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBookDetails } from "../../store/selectors/bookDetailsSelector";
import { getAuthor, getPrice } from "../../utils";
import {
  BookDetailsList,
  Image,
  CartButton,
  Description,
  PriceWrapper,
  RowWrapper,
  DetailsTitle,
  DetailsWrapper,
  Price,
  StyledBookPage,
  Preview,
  MoreDetails,
  ImageWrapper,
} from "./styles";

const override: CSSProperties = {
  marginTop: "100px",
};

const arrowStyles: CSSProperties = {
  cursor: "pointer",
  alignSelf: "self-start",
  margin: "20px 0",
};

export const BookDetailsPage = () => {
  const navigate = useNavigate();
  const { isbn = "" } = useParams();
  const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { book, error, isLoading } = useAppSelector(getBookDetails);

  const { authors, image, isbn13, language, pages, pdf, price, publisher, rating, title, year } =
    book;

  const handleBack = () => {
    navigate(-1);
  };

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

  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
  }, [isbn, dispatch]);

  if (isLoading) {
    return (
      <StyledBookPage>
        <CircleLoader loading={isLoading} cssOverride={override} size={100} />
      </StyledBookPage>
    );
  }

  if (error) {
    return <ErrorMassage>Sorry, {error}</ErrorMassage>;
  }

  return (
    <StyledBookPage>
      <ArrowBackIcon onClick={handleBack} style={arrowStyles} stroke="white" />
      <Title title={title} />
      <DetailsWrapper>
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
        <Carousel />
      </DetailsWrapper>
    </StyledBookPage>
  );
};
