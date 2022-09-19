import { Link } from "react-router-dom";
import { useWindiwSize } from "../../hooks";
import { getCart, removeItem, useAppDispatch, useAppSelector } from "../../store";
import { ICartItem } from "../../types/types";
import { getAuthor } from "../../utils";
import { getItemTotalPrice } from "../../utils";
import { Counter } from "../Counter";
import {
  StyledCartItem,
  Image,
  Title,
  DetailsWrapper,
  Authors,
  PriceAndCounter,
  Price,
  ButtonRemove,
  ButtonImage,
  Separator,
} from "./styles";

interface IProps {
  cartItemIsbn: string;
}

const getCartItemByIsbn = (cartItems: ICartItem[], isbn13: string): ICartItem | undefined => {
  const searchedItem = cartItems.find((item) => item.isbn13 === isbn13);
  if (searchedItem) {
    return searchedItem;
  }
};

export const CartItem = ({ cartItemIsbn }: IProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const { width } = useWindiwSize();

  const currentItem = getCartItemByIsbn(cartItems, cartItemIsbn);

  const handleRemove = () => {
    dispatch(removeItem(cartItemIsbn));
  };

  if (currentItem) {
    return (
      <>
        <StyledCartItem>
          <Link to={`/book/${currentItem.isbn13}`}>
            <Image src={currentItem.image} alt={currentItem.title} />
          </Link>
          <DetailsWrapper>
            <Link to={`/book/${currentItem.isbn13}`}>
              <Title>{currentItem.title}</Title>
            </Link>
            <Authors>{`by ${getAuthor(currentItem.authors)}, ${currentItem.year}`}</Authors>
            <PriceAndCounter>
              <Counter amount={currentItem.amount} isbn13={currentItem.isbn13} />
              <Price>{getItemTotalPrice(currentItem.price, currentItem.amount)}</Price>
            </PriceAndCounter>
          </DetailsWrapper>
          {width && width > 576 ? (
            <ButtonRemove
              type="button"
              onClick={handleRemove}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ButtonImage stroke="white" />
            </ButtonRemove>
          ) : null}
        </StyledCartItem>
        <Separator />
      </>
    );
  }

  return null;
};
