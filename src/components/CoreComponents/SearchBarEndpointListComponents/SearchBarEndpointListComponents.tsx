import { SearchWrapper } from "./SearchBarEndpointListComponents.style";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <SearchWrapper>
      <div className="icon">🔍</div>
      <input
        type="text"
        placeholder="Search endpoints..."
        value={value}
        onChange={onChange}
        className="input"
      />
    </SearchWrapper>
  );
}

export default SearchBar;
