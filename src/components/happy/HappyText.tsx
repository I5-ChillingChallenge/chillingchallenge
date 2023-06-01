import React from "react";
import styled from "styled-components/native";

interface HappyTextProps {
  happyText: string;
  setHappyText: React.Dispatch<React.SetStateAction<string>>;
};

const HappyText = ({happyText, setHappyText} : HappyTextProps) => {
  const onChangeText = (text: string) => {
    setHappyText(text);
  };

  return (
    <>
      <Wrapper>
        <HappyDesc>
          이번 활동을 하면서 느낀 점을 짧게 쓰고,{"\n"}방금 한 챌린지가 행복감을 키우는 데에{"\n"}얼마나 도움이 되었는지 알려주세요.
        </HappyDesc>
        <HappyTextInput
          placeholder="텍스트를 입력하세요."
          onChangeText={(text: string) => onChangeText(text)}
          value={happyText}
        />
      </Wrapper>
    </>
  );
};

export default HappyText;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HappyDesc = styled.Text`
  font-size: 16px;
  font-family: "Medium";
  text-align: center;
  line-height: 28px;
`;

const HappyTextInput = styled.TextInput`
  width: 100%;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  flex: 1;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 20px;
  align-self: stretch;
`;