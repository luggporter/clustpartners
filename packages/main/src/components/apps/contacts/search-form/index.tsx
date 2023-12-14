import { StyledForm, StyledInput } from "./style";

const SearchForm = () => {
  return (
    <StyledForm>
      <StyledInput
        id="file-search"
        name="file-search"
        placeholder="Search Contacts"
      />
    </StyledForm>
  );
};

export default SearchForm;
