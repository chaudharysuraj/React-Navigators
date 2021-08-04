import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarHideOnKeyboard: true, header: () => null }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, size }) => (
                        <IconFontAwesome
                            name="home"
                            size={size}
                            color={focused ? '#3498db' : 'grey'}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused, size }) => (
                        <IconMaterialIcons
                            name="person"
                            size={size}
                            color={focused ? '#3498db' : 'grey'}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused, size }) => (
                        <IconFontAwesome
                            name="gear"
                            size={size}
                            color={focused ? '#3498db' : 'grey'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main" screenOptions={{ header: () => null }}>
                <Drawer.Screen name="Main" component={TabNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ focused, size }) => (
                            <IconFontAwesome
                                name="home"
                                size={size}
                                color={focused ? '#3498db' : 'grey'}
                            />
                        ),
                    }} />
                <Drawer.Screen name="Profile" component={ProfileScreen}
                    options={{
                        title: 'Profile',
                        drawerIcon: ({ focused, size }) => (
                            <IconFontAwesome
                                name="gear"
                                size={size}
                                color={focused ? '#3498db' : 'grey'}
                            />
                        ),
                    }} />
                <Drawer.Screen name="Settings" options={{ keyboardDismissMode: 'on-drag' }} component={SettingsScreen}
                    options={{
                        title: 'Settings',
                        drawerIcon: ({ focused, size }) => (
                            <IconMaterialIcons
                                name="person"
                                size={size}
                                color={focused ? '#3498db' : 'grey'}
                            />
                        ),
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;