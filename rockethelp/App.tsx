import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'
import { Home } from './src/components/Home'


export default function App() {

  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}

