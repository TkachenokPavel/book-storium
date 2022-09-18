import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../../assets";
import { FavoriteItem, Title } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getFavorite } from "../../store/selectors/favoriteSelector";
import { EmptyFavorites, FavoritesList, StyledFavoritesPage } from "./styles";

const arrowStyles: CSSProperties = {
  cursor: "pointer",
  alignSelf: "self-start",
  margin: "20px 0",
};

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites } = useAppSelector(getFavorite);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledFavoritesPage>
      <ArrowBackIcon onClick={handleBack} style={arrowStyles} />
      <Title title="favorites" />
      <FavoritesList>
        {favorites.length > 0 ? (
          favorites.map((favorite) => {
            return <FavoriteItem favorite={favorite} key={favorite.isbn13} />;
          })
        ) : (
          <EmptyFavorites>Favorites list is empty</EmptyFavorites>
        )}
      </FavoritesList>
    </StyledFavoritesPage>
  );
};
