import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import LandingPage from '@/components/LandingPage';

export default function LandingScreen() {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Welcome',
        }}
      />
      <LandingPage />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 