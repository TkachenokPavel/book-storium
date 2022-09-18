import { useEffect } from "react";
import { BooksList, Title } from "../../components";
import { fetchNewBooks } from "../../store/features/newBooks/newBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNewBooks } from "../../store/selectors/newBooksSelector";
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
