import {createStackNavigator} from "react-navigation-stack";
import { AppDrawerNavigator } from "./AppDrawerNavigator";

export const AppStackNavigator = createStackNavigator({
    AppDrawerNavigator : {
      screen : AppDrawerNavigator,
      navigationOptions:{
        headerShown : false
      }
    },
    /*UserDetails : {
      screen : UserDetails,
      navigationOptions:{
        headerShown : false
      }
    }*/
  },
    {
      initialRouteName: 'BookDonateList'
    }
  );