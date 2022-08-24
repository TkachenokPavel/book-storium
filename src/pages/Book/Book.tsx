import { useNavigate } from 'react-router-dom'
import { ArrowBack } from '../../assets'

export const Book = () => {
    const navigate = useNavigate();

    const handleArrow = () => {
        navigate(-1);
    }

    return (
        <ArrowBack onClick={handleArrow} style={{ cursor: 'pointer' }} />
    )
}
