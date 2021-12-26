import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  
  height: 20vh;

  a {
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <Header>
      <Link to="/">Home</Link>
      <Link to="/rain">Rain</Link>
      <Link to="/cube">Cube</Link>
      <Link to="/loading">Loading</Link>
    </Header>
  );
};

export default Home;
