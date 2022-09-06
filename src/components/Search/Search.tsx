import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { ROUTE } from '../../router/routes';
import { removeSearchValue, setSearchValue } from '../../store/features/search/searchSlice';
import { useAppDispatch } from '../../store/hooks';
import { validateSearchValue } from '../../utils';
import { Input, SearchButton, StyledSearch } from './styles'

export const Search = () => {
    const searchValue = useInput();
    const debouncedValue = useDebounce(validateSearchValue(searchValue.value), 1000);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        navigate(ROUTE.SEARCH)
    }

    useEffect(() => {
        if (debouncedValue) {
            dispatch(setSearchValue({
                searchValue: debouncedValue,
                page: 1
            }))
        } else {
            dispatch(removeSearchValue())
        }
    }, [debouncedValue, dispatch])

    return (
        <StyledSearch >
            <Input type='text'
                placeholder='Search...'
                name='search'
                {...searchValue} />
            <SearchButton type='button' onClick={handleSearch} />
        </StyledSearch>
    )
}
