import styled, { keyframes } from 'styled-components';

import useAlertModal from '../../hooks/useAlertModal';

const ButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
`;

const Animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ButtonContainer = styled.a<{ color: string; value: number }>`
  position: relative;
  padding: 20px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  margin: 40px;
  transition: 1s;
  text-decoration: none;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0004);

  &:hover {
    background: ${props => props.color};
    box-shadow: 0 0 10px ${props => props.color}, 0 0 30px ${props => props.color}, 0 0 60px ${props => props.color},
      0 0 100px ${props => props.color};

    &::before {
      width: 120%;
    }

    &::after {
      background: ${props => props.color};
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 400%;
    background: ${props => props.color};
    transition: 1s;
    animation: ${Animation} 2s linear infinite;
    animation-delay: calc(0.33s * ${props => props.value});
  }

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: #0e1538;
    transition: 0.5s;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  font-size: 2em;
  color: #fff;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

const Button = () => {
  const showAlert = useAlertModal();

  return (
    <ButtonBackground>
      <ButtonContainer href="#" onClick={() => showAlert('Button Clicked!', '#ff22bb')} color="#ff22bb" value={0}>
        <ButtonText>Button</ButtonText>
      </ButtonContainer>
      <ButtonContainer href="#" onClick={() => showAlert('Button Clicked!', '#00ccff')} color="#00ccff" value={1}>
        <ButtonText>Button</ButtonText>
      </ButtonContainer>
      <ButtonContainer href="#" onClick={() => showAlert('Button Clicked!', '#22e622')} color="#22e622" value={2}>
        <ButtonText>Button</ButtonText>
      </ButtonContainer>
    </ButtonBackground>
  );
};

export default Button;
