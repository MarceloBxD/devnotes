import React from 'react';
import {Box, Title} from './styles';

export default ({data, index, onPress}) => {
  return (
    <Box underlayColor="#ddd" onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
};
