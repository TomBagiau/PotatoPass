import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { icons } from '../constants';

const Play = () => {
  const { players } = useLocalSearchParams(); // Retrieves transmitted parameters
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    //Check received parameters from players.jsx
    // console.log('Paramètres reçus dans Play.jsx:', players);

    if (players) {
      const parsedPlayers = typeof players === 'string' ? JSON.parse(players) : players;
      setPlayersList(parsedPlayers);
    }

    // Verrouiller l'orientation en paysage
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, [players]);

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % playersList.length);
  };

  if (playersList.length === 0) {
    return (
      <SafeAreaView className="bg-primary h-full">
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl">Aucun joueur</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full px-4">
        <Text className="text-3xl">{playersList[currentPlayerIndex].name}</Text>
        <TouchableOpacity onPress={nextPlayer}>
          <Image source={icons.arrowNext} className="w-20 h-20 mt-4" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Play;
