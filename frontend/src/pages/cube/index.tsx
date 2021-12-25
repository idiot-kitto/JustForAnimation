import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% { transform: rotateX(-30deg) rotateY(0deg); }
  100% { transform: rotateX(-30deg) rotateY(360deg); }
`;

const CubeContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  left: 37%;
  margin-top: 100px;
  transform-style: preserve-3d;
  animation: ${Animation} 4s linear infinite;
`;

const CubeTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: #222;
  transform-style: preserve-3d;
  transform: rotateX(90deg) translateZ(150px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #0f0;
    transform: translateZ(-380px);
    filter: blur(20px);
    box-shadow: 0 0 120px rgba(0, 255, 0, 0.2), 0 0 200px rgba(0, 255, 0, 0.4),
      0 0 300px rgba(0, 255, 0, 0.6), 0 0 400px rgba(0, 255, 0, 0.8),
      0 0 500px rgba(0, 255, 0, 1);
  }
`;

const CubeDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

const CubeDivSpan = styled.span<{ value: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#151515, #00ec00);
  transform: rotateY(calc(90deg * ${(props) => props.value})) translateZ(150px);
`;

const Cube = () => {
  return (
    <CubeContainer>
      <CubeTop />
      <CubeDiv>
        <CubeDivSpan value={0} />
        <CubeDivSpan value={1} />
        <CubeDivSpan value={2} />
        <CubeDivSpan value={3} />
      </CubeDiv>
    </CubeContainer>
  );
};

export default Cube;
