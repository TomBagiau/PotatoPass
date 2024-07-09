import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { router } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { icons } from '../constants'


const players = () => {
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [playersList, setPlayersList] = useState([]);

  const toggleAddPlayer = () => {
    setIsAddingPlayer(!isAddingPlayer);
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      setPlayersList([...playersList, newPlayerName.trim()]);
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

          { isAddingPlayer ? 
            (
              //AddingPlayer = True
              <>
                <View className="w-full bg-secondary mt-6">
                  <Text className="text-2xl text-primary font-capriola"> Nom : </Text>
                  <TextInput
                    className="w-[70%] bg-primary p-2 rounded-md text-lg"
                    value={newPlayerName}
                    onChangeText={setNewPlayerName}
                  />

                  <TouchableOpacity className="mt-4" onPress={handleAddPlayer}>
                    <Text className="text-xl font-capriola text-primary mt-5">Ajouter</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              //AddingPlayer = False
              <>
                {playersList.length > 0 && (
                  <View className="w-full mt-8">
                    {playersList.map((player, index) => (
                      <Text key={index} className="text-lg mt-2">{player}</Text>
                    ))}
                  </View>
                )}

                <CustomButton
                title="Jouer" 
                handlePress={() => router.push('/play')}
                containerStyles="w-full mt-7"
                textStyles="text-3xl"
                />
              </>
            ) 
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default players