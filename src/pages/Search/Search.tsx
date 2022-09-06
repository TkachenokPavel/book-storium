import { useEffect } from "react"
import { fetchSearchedBooks } from "../../store/features/search/searchSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getSearch } from "../../store/selectors/searchSelector";

export const Search = () => {
    const { searchParams, searchResponse } = useAppSelector(getSearch);
    const dispatch = useAppDispatch();
    console.log(searchResponse.books)

    useEffect(() => {
        dispatch(fetchSearchedBooks({
            searchValue: searchParams.searchValue,
            page: 2
        }))
    }, [dispatch, searchParams])

    return (
        <div>Search</div>
    )
}
