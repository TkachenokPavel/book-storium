import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { ROUTE } from '../../router/routes';
import { validateSearchValue } from '../../utils';
import { StyledSearch } from './styles'

export const Search = () => {
    const searchValue = useInput();
    const debouncedValue = useDebounce(validateSearchValue(searchValue.value), 1000);
    const navigate = useNavigate()

    useEffect(() => {
        if (debouncedValue) {
            navigate(ROUTE.SEARCH)
        } else {
            navigate(ROUTE.HOME)
        }
    }, [debouncedValue, navigate])

    return (
        <StyledSearch
            type='text'
            placeholder='Search...'
            name='search'
            {...searchValue} />
    )
}
