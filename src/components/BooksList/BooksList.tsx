import { CSSProperties } from "react";
import { IBookShort } from "../../types/types";
import { Card } from "../Card";
import { ErrorMassage, StyledBooksList } from "./styles";
import CircleLoader from "react-spinners/CircleLoader";
import { Color } from "../../ui";

interface IProps {
  newBooks: IBookShort[];
  isLoading: boolean;
  errorMessage: string | null;
}

const override: CSSProperties = {
  display: "block",
  marginTop: "300px",
  marginBottom: "300px",
};

export const BooksList = ({ newBooks, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <CircleLoader loading={isLoading} cssOverride={override} size={100} color={Color.BLACK} />
    );
  }

  if (errorMessage) {
    return <ErrorMassage>Sorry, {errorMessage}</ErrorMassage>;
  }

  return (
    <StyledBooksList>
      {newBooks.map((book) => (
        <Card book={book} key={book.isbn13} />
      ))}
    </StyledBooksList>
  );
};
