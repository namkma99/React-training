// ButtonComponent.jsx
import { Button } from "@mui/material";
import styled from "@emotion/styled";

// Styled component using Emotion
const StyledButton = styled(Button)`
  background-color: #e07a5f;
  color: white;
  &:hover {
    background-color: #ba5a3d;
  }
`;

const ButtonComponent = () => {
  return (
    <div>
      <StyledButton variant="contained">Styled MUI Button</StyledButton>
    </div>
  );
};

export default ButtonComponent;
