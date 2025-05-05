// App.tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Provider } from 'react-redux';
import TabNavigator from './Lab2/Route'
import DrawerNavigator from './Lab2/Route2';
import { store } from './store';
import { PaperProvider } from 'react-native-paper/lib/typescript';

const App = () => {
  const [useDrawer, setUseDrawer] = useState(false);

  return (
  
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Button
          title={useDrawer ? 'Switch to Tab Navigation' : 'Switch to Drawer Navigation'}
          onPress={() => setUseDrawer(!useDrawer)}
        />
        {useDrawer ? <DrawerNavigator /> : <TabNavigator />}
      </View>
    </Provider>
    
  );
};

export default App;