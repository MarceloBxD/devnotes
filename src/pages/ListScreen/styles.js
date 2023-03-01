import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

export const Texto = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const NoNotesImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const NoNotesText = styled.Text`
  font-size: 17px;
  color: #fff;
`;
