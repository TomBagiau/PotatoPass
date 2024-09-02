import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { router } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { icons } from '../constants'

const Players = () => {
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [playersList, setPlayersList] = useState([]);

  const toggleAddPlayer = () => {
    setIsAddingPlayer(!isAddingPlayer);
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      const newPlayer = {
        id: playersList.length + 1, 
        name: newPlayerName.trim(),
      };
      
      const updatedPlayersList = [...playersList, newPlayer];
      setPlayersList(updatedPlayersList); // Mettre à jour l'état avec la nouvelle liste
  
      setNewPlayerName('');
      setIsAddingPlayer(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 mt-8">
          <Text className="text-6xl text-secondary font-abril">Joueurs</Text>

          <TouchableOpacity className="flex flex-row items-center mt-8" onPress={toggleAddPlayer}>
            <Text className="text-2xl font-capriola">Ajouter un joueur</Text>
            <Image 
              source={icons.addIcon}
              className="w-4 h-4 ml-2"
            />
          </TouchableOpacity>

          {isAddingPlayer ? (
            // AddingPlayer = True
            <>
              <View className="w-full bg-secondary p-4 mt-6 rounded-lg shadow-lg">
                <Text className="text-2xl text-primary font-capriola mb-3"> Nom : </Text>
                <TextInput
                  className="w-full bg-primary p-3 rounded-lg text-lg text-black shadow-inner"
                  value={newPlayerName}
                  onChangeText={setNewPlayerName}
                  placeholder="Entrez le nom du joueur"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />

                <TouchableOpacity className="mt-6 bg-primary p-3 rounded-lg shadow-md" onPress={handleAddPlayer}>
                  <Text className="text-xl font-capriola text-secondary text-center">Ajouter</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            // AddingPlayer = False
            <>
              {playersList.length > 0 && (
                <View className="w-full mt-8">
                  {playersList.map((player) => (
                    <Text key={player.id} className="text-lg mt-2">
                      {player.name}
                    </Text>
                  ))}
                </View>
              )}


              <CustomButton
                title="Jouer"
                containerStyles="w-full mt-7"
                textStyles="text-3xl"
                handlePress={() => {
                  router.push({ pathname: '/play', params: { players: JSON.stringify(playersList) } });
                }}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Players;