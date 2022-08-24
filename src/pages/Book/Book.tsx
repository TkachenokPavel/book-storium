import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from '../../assets'
import { bookAPI } from '../../services/bookApi/bookApi';
import { IBookDetails } from '../../types/types';

export const Book = () => {
    const navigate = useNavigate();
    const { isbn } = useParams();
    const [book, setBook] = useState<IBookDetails | null>(null);

    const handleArrow = () => {
        navigate(-1);
    }

    useEffect(() => {
        bookAPI.getBook(isbn)
            .then(result => setBook(result))
    }, [isbn])

    return (
        <ArrowBack onClick={handleArrow} style={{ cursor: 'pointer' }} />
    )
}
