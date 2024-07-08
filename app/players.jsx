import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { router } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
import { icons } from '../constants'


const players = () => {
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const toggleAddPlayer = () => {
    setIsAddingPlayer(!isAddingPlayer);
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

                  {/* Ajout ici d'un champ permettant d'écrire le nom du joueur. */}

                  {/* Le bouton Ajouter permet d'enregistrer le nom en local et l'afficher à l'écran */}
                  <TouchableOpacity>
                    <Text className="text-xl font-capriola text-primary mt-5">Ajouter</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              //AddingPlayer = False
              <>
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