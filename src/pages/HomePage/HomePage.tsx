import { useEffect } from "react";
import { BooksList, Title } from "../../components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "../../store";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const { error, isLoading, books } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledHomePage>
      <Title title="NEW RELEASES BOOKS" />
      <BooksList newBooks={books} isLoading={isLoading} errorMessage={error} />
    </StyledHomePage>
  );
};
