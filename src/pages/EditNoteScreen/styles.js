import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #333;
  flex: 1;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  border-bottom-width: 1px;
  border-color: #ccc;
  padding: 10px;
  font-weight: bold;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  color: #fff;
  padding: 10px;
`;

export const SaveButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const SaveButtonImg = styled.Image`
  width: 30px;
  height: 30px;
`;

export const DeleteButtonImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DeleteButtonText = styled.TouchableHighlight`
  font-size: 15px;
  color: #ff0000;
`;
