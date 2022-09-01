import { CSSProperties, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CircleLoader from 'react-spinners/CircleLoader';
import { ArrowBack } from '../../assets'
import { BookTabs, Rating, Title } from '../../components';
import { ErrorMassage } from '../../components/BooksList/styles';
import { bookAPI } from '../../services/bookApi/bookApi';
import { IBookDetails } from '../../types/types';
import { getAuthor, getPrice } from '../../utils';
import { BookDetailsList, BookImage, CartButton, Description, PriceWrapper, RowWrapper, DetailsTitle, DetailsWrapper, Price, StyledBook, Preview, MoreDetails } from './styles';

const override: CSSProperties = {
    marginTop: "100px",
}

export const BookDetails = () => {
    const navigate = useNavigate();
    const { isbn } = useParams();
    const [book, setBook] = useState<IBookDetails>({
        authors: '',
        desc: '',
        error: '',
        image: '',
        isbn10: '',
        isbn13: '',
        language: '',
        pages: '',
        pdf: {},
        price: '',
        publisher: '',
        rating: '',
        subtitle: '',
        title: '',
        url: '',
        year: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false);

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
        bookAPI.getBookDetails(isbn)
            .then(bookResponse => {
                setBook(bookResponse)
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
            .finally(() => {
                setIsLoading(false);
                setErrorMessage('')
            });;
    }, [isbn])

    if (isLoading) {
        return (
            <StyledBook>
                <CircleLoader loading={isLoading} cssOverride={override} size={100} />
            </StyledBook>
        )
    }

    if (errorMessage) {
        return (
            <ErrorMassage>Sorry, {errorMessage}</ErrorMassage>
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
                <BookImage src={image} />
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
