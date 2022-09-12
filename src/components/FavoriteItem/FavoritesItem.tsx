import { IBookDetails } from '../../types/types'
import { getPrice } from '../../utils';
import { Rating } from '../Rating';
import { StyledItem, Image, Authors, DetailsWrapper, PriceAndRating, Title, Price, ButtonRemove, Separator } from './styles';
import { IoMdHeart } from 'react-icons/io'
import { CSSProperties } from 'react';
import { Color } from '../../ui';
import { useAppDispatch } from '../../store/hooks';
import { removeItem } from '../../store/features/favorite/favoriteSlice';
import { Link } from 'react-router-dom';

interface IProps {
    favorite: IBookDetails
}

const favoriteIconStyles: CSSProperties = {
    color: `${Color.RED}`,
    width: '30px',
    height: '30px',
}

export const FavoriteItem = ({ favorite }: IProps) => {
    const dispatch = useAppDispatch()

    const { image, title, authors, rating, price, year, isbn13 } = favorite;

    const handleRemove = () => {
        dispatch(removeItem(isbn13))
    }

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
                    <Authors>{`by ${authors}, ${year}`}</Authors>
                    <PriceAndRating>
                        <Price>{getPrice(price)}</Price>
                        <Rating rating={rating} />
                    </PriceAndRating>
                </DetailsWrapper>
                <ButtonRemove type='button' onClick={handleRemove}>
                    <IoMdHeart style={favoriteIconStyles} />
                </ButtonRemove>
            </StyledItem>
            <Separator />
        </>
    )
}
