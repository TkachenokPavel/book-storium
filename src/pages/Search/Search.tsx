import { useEffect } from "react"
import { BooksList, Title } from "../../components";
import { fetchSearchedBooks } from "../../store/features/search/searchSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getSearch } from "../../store/selectors/searchSelector";
import { ControlerWrapper, EmptyList, Next, NextText, PageCounter, Previous, PrevText, StyledSearch } from "./styles";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { getPagesCount } from "../../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";

export const Search = () => {
    const { searchValue, searchResponse, isLoading, error } = useAppSelector(getSearch);
    const dispatch = useAppDispatch();
    const { page = '1' } = useParams();
    const navigate = useNavigate();

    const handlePrev = () => {
        if (searchValue && +page > 1) {
            navigate(`/search/${+page - 1}`)

            dispatch(fetchSearchedBooks({
                searchValue,
                page: (+page - 1).toString()
            }))
        }
    };

    const handleNext = () => {
        if (searchValue && !!searchResponse.total && getPagesCount(searchResponse.total) > +page) {
            navigate(`/search/${+page + 1}`)

            dispatch(fetchSearchedBooks({
                searchValue,
                page: (+page + 1).toString()
            }))
        }
    };

    useEffect(() => {
        if (searchValue) {
            dispatch(fetchSearchedBooks({
                searchValue,
                page
            }))
        }
    }, [dispatch, searchValue, page]);

    return (
        <StyledSearch>
            <Title title={`'${searchValue ? searchValue : ' '}' search results`} />
            {searchValue ? <BooksList newBooks={searchResponse.books} isLoading={isLoading} errorMessage={error} />
                : <EmptyList>No results were found for your search</EmptyList>}
            <ControlerWrapper>
                <Previous onClick={handlePrev}>
                    <GrLinkPrevious style={{
                        paddingTop: '5px'
                    }} />
                    <PrevText>Prev</PrevText>
                </Previous>
                {searchResponse.total
                    ? <PageCounter>Page {page} of {getPagesCount(searchResponse.total)}</PageCounter>
                    : null}
                <Next onClick={handleNext}>
                    <NextText>Next</NextText>
                    <GrLinkNext style={{
                        paddingTop: '5px'
                    }} />
                </Next>
            </ControlerWrapper>
        </StyledSearch>
    )
}
