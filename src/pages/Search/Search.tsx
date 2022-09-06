import { useEffect } from "react"
import { BooksList, Title } from "../../components";
import { decrementPage, fetchSearchedBooks } from "../../store/features/search/searchSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getSearch } from "../../store/selectors/searchSelector";
import { ControlerWrapper, Next, NextText, Previous, PrevText, StyledSearch } from "./styles";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'

export const Search = () => {
    const { searchParams, searchResponse, isLoading, error } = useAppSelector(getSearch);
    const dispatch = useAppDispatch();

    const handlePrev = () => {
        if (!!searchParams.page && searchParams.page > 1) {
            dispatch(decrementPage(searchParams.page - 1))
        }
    }

    const handleNext = () => {
        if (!!searchParams.page) {
            dispatch(decrementPage(searchParams.page + 1))
        }
    }

    useEffect(() => {
        if (searchParams.searchValue) {
            dispatch(fetchSearchedBooks({
                searchValue: searchParams.searchValue,
                page: searchParams.page
            }))
        }
    }, [dispatch, searchParams])

    return (
        <StyledSearch>
            <Title title={`'${searchParams.searchValue ? searchParams.searchValue : ' '}' search results`} />
            <BooksList newBooks={searchResponse.books} isLoading={isLoading} errorMessage={error} />
            <ControlerWrapper>
                <Previous onClick={handlePrev}>
                    <GrLinkPrevious style={{
                        paddingTop: '5px'
                    }} />
                    <PrevText>Prev</PrevText>
                </Previous>
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
