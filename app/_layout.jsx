import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Abril-Fatface": require("../assets/fonts/AbrilFatface-Regular.ttf"),
    "Capriola": require("../assets/fonts/Capriola-Regular.ttf")
  })

  useEffect(() => {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
        name="rules" 
        options={{ 
          headerShown: true, 
          headerTitle: () => null, 
          headerTitle: 'Règles du jeu',
          headerBackTitleVisible: false 
        }} 
      />
        <Stack.Screen name="players" options={{ headerShown: false }} />
        <Stack.Screen name="play" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
