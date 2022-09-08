import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { removeSearchValue, setSearchValue } from '../../store/features/search/searchSlice';
import { useAppDispatch } from '../../store/hooks';
import { validateSearchValue } from '../../utils';
import { Input, SearchButton, StyledSearch } from './styles'

export const Search = () => {
    const searchRequest = useInput();
    const debouncedValue = useDebounce(validateSearchValue(searchRequest.value), 1000);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        navigate(`/search/1`)
    }

    useEffect(() => {
        if (debouncedValue) {
            dispatch(setSearchValue(debouncedValue))
        } else {
            dispatch(removeSearchValue())
        }
    }, [debouncedValue, dispatch])

    return (
        <StyledSearch >
            <Input type='text'
                placeholder='Search...'
                name='search'
                {...searchRequest} />
            <SearchButton type='button' onClick={handleSearch} />
        </StyledSearch>
    )
}
