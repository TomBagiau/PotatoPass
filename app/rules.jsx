import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const rules = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl text-secondary font-capriola">Règles du jeu :</Text>

          <View className="mt-4">
            <Text className="text-xl font-capriola">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default rules