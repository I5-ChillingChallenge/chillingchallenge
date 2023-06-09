import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import { getProfileImage } from "@utils/ProfileImage";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

interface ImageUploaderProps {
  setImageSelected: (imageUri: string) => void;
  uploaderType: string;
}

const ImageUploader = ({ setImageSelected, uploaderType }: ImageUploaderProps) => {
  const [image, setImage] = useState<string | undefined>(undefined); // state: 기존 프로필 이미지 주소
  const [imageUri, setImageUri] = useState<string | undefined>(undefined); // state: 이미지 URI
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false); // state: 이미지 업로드 여부

  // 이미지 피커 작동 함수
  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedAsset = result.assets[0];

      const manipResult = await manipulateAsync(
        selectedAsset.uri,
        [{ resize: { width: 500, height: 500 } }],
        { compress: 1, format: SaveFormat.JPEG }
      );

      setImageUri(manipResult.uri);
      setImageSelected(manipResult.uri);
      setIsImageUploaded(true);
    }
  };

  useEffect(() => {
    const loadImage = async () => {
      const originalImage = await getProfileImage();
      setImage(originalImage);
    };
    if (uploaderType === "PROFILE") {
      loadImage();
    }
  }, []);

  return (
    <UploaderContainer>
      <PreviewImageContainer activeOpacity={0.8} onPress={() => handleSelectImage()}>
        {isImageUploaded === false ? <></> : <UploadText>📷 사진 변경하기</UploadText>}
        <PreviewImageView uploaderType={uploaderType}>
          <PreviewImage source={{ uri: imageUri || image }} />
        </PreviewImageView>
      </PreviewImageContainer>
    </UploaderContainer>
  );
};

export default ImageUploader;

// styled
const UploaderContainer = styled.View`
  width: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PreviewImageContainer = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PreviewImageView = styled.View<{ uploaderType: string }>`
  width: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "150px" : "300px"};
  height: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "150px" : "300px"};
  border: 1px solid ${(props) => props.theme.color.borderColor};
  border-radius: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "150px" : "8px"};
  overflow: hidden;
`;

const PreviewImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadText = styled.Text`
  font-size: 14px;
  font-family: "Medium";
  text-align: center;
`;
