import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';

const play = () => {
  useEffect(() => {
    // Verrouiller l'orientation en paysage
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // Déverrouiller l'orientation lorsque le composant est démonté
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full px-4">
        <Text>Play</Text>
      </View>
    </SafeAreaView>
  );
};

export default play;
