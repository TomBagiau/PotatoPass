import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';
import { icons } from '../constants';

const Play = () => {
  
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
        <Text>Gameplay</Text>
      </View>
    </SafeAreaView>
  );
};

export default Play;