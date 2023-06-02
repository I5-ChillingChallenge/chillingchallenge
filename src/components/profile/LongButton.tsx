import React from "react";
import styled from "styled-components/native";


const LongButton = () => {
  return (
    <>
      <ButtonContainer>
        <ButtonText>
          변경하기
        </ButtonText>
      </ButtonContainer>
    </>
  );
};

export default LongButton;

// styled
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "Medium";
`;