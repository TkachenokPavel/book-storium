import { CSSProperties, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CircleLoader from 'react-spinners/CircleLoader';
import { ArrowBack } from '../../assets'
import { Title } from '../../components';
import { ErrorMassage } from '../../components/BooksList/styles';
import { bookAPI } from '../../services/bookApi/bookApi';
import { IBookDetails } from '../../types/types';
import { getAuthor } from '../../utils';
import { BookDetails, BookImage, CartButton, DetailesDescription, DetailsPriceWrapper, DetailsRowWrapper, DetailsTitle, DetailsWrapper, Price, Rating, StyledBook } from './styles';

const override: CSSProperties = {
    marginTop: "100px",
}

export const Book = () => {
    const navigate = useNavigate();
    const { isbn } = useParams();
    const [book, setBook] = useState<IBookDetails>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleArrow = () => {
        navigate(-1);
    }

    useEffect(() => {
        bookAPI.getBook(isbn)
            .then(result => {
                setIsLoading(false);
                setBook(result)
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage(error.message)
            });
    }, [isbn])

    if (isLoading) {
        return (
            <StyledBook>
                <CircleLoader loading={isLoading} cssOverride={override} size={100} />
            </StyledBook>
        )
    } else if (book) {
        const detailedDescription = [
            ['Authors', getAuthor(book.authors)],
            ['Publisher', book.publisher],
            ['Language', book.language],
            ['Year', book.year],
        ]

        return (
            <StyledBook>
                <ArrowBack onClick={handleArrow} style={{
                    cursor: 'pointer',
                    alignSelf: 'self-start',
                    margin: "20px 0",
                }} />
                <Title title={book.title} />
                <DetailsWrapper>
                    <BookImage src={book.image} />
                    <BookDetails>
                        <DetailsPriceWrapper>
                            <Price>{book.price}</Price>
                            <Rating>{book.rating}</Rating>
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
                    </BookDetails>
                </DetailsWrapper>
            </StyledBook>
        )
    } else {
        return (
            <ErrorMassage>Sorry, {errorMessage}</ErrorMassage>
        )

    }
}
