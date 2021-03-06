import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {WelcomeContext} from '../../context/WelcomeContext';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../global/styles/colors';
import {ImageBackground, Title, Text, ContentText} from './styles';

const slides = [
  {
    key: '1',
    text: 'The best series information app',
    title: 'Welcome to Met Series',
    image: require('../../assets/1.png'),
  },
  {
    key: '2',
    title: 'Best information',
    text: 'All about that TV series',
    image: require('../../assets/2.png'),
  },
  {
    key: '3',
    title: 'Many curiosities',
    text: 'Discover everything about your favorite series',
    image: require('../../assets/3.png'),
  },
];

interface ScreenNavigationProp {
  navigate: (screem: string) => void;
}

export const Welcome: React.FunctionComponent = () => {
  const {postStatus} = React.useContext(WelcomeContext);
  const navigation = useNavigation<ScreenNavigationProp>();
  const renderItem = ({item}: any) => {
    return (
      <ImageBackground source={item.image}>
        <ContentText>
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </ContentText>
      </ImageBackground>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        dotStyle={{backgroundColor: colors.white}}
        activeDotStyle={{backgroundColor: colors.red}}
        onDone={() => {
          postStatus(true);
          navigation.navigate('MainBottom');
        }}
      />
    </>
  );
};
