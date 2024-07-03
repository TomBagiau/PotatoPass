import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">

          <Image 
            source={images.logoPotato}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <CustomButton
            title="Jouer" 
            handlePress={() => router.push('/players')}
            containerStyles="w-full mt-7"
            textStyles="text-3xl"
          />

          <CustomButton
            title="Règles" 
            handlePress={() => router.push('/rules')}
            containerStyles="w-full mt-7"
            textStyles="text-2xl"
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#EDEBDC' style='dark' />
    </SafeAreaView>
  );
}