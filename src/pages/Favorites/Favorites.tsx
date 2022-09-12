import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../../assets";
import { FavoriteItem, Title } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { getFavorite } from "../../store/selectors/favoriteSelector";
import { EmptyFavorites, FavoritesList, StyledFavorites } from "./styles";

export const Favorites = () => {
    const navigate = useNavigate();
    const { favorites } = useAppSelector(getFavorite);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <StyledFavorites>
            <ArrowBack onClick={handleBack} style={{
                cursor: 'pointer',
                alignSelf: 'self-start',
                margin: "20px 0",
            }} />
            <Title title='favorites' />
            <FavoritesList>
                {favorites.length > 0
                    ? favorites.map(favorite => {
                        return <FavoriteItem favorite={favorite} />
                    })
                    : <EmptyFavorites>Favorites list is empty</EmptyFavorites>
                }
            </FavoritesList>
        </StyledFavorites>
    )
}