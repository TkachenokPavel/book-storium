import { decrease, increase, removeItem, useAppDispatch } from "../../store";
import {
  Amount,
  DecreaseButton,
  DecreaseButtonImage,
  IncreaseButton,
  IncreaseButtonImage,
  StyledCounter,
} from "./styles";

interface IProps {
  isbn13: string;
  amount: number;
}

export const Counter = ({ isbn13, amount }: IProps) => {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    if (amount === 1) {
      dispatch(removeItem(isbn13));
      return;
    }
    dispatch(decrease(isbn13));
  };
  const handleIncrease = () => {
    dispatch(increase(isbn13));
  };

  return (
    <StyledCounter>
      <DecreaseButton type="button" onClick={handleDecrease}>
        <DecreaseButtonImage stroke="white" />
      </DecreaseButton>
      <Amount>{amount}</Amount>
      <IncreaseButton type="button" onClick={handleIncrease}>
        <IncreaseButtonImage stroke="white" />
      </IncreaseButton>
    </StyledCounter>
  );
};
