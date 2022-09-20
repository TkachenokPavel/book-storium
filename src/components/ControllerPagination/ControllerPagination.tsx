import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, getSearch, useAppDispatch, fetchSearchedBooks } from "../../store";
import { getPagesCount } from "../../utils";
import {
  Next,
  NextText,
  PageCounter,
  Previous,
  PrevText,
  StyledControllerPagination,
} from "./styles";

export const ControllerPagination = () => {
  const { searchValue, searchResponse } = useAppSelector(getSearch);
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

  return (
    <StyledControllerPagination>
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
    </StyledControllerPagination>
  );
};
