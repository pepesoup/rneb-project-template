import { Text, Button } from 'react-native-paper'
import { ScreenCmn } from '@rn-components/commonUi'
import { Stack } from 'expo-router'
import { authActions, useAuthStoreBase } from '@rne-firebase/stores/authStore'
import { DEV_AUTH_EMAIL, DEV_AUTH_PASSWORD } from '@env'

export default function Login() {
    const authData = useAuthStoreBase()

    return (
        <ScreenCmn>
            <Text>isSignedIn={authData.isSignedIn.toString()}</Text>
            <Stack />
            <Button
                onPress={() =>
                    authActions.signInWithEmailAndPassword(DEV_AUTH_EMAIL, DEV_AUTH_PASSWORD)
                }
            >
                Login - with ok data
            </Button>
            <Button onPress={() => authActions.signInWithEmailAndPassword(DEV_AUTH_EMAIL, '-')}>
                Login - with wrong data
            </Button>
            <Button onPress={() => authActions.signOut()}>SignOut</Button>
        </ScreenCmn>
    )
}
