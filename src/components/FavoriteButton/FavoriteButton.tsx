import { StyledFavoriteButton } from './styles'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { IBookDetails } from '../../types/types'
import { Color } from '../../ui'
import { CSSProperties } from 'styled-components'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addItem, removeItem } from '../../store/features/favorite/favoriteSlice'
import { getFavorite } from '../../store/selectors/favoriteSelector'

interface IProps {
    book: IBookDetails
}

const favoriteIconStyles: CSSProperties = {
    color: `${Color.RED}`,
    width: '30px',
    height: '30px',
}

export const FavoriteButton = ({ book }: IProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector(getFavorite)

    const handleButton = () => {
        if (isFavorite) {
            dispatch(removeItem(book.isbn13));
            setIsFavorite(false);
        } else {
            dispatch(addItem(book));
            setIsFavorite(true)
        }
    }

    useEffect(() => {
        favorites.find(item => item.isbn13 === book.isbn13)
            ? setIsFavorite(true)
            : setIsFavorite(false)
    }, [book.isbn13, favorites])


    return (
        <StyledFavoriteButton type='button' onClick={handleButton}>
            {isFavorite
                ? <IoMdHeart style={favoriteIconStyles} />
                : <IoMdHeartEmpty style={favoriteIconStyles} />
            }
        </StyledFavoriteButton>
    )
}
