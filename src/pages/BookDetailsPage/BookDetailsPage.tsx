import { CSSProperties, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { ArrowBackIcon } from "../../assets";
import { BookDetails, Title } from "../../components";
import { ErrorMassage } from "../../components/BooksList/styles";
import { fetchBookDetails, getBookDetails, useAppDispatch, useAppSelector } from "../../store";
import { StyledBookPage } from "./styles";

const override: CSSProperties = {
  marginTop: "100px",
};

const arrowStyles: CSSProperties = {
  cursor: "pointer",
  alignSelf: "self-start",
  margin: "20px 0",
};

export const BookDetailsPage = () => {
  const navigate = useNavigate();
  const { isbn = "" } = useParams();

  const dispatch = useAppDispatch();
  const { book, error, isLoading } = useAppSelector(getBookDetails);

  const { title } = book;

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
  }, [isbn, dispatch]);

  if (isLoading) {
    return (
      <StyledBookPage>
        <CircleLoader loading={isLoading} cssOverride={override} size={100} />
      </StyledBookPage>
    );
  }

  if (error) {
    return <ErrorMassage>Sorry, {error}</ErrorMassage>;
  }

  return (
    <StyledBookPage>
      <ArrowBackIcon onClick={handleBack} style={arrowStyles} stroke="white" />
      <Title title={title} />
      <BookDetails />
    </StyledBookPage>
  );
};
