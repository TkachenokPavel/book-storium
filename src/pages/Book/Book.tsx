import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets'
import { Title } from '../../components';
import { bookAPI } from '../../services/bookApi/bookApi';
import { IBookDetails } from '../../types/types';
import { StyledBook } from './styles';

export const Book = () => {
    const navigate = useNavigate();
    const { isbn } = useParams();
    const [book, setBook] = useState<IBookDetails>();

    const handleArrow = () => {
        navigate(-1);
    }

    useEffect(() => {
        bookAPI.getBook(isbn)
            .then(result => setBook(result))
    }, [isbn])

    return (
        <StyledBook>
            <ArrowBack onClick={handleArrow} style={{ cursor: 'pointer' }} />
            <Title title={book?.title} />

        </StyledBook>
    )
}
