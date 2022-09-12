import { useNavigate } from 'react-router-dom';
import { StyledCart } from './styles';
import { ArrowBack } from "../../assets";
import { CSSProperties } from 'react';
import { Title } from '../../components';

const arrowStyles: CSSProperties = {
    cursor: 'pointer',
    alignSelf: 'self-start',
    margin: "20px 0",
}

export const Cart = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    return (
        <StyledCart>
            <ArrowBack onClick={handleBack} style={arrowStyles} />
            <Title title='your cart' />
        </StyledCart>
    )
}
