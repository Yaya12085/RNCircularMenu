# rn-circular-menu

React Native Circular Menu component for creating interactive circular menus with customizable styles.

## Installation

```bash
npm install rn-circular-menu
```

or

```bash
yarn add rn-circular-menu
```

|                                                iOS                                                 |                                                  Android                                                   |
| :------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| ![ios example](https://github.com/Yaya12085/RNCircularMenu/blob/main/screenshots/ios.png?raw=true) | ![android example](https://github.com/Yaya12085/RNCircularMenu/blob/main/screenshots/android.jpg?raw=true) |

## Usage

```
import React from "react";
import { View } from "react-native";
import CircularMenu from "rn-circular-menu";
import { menuData } from "./path/to/menuData";

const App = () => {
return (
    <View style={{ flex: 1 }}>
        <CircularMenu
            menuData={menuData}
            animationDuration={300}
            containerStyles={{ backgroundColor: "#ffc059" }}
            menuStyles={{ backgroundColor: "white" }}
            iconStyle={{...}}
            labelStyle={{...}}
        />
    </View>
);
};

```

## Props

| Prop                | Type   | Required | Description                                                                              |
| ------------------- | ------ | -------- | ---------------------------------------------------------------------------------------- |
| `menuData`          | Array  | Yes      | Array of objects representing menu items.                                                |
| `animationDuration` | Number | No       | Duration of the animation for displaying the circular menu. Default is 300 milliseconds. |
| `containerStyles`   | Object | No       | Custom styles for the circular menu container.                                           |
| `menuStyles`        | Object | No       | Custom styles for the entire circular menu item.                                         |
| `iconStyle`         | Object | No       | Custom styles for the icons within each menu item.                                       |
| `labelStyle`        | Object | No       | Custom styles for the labels (text) within each menu item.                               |

## Example menuData

```

export const menuData = [
    {
        id: 0,
        title: "Main Menu",
        icon: require("./assets/mainIcon.png"),
        isMain: true,
        onPress: () => {
        // Handle press for main menu
        console.log("Main Menu pressed");
    },
    },
    {
        id: 1,
        title: "Option 1",
        icon: require("./assets/option1.png"),
        onPress: () => {
        // Handle press for option 1
        console.log("Option 1 pressed");
    },
    },
    {
        id: 2,
        title: "Option 2",
        icon: require("./assets/option2.png"),
        onPress: () => {
        // Handle press for option 2
        console.log("Option 2 pressed");
    },
    },
    // Add more menu items as needed
];

```

## Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author

Yaya Mohamed | [https://github.com/Yaya12085](https://github.com/Yaya12085)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
