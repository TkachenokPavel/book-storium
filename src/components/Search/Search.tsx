import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce, useInput } from "../../hooks";
import { removeState, setSearchValue } from "../../store/features/search/searchSlice";
import { useAppDispatch } from "../../store";
import { validateSearchValue } from "../../utils";
import { Input, SearchButton, StyledSearch } from "./styles";

interface IProps {
  handleClose: () => void;
}

export const Search = ({ handleClose }: IProps) => {
  const searchRequest = useInput();
  const debouncedValue = useDebounce(validateSearchValue(searchRequest.value), 1000);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    handleClose();
    navigate("/search/1");
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(setSearchValue(debouncedValue));
    } else {
      dispatch(removeState());
    }
  }, [debouncedValue, dispatch]);

  return (
    <StyledSearch>
      <Input type="text" placeholder="Search..." name="search" {...searchRequest} />
      <SearchButton type="button" onClick={handleSearch} />
    </StyledSearch>
  );
};
