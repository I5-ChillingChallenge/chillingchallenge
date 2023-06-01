import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

interface ImageUploaderProps {
  setImageSelected: (imageUri: string) => void;
  uploaderType: string;
}

const ImageUploader = ({ setImageSelected, uploaderType }: ImageUploaderProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

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
      await setImageUri(selectedAsset.uri);
      setImageSelected(selectedAsset.uri);
      setIsImageUploaded(true);
      console.log("imageUri: ", imageUri);
    }
  };

  return (
    <UploaderContainer>
      <PreviewImageContainer activeOpacity={0.8} onPress={() => handleSelectImage()}>
        {isImageUploaded === false ? <></> : <UploadText>📷 사진 변경하기</UploadText>}
        <PreviewImage source={{ uri: imageUri! }} uploaderType={uploaderType} />
      </PreviewImageContainer>
    </UploaderContainer>
  );
};

export default ImageUploader;

// styled
const UploaderContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`;

const PreviewImageContainer = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PreviewImage = styled.Image`
  width: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "100px" : "100%"};
  height: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "100px" : "100%"};
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props: { uploaderType: string }) =>
    props.uploaderType === "PROFILE" ? "100px" : "8px"};
`;

const UploadText = styled.Text`
  font-size: 14px;
  font-family: "Medium";
  text-align: center;
`;
