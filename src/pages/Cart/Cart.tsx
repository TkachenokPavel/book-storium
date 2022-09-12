import { useNavigate } from 'react-router-dom';
import { StyledCart } from './styles';
import { ArrowBack } from "../../assets";
import { CSSProperties, useEffect } from 'react';
import { Title } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { calculateTotals } from '../../store/features/cart/cartSlice';
import { getCart } from '../../store/selectors/cartSelector';

const arrowStyles: CSSProperties = {
    cursor: 'pointer',
    alignSelf: 'self-start',
    margin: "20px 0",
}

export const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { total, cartItems, amount } = useAppSelector(getCart);

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    return (
        <StyledCart>
            <ArrowBack onClick={handleBack} style={arrowStyles} />
            <Title title='your cart' />
        </StyledCart>
    )
}
