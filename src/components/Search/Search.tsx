import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useInput } from '../../hooks/useInput';
import { ROUTE } from '../../router/routes';
import { useAppDispatch } from '../../store/hooks';
import { validateSearchValue } from '../../utils';
import { StyledSearch } from './styles'

export const Search = () => {
    const searchValue = useInput();
    const debouncedValue = useDebounce(validateSearchValue(searchValue.value), 1000);
    const navigate = useNavigate();

    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch()

        if (debouncedValue) {
            navigate(ROUTE.SEARCH)
        }
    }, [debouncedValue])

    return (
        <StyledSearch
            type='text'
            placeholder='Search...'
            name='search'
            {...searchValue} />
    )
}
