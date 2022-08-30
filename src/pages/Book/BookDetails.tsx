import { CSSProperties, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CircleLoader from 'react-spinners/CircleLoader';
import { ArrowBack } from '../../assets'
import { Rating, Title } from '../../components';
import { ErrorMassage } from '../../components/BooksList/styles';
import { bookAPI } from '../../services/bookApi/bookApi';
import { IBookDetails } from '../../types/types';
import { getAuthor } from '../../utils';
import { BookDetailsList, BookImage, CartButton, DetailesDescription, DetailsPriceWrapper, DetailsRowWrapper, DetailsTitle, DetailsWrapper, Price, StyledBook } from './styles';

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

    const { authors, desc, error, image, isbn13, language, pages, pdf, price, publisher, rating, subtitle, title, url, year } = book;

    const handleBack = () => {
        navigate(-1);
    }

    const detailedDescription = [
        ['Authors', getAuthor(authors)],
        ['Publisher', publisher],
        ['Language', language],
        ['Year', year],
    ]

    useEffect(() => {
        bookAPI.getBook(isbn)
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
                    <DetailsPriceWrapper>
                        <Price>{price}</Price>
                        <Rating rating={rating} />
                    </DetailsPriceWrapper>

                    {detailedDescription.map(description => {
                        return (
                            <DetailsRowWrapper key={description[0]}>
                                <DetailsTitle>{description[0]}</DetailsTitle>
                                <DetailesDescription>{description[1]}</DetailesDescription>
                            </DetailsRowWrapper>
                        )
                    })}

                    <CartButton type='button'>add to cart</CartButton>
                </BookDetailsList>
            </DetailsWrapper>
        </StyledBook>
    )
}
