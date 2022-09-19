import { useEffect } from "react";
import { BooksList, Title } from "../../components";
import { fetchSearchedBooks, getSearch, useAppDispatch, useAppSelector } from "../../store";
import {
  ControlerWrapper,
  EmptyList,
  Next,
  NextText,
  PageCounter,
  Previous,
  PrevText,
  StyledSearchPage,
} from "./styles";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { getPagesCount } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

export const SearchPage = () => {
  const { searchValue, searchResponse, isLoading, error } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { page = "1" } = useParams();
  const navigate = useNavigate();

  const handlePrev = () => {
    if (searchValue && +page > 1) {
      navigate(`/search/${+page - 1}`);

      dispatch(
        fetchSearchedBooks({
          searchValue,
          page: (+page - 1).toString(),
        }),
      );
    }
  };

  const handleNext = () => {
    if (searchValue && !!searchResponse.total && getPagesCount(searchResponse.total) > +page) {
      navigate(`/search/${+page + 1}`);

      dispatch(
        fetchSearchedBooks({
          searchValue,
          page: (+page + 1).toString(),
        }),
      );
    }
  };

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
      <ControlerWrapper>
        <Previous onClick={handlePrev}>
          <GrLinkPrevious
            style={{
              paddingTop: "5px",
            }}
          />
          <PrevText>Prev</PrevText>
        </Previous>
        {searchResponse.total ? (
          <PageCounter>
            Page {page} of {getPagesCount(searchResponse.total)}
          </PageCounter>
        ) : null}
        <Next onClick={handleNext}>
          <NextText>Next</NextText>
          <GrLinkNext
            style={{
              paddingTop: "5px",
            }}
          />
        </Next>
      </ControlerWrapper>
    </StyledSearchPage>
  );
};
