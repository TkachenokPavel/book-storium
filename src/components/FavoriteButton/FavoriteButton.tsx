import { StyledFavoriteButton } from "./styles";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IBookDetails } from "../../types/types";
import { Color } from "../../ui";
import { CSSProperties } from "styled-components";
import { useEffect, useState } from "react";
import {
  addFavorite,
  getFavorite,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from "../../store";

interface IProps {
  book: IBookDetails;
}

const favoriteIconStyles: CSSProperties = {
  color: `${Color.RED}`,
  width: "30px",
  height: "30px",
};

export const FavoriteButton = ({ book }: IProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorite);

  const handleButton = () => {
    if (isFavorite) {
      dispatch(removeFavorite(book.isbn13));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(book));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    favorites.find((item) => item.isbn13 === book.isbn13)
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, [book.isbn13, favorites]);

  return (
    <StyledFavoriteButton type="button" onClick={handleButton}>
      {isFavorite ? (
        <IoMdHeart style={favoriteIconStyles} />
      ) : (
        <IoMdHeartEmpty style={favoriteIconStyles} />
      )}
    </StyledFavoriteButton>
  );
};
