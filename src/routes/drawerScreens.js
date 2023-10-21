import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from '../components/header/Header';
import TodoScreen from '../screens/todoscreen/TodoScreen';
import DrawerContent from '../components/drawer/DrawerContent';



const { Navigator, Screen } = createDrawerNavigator();


export default function DrawerScreens() {

    return (
        <Navigator
            initialRouteName="todoScreen"
            screenOptions={{ header: Header }}
            drawerContent={ DrawerContent }
            >

            <Screen name="todoScreen" component={TodoScreen} />

        </Navigator>
    );
}
