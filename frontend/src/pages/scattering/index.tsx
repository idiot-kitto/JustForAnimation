import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% { transform: rotate(0deg); filter: hue-rotate(0deg); }
  100% { transform: rotate(360deg); filter: hue-rotate(360deg);}
`;

const ScatteringBg = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  left: 37%;
  margin-top: 100px;

  &:hover span {
    &::before {
      box-shadow: 0 0 20px #00efff, -200px -200px 0 #00efff, -200px -200px 20px #00efff, 200px 200px 0 #00efff,
        200px 200px 20px #00efff, 200px -200px 0 #00efff, 200px -200px 20px #00efff, -200px 200px 0 #00efff,
        -200px 200px 20px #00efff;
      transform-origin: 250px;
    }
  }
`;

const ScatteringSpan = styled.span<{ value: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * ${props => props.value}));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    border: 4px solid #00efff;
    box-sizing: border-box;
    box-shadow: 0 0 20px #00efff, -30px -30px 0 #00efff, -30px -30px 20px #00efff, 30px 30px 0 #00efff,
      30px 30px 20px #00efff, 30px -30px 0 #00efff, 30px -30px 20px #00efff, -30px 30px 0 #00efff,
      -30px 30px 20px #00efff;
    animation: ${Animation} 5s linear infinite;
    animation-delay: calc(-0.25s * ${props => props.value});
    transform-origin: 20px;
    transition: 2s;
  }
`;

const Scattering = () => {
  const MakeCircle = (CirclesNum: number) => {
    const circles = [];
    for (let i = 1; i <= CirclesNum; ++i) circles.push(<ScatteringSpan key={i} value={i} />);
    return circles;
  };

  return <ScatteringBg>{MakeCircle(10)}</ScatteringBg>;
};

export default Scattering;
