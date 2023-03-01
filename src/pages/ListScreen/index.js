import React, {useLayoutEffect} from 'react';
import {Image, TouchableHighlight} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  NoNotesImage,
  NoNotesText,
  NoNotes,
  NotesList,
} from './styles';

import NoteItem from '../../components/NoteItem';

const ListScreen = () => {
  const navigation = useNavigation();
  const list = useSelector(state => state.notes.list);

  const handleNotePress = index => {
    navigation.navigate('EditNote', {
      key: index,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Minhas Notas',
      headerRight: () => (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditNote')}>
          <Image
            source={require('../../assets/add.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        </TouchableHighlight>
      ),
    });
  }, []);
  return (
    <Container>
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/error.png')} />
          <NoNotesText>Nenhuma nota encontrada!</NoNotesText>
        </NoNotes>
      )}
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Container>
  );
};

export default ListScreen;
