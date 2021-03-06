import * as React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {SerieContext} from '../../context/SerieContext';
import Header from './components/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {SeriesListHorizontal} from '../../components/SeriesListHorizontal/SeriesListHorizontal';
import {Container, Title, ContentText, SubTitle} from './styles';
import {ISerie} from '../../model/Serie';

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie[]) => void;
}

export const Home: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);
  let actionSeries: ISerie[];


  console.log(actionSeries.length);
  const page1 = series.slice(0, 175);
  const page2 = series.slice(175, 250);
  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate(data: ISerie[]) {
    navigation.navigate('SeeAll', data);
  }
  const numberIdSerie = Math.floor(Math.random() * series.length);
  return (
    <Container>
      <ScrollView>
        <Header data={series[numberIdSerie]} />
        <ContentText>
          <Title>Action</Title>
          <SubTitle onPress={() => handleNavigate(page1)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={series}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Drama</Title>
          <SubTitle onPress={() => handleNavigate(page2)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page2}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Romance</Title>
          <SubTitle onPress={() => handleNavigate(page2)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page2}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Horror</Title>
          <SubTitle onPress={() => handleNavigate(page2)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page2}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Music</Title>
          <SubTitle onPress={() => handleNavigate(page2)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page2}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
      </ScrollView>
    </Container>
  );
};
