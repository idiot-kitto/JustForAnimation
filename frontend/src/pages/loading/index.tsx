import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-reflect: below 1px linear-gradient(#0001, #0004);
`;

const Animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #0d2323;
  animation: ${Animation} 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
    background-size: 100px 180px;
    background-repeat: no-repeat;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #00fff9;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9, 0 0 40px #00fff9, 0 0 50px #00fff9,
      0 0 60px #00fff9, 0 0 70px #00fff9, 0 0 80px #00fff9, 0 0 90px #00fff9, 0 0 100px #00fff9;
  }
`;

const LoaderSpan = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #000;
  border-radius: 50%;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader>
        <LoaderSpan></LoaderSpan>
      </Loader>
    </LoadingContainer>
  );
};

export default Loading;
