import React, {useLayoutEffect} from 'react';
import {Image, TouchableHighlight} from 'react-native';

import {Container, Texto} from './styles';
import {useNavigation} from '@react-navigation/native';

const EditNoteScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/close.png')}
              style={{width: 30, height: 30, marginLeft: 10}}
            />
          </TouchableHighlight>
        );
      },
    });
  }, []);

  return (
    <Container>
      <Texto>Edit Note Screen</Texto>
    </Container>
  );
};

export default EditNoteScreen;
