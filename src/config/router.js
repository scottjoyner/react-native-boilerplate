/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

// ########## Import Containers Here ##########
import Dashboard from "../containers/Dashboard";
import Profile from "../containers/Profile";

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile
  }
});

const AppDrawer = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStack
  },
  Profile: {
    screen: ProfileStack
  }
});

export default AppDrawer;