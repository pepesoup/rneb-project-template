import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { Slot } from 'expo-router'
import { DataProvider } from '@rne-firebase/components/data/dataProvider/dataProvider'
import { useAuthStoreBase } from '@rne-firebase/stores/authStore'
import { StatusBar } from 'expo-status-bar'

export default function App() {
    const theme = MD3DarkTheme
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.background,
                    }}
                >
                    <DataProvider stores={[useAuthStoreBase()]}>
                        <StatusBar style="light" />
                        <Slot />
                    </DataProvider>
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    )
}
