import { useEffect } from "react";
import { BooksList, ControllerPagination, Title } from "../../components";
import { fetchSearchedBooks, getSearch, useAppDispatch, useAppSelector } from "../../store";
import { EmptyList, StyledSearchPage } from "./styles";
import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const { searchValue, searchResponse, isLoading, error } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { page = "1" } = useParams();

  useEffect(() => {
    if (searchValue) {
      dispatch(
        fetchSearchedBooks({
          searchValue,
          page,
        }),
      );
    }
  }, [dispatch, searchValue, page]);

  return (
    <StyledSearchPage>
      <Title title={`'${searchValue ? searchValue : " "}' search results`} />
      {searchResponse.total !== "0" ? (
        <BooksList newBooks={searchResponse.books} isLoading={isLoading} errorMessage={error} />
      ) : (
        <EmptyList>No results were found for your search</EmptyList>
      )}
      <ControllerPagination />
    </StyledSearchPage>
  );
};
