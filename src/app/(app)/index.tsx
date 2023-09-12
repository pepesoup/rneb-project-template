import { Text } from 'react-native-paper'
import { ScreenCmn, Links } from '@rn-components/commonUi'
import { Stack } from 'expo-router'

export default function Index_AppApp() {
    console.log('/(app)/ - index')
    return (
        <ScreenCmn style={{ gap: 20 }}>
            <Stack />
            <Links.NavLink href="/public">Public</Links.NavLink>
            <Links.NavLink href="/login">Login</Links.NavLink>
            <Text>hej</Text>
        </ScreenCmn>
    )
}
