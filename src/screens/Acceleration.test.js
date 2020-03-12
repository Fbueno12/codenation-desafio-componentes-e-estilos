import React from 'react';
import Acceleration from './Acceleration';
import AccelerationItemComponent from '../components/AccelerationItemComponent';
import renderer from 'react-test-renderer';
import { FlatList, Text } from 'react-native';

describe('Acceleration Initial', () => {
  test('Should have the codenation logo', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[0].props.source).toEqual(require('../../assets/codenation.png'));
  })
})