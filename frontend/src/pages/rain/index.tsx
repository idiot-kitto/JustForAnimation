import styled, { keyframes } from "styled-components";

const RainBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Animation = keyframes`
  0% { transform: translateY(-200px); }
  100% { transform: translateY(calc(100vh + 200px)); }
`;

// Over 200 classes were generated for component styled.div with the id of XXX
// 문제 해결하기

const RainDrop = styled.div`
  position: absolute;
  background: linear-gradient(
    transparent,
    ${() => "#" + Math.round(Math.random() * 0xffffff).toString(16)}
  );
  height: 200px;
  width: ${() => Math.random() * 5}px;
  left: ${() => Math.random() * window.innerWidth}px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  animation-name: ${Animation};
  animation-delay: ${() => Math.random() * -100}s;
  animation-duration: ${() => 1 + Math.random() * 5}s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

const Rain = () => {
  const MakeRain = (RainsNum: number) => {
    const rains = [];
    for (let i = 0; i < RainsNum; ++i) {
      rains.push(<RainDrop key={i} />);
    }
    return rains;
  };

  return <RainBackground>{MakeRain(50)}</RainBackground>;
};

export default Rain;
