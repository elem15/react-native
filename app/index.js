import { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import Searchbyjobs from '../components/home/search/Searchbyjobs';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: ""
        }}
      >
      </Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => router.push(`search/${searchTerm}`)} />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default Home;
