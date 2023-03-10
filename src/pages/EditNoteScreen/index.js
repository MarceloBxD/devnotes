import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImg,
  DeleteButtonText,
} from './styles';
import {TouchableHighlight} from 'react-native-gesture-handler';

const EditNoteScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  const handleDeleteNote = () => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {key: route.params.key},
    });
    navigation.goBack();
  };

  const handleSaveButton = () => {
    if (title != '' && body != '') {
      if (status == 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {key: route.params.key, title, body},
        });
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body},
        });
      }
      navigation.goBack();
    } else {
      alert('Preencha todos os campos!');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <SaveButton
            underlayColor="transparent"
            onPress={() => navigation.goBack()}>
            <SaveButtonImg
              source={require('../../assets/close.png')}
              style={{width: 30, height: 30, marginLeft: 10}}
            />
          </SaveButton>
        );
      },
      headerRight: () => {
        return (
          <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
            <SaveButtonImg source={require('../../assets/save.png')} />
          </SaveButton>
        );
      },
      title: status == 'new' ? 'Nova Anota????o' : 'Editar Anota????o',
    });
  }, [title, body, status]);

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={t => setTitle(t)}
        cursorColor="blue"
        autoFocus={true}
        placeholderTextColor="#ccc"
        placeholder="T??tulo"
      />
      <BodyInput
        value={body}
        onChangeText={t => setBody(t)}
        placeholderTextColor="#ccc"
        cursorColor="blue"
        multiline={true}
        textAlignVertical="top"
        placeholder="Descri????o"
      />
      {status == 'edit' && (
        <SaveButton
          underlayColor="transparent"
          style={{
            alignItems: 'flex-end',
            padding: 20,
          }}
          onPress={handleDeleteNote}>
          <>
            <Text style={{marginRight: 40}}>Delete</Text>
            <SaveButtonImg
              style={{marginRight: 30}}
              source={require('../../assets/arrow.png')}
            />
            <SaveButtonImg source={require('../../assets/remove.png')} />
          </>
        </SaveButton>
      )}
    </Container>
  );
};

export default EditNoteScreen;
