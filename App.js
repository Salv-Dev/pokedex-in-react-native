import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { PokeProvider } from './src/PokeContext'

import Main from './src'
import pokedex from './src/api/pokedex.json'
import colors from './src/colors/colors.json'

export default function App() {
  const content = {
    pokedex,
    colors
  }

  return (
      <PokeProvider value={content}>
        <NavigationContainer>
            <Main />
        </NavigationContainer>
      </PokeProvider>
  );
}
