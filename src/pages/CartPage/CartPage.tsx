import { useNavigate } from "react-router-dom";
import {
  CartList,
  ConfirmButton,
  ConfirmWrapper,
  EmptyCart,
  StyledCartPage,
  Total,
  TotalPrice,
  TotalWrapper,
} from "./styles";
import { ArrowBackIcon } from "../../assets";
import { CSSProperties, useEffect } from "react";
import { Carousel, CartItem, Title } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { calculateTotals } from "../../store/features/cart/cartSlice";
import { getCart } from "../../store/selectors/cartSelector";

const arrowStyles: CSSProperties = {
  cursor: "pointer",
  alignSelf: "self-start",
  margin: "20px 0",
};

export const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { total, cartItems } = useAppSelector(getCart);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <StyledCartPage>
      <ArrowBackIcon onClick={handleBack} style={arrowStyles} stroke="white" />
      <Title title="your cart" />
      <CartList>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem) => {
              return <CartItem cartItemIsbn={cartItem.isbn13} key={cartItem.isbn13} />;
            })}
            <ConfirmWrapper>
              <TotalWrapper>
                <Total>Total:</Total>
                <TotalPrice>{`$${total?.toFixed(2)}`}</TotalPrice>
              </TotalWrapper>
              <ConfirmButton>check out</ConfirmButton>
            </ConfirmWrapper>
          </>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartList>
      <Carousel />
    </StyledCartPage>
  );
};
