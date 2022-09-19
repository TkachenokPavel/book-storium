import { IBookDetails } from "../../types/types";
import { getAuthor, getPrice } from "../../utils";
import { Rating } from "../Rating";
import {
  StyledItem,
  Image,
  Authors,
  DetailsWrapper,
  PriceAndRating,
  Title,
  Price,
  ButtonRemove,
  Separator,
} from "./styles";
import { IoMdHeart } from "react-icons/io";
import { CSSProperties } from "react";
import { Color } from "../../ui";
import { removeFavorite, useAppDispatch } from "../../store";
import { Link } from "react-router-dom";
import { useWindiwSize } from "../../hooks";
import { FavoriteButton } from "../FavoriteButton";

interface IProps {
  favorite: IBookDetails;
}

const favoriteIconStyles: CSSProperties = {
  color: `${Color.RED}`,
  width: "30px",
  height: "30px",
};

export const FavoriteItem = ({ favorite }: IProps) => {
  const dispatch = useAppDispatch();
  const { width } = useWindiwSize();

  const { image, title, authors, rating, price, year, isbn13 } = favorite;

  const handleRemove = () => {
    dispatch(removeFavorite(isbn13));
  };

  return (
    <>
      <StyledItem>
        <Link to={`/book/${isbn13}`}>
          <Image src={image} alt={title} />
        </Link>
        <DetailsWrapper>
          <Link to={`/book/${isbn13}`}>
            <Title>{title}</Title>
          </Link>
          <Authors>{`by ${getAuthor(authors)}, ${year}`}</Authors>
          <PriceAndRating>
            <Price>{getPrice(price)}</Price>
            <Rating rating={rating} />
          </PriceAndRating>
        </DetailsWrapper>
        {width && width > 576 ? (
          <ButtonRemove type="button" onClick={handleRemove}>
            <IoMdHeart style={favoriteIconStyles} />
          </ButtonRemove>
        ) : (
          <FavoriteButton book={favorite} />
        )}
      </StyledItem>
      <Separator />
    </>
  );
};
