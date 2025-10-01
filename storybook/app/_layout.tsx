import React from 'react';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(storybook)/index',
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(storybook)/index" />
    </Stack>
  );
}
