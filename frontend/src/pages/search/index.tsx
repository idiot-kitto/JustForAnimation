import styled from 'styled-components';
import SearchIcon from './search.svg';

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const SearchBoxWrapper = styled.div`
  position: relative;
  width: 65px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  input {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px 25px;
    outline: none;
    font-size: 1.1em;
    color: transparent;
    background: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), 15px 15px 15px rgba(0, 0, 0, 0.1), 20px 20px 15px rgba(0, 0, 0, 0.1),
      30px 30px 15px rgba(0, 0, 0, 0.1), inset 1px 1px 2px #fff;

    &::placeholder {
      color: transparent;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    z-index: 1;
    filter: blur(1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    z-index: 1;
    filter: blur(1px);
  }

  &:hover {
    width: 400px;

    input::placeholder,
    input {
      color: #555;
    }
  }

  img {
    position: absolute;
    right: 20px;
    color: #555;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const SearchBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  width: calc(100% + 50px);
  height: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent, transparent);
  transform-origin: top;
  transform: skew(45deg);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: cfd1e1;
    z-index: 1;
  }
`;

const Search = () => {
  return (
    <SearchBoxContainer>
      <SearchBoxWrapper>
        <SearchBoxShadow></SearchBoxShadow>
        <input placeholder="Search Anything You Want..." />
        <img alt="search" width="24" height="24" src={SearchIcon} />
      </SearchBoxWrapper>
    </SearchBoxContainer>
  );
};

export default Search;
