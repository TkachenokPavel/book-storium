import { CSSProperties, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CircleLoader from 'react-spinners/CircleLoader';
import { ArrowBack } from '../../assets'
import { BookTabs, Rating, Title } from '../../components';
import { ErrorMassage } from '../../components/BooksList/styles';
import { fetchBookDetails } from '../../store/features/bookDetails/bookDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/bookDetailsSelector';
import { getAuthor, getPrice } from '../../utils';
import { BookDetailsList, Image, CartButton, Description, PriceWrapper, RowWrapper, DetailsTitle, DetailsWrapper, Price, StyledBook, Preview, MoreDetails, ImageWrapper } from './styles';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { Color } from '../../ui';

const override: CSSProperties = {
    marginTop: "100px",
}

const favoriteStyle: CSSProperties = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40px',
    height: '40px',
    color: `${Color.LIGHT}`,
    background: `${Color.PRIMARY}`
}

export const BookDetails = () => {
    const navigate = useNavigate();
    const { isbn = '' } = useParams();
    const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { book, error, isLoading } = useAppSelector(getBookDetails)

    const { authors, image, isbn13, language, pages, pdf, price, publisher, rating, title, year } = book;

    const handleBack = () => {
        navigate(-1);
    }

    const handleDetails = () => {
        setIsMoreDetails(true)
    }

    const detailedDescription = [
        ['Authors', getAuthor(authors)],
        ['Publisher', publisher],
        ['Language', language],
    ]

    const moreDeatiledDescription = [
        ['Year', year],
        ['Pages', pages],
        ['isbn13', isbn13],
    ]

    useEffect(() => {
        dispatch(fetchBookDetails(isbn))
    }, [isbn, dispatch])

    if (isLoading) {
        return (
            <StyledBook>
                <CircleLoader loading={isLoading} cssOverride={override} size={100} />
            </StyledBook>
        )
    }

    if (error) {
        return (
            <ErrorMassage>Sorry, {error}</ErrorMassage>
        )
    }

    return (
        <StyledBook>
            <ArrowBack onClick={handleBack} style={{
                cursor: 'pointer',
                alignSelf: 'self-start',
                margin: "20px 0",
            }} />
            <Title title={title} />
            <DetailsWrapper>
                <ImageWrapper>
                    <Image src={image} />
                    <IoMdHeartEmpty style={favoriteStyle} />
                </ImageWrapper>
                <BookDetailsList>
                    <PriceWrapper>
                        <Price>{getPrice(price)}</Price>
                        <Rating rating={rating} />
                    </PriceWrapper>

                    {detailedDescription.map(description => {
                        return (
                            <RowWrapper key={description[0]}>
                                <DetailsTitle>{description[0]}</DetailsTitle>
                                <Description>{description[1]}</Description>
                            </RowWrapper>
                        )
                    })}

                    {isMoreDetails
                        ? moreDeatiledDescription.map(description => {
                            return (
                                <RowWrapper key={description[0]}>
                                    <DetailsTitle>{description[0]}</DetailsTitle>
                                    <Description>{description[1]}</Description>
                                </RowWrapper>
                            )
                        })
                        : <MoreDetails onClick={handleDetails}>More details</MoreDetails>}

                    <CartButton type='button'>add to cart</CartButton>

                    {pdf && <Preview href={Object.values(pdf)[0]}>Preview book</Preview>}

                </BookDetailsList>
                <BookTabs book={book} />
            </DetailsWrapper>
        </StyledBook>
    )
}
