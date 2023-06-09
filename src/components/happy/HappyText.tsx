import React from "react";
import styled from "styled-components/native";

interface HappyTextProps {
  happy: string;
  setHappy: React.Dispatch<React.SetStateAction<string>>;
}

const HappyText = ({ happy, setHappy }: HappyTextProps) => {
  const onChangeText = (text: string) => {
    setHappy(text);
  };

  return (
    <>
      <Wrapper>
        <HappyDesc>
          이번 활동을 하면서 느낀 점을 짧게 쓰고,{"\n"}방금 한 챌린지가 행복감을 키우는 데에{"\n"}
          얼마나 도움이 되었는지 알려주세요.
        </HappyDesc>
        <HappyForm>
          <HappyTextInput
            placeholder="텍스트를 입력하세요."
            onChangeText={(text: string) => onChangeText(text)}
            value={happy}
            multiline
          />
        </HappyForm>
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
  gap: 40px;
  padding: 0 10px;
`;

const HappyDesc = styled.Text`
  font-size: 16px;
  font-family: "Regular";
  text-align: center;
  line-height: ${(props) => props.theme.font.title};
`;

const HappyForm = styled.View`
  width: 100%;
  height: 180px;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  padding: 20px;
  border-radius: 10px;
`;

const HappyTextInput = styled.TextInput`
  font-size: 16px;
  line-height: ${(props) => props.theme.font.subtitle};
`;
