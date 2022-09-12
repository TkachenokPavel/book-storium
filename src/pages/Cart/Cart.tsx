import { useNavigate } from 'react-router-dom';
import { CartList, ConfirmButton, ConfirmWrapper, EmptyCart, StyledCart, Total, TotalPrice, TotalWrapper } from './styles';
import { ArrowBack } from "../../assets";
import { CSSProperties, useEffect } from 'react';
import { CartItem, Title } from '../../components';
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
            <CartList>
                {cartItems.length > 0
                    ? (<>
                        {cartItems.map(cartItem => {
                            return <CartItem cartItem={cartItem} key={cartItem.isbn13} />
                        })}
                        <ConfirmWrapper>
                            <TotalWrapper>
                                <Total>Total:</Total>
                                <TotalPrice>{total}</TotalPrice>
                            </TotalWrapper>
                            <ConfirmButton>check out</ConfirmButton>
                        </ConfirmWrapper>
                    </>)
                    : <EmptyCart>Your cart is empty</EmptyCart>}
            </CartList>
        </StyledCart>
    )
}
