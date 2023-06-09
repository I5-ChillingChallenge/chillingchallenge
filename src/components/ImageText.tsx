import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserStore from "@store/store";
import { API } from "api/token";
import { getUserInfoAPI } from "api/user";
import React, { useEffect } from "react";
import { ImageURISource } from "react-native";
import styled from "styled-components/native";

interface ImageTextProps {
  text?: string;
  image: ImageURISource;
  isUser?: boolean;
}

const ImageText = ({ text, image, isUser = false }: ImageTextProps) => {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    (async () => {
      const code = await AsyncStorage.getItem("user-code");

      if (!user.nickname) {
        const response = await getUserInfoAPI(JSON.parse(code!));
        setUser({ email: "", nickname: response.nickname });
      }
    })();
  }, []);

  return (
    <SubTitleContainer>
      {isUser ? (
        <SubTitle>{`${user.nickname}님, 이만큼이나 해냈어요!`}</SubTitle>
      ) : (
        <SubTitle>{text}</SubTitle>
      )}
      <SubTitleImage source={image}></SubTitleImage>
    </SubTitleContainer>
  );
};

export default ImageText;

const SubTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 35px;
  gap: 5px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-family: "Regular";
  color: #696969;
`;

const SubTitleImage = styled.Image`
  width: 24px;
  height: 24px;
  object-fit: scale-down;
`;
