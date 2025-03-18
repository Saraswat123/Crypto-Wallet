import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Send from '@/components/Send';

export default function SendScreen() {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Send',
          presentation: 'modal',
        }}
      />
      <Send />
    </>
  );
} 