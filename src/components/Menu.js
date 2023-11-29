import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Menu = ({ menuStyle, iconStyle, labelStyle, menu }) => {
  const iconSize = menu.isMain ? 60 : 40;

  const handlePress = () => {
    if (menu.onPress) {
      menu.onPress();
    }
  };

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6.65,
        elevation: 9,
        padding: 6,
        gap: 4,
        ...menuStyle,
      }}
      onPress={handlePress}
    >
      <Image
        source={menu?.icon}
        style={{
          width: iconSize,
          height: iconSize,
          ...iconStyle,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          textAlign: "center",
          width: "100%",
          padding: 4,
          fontSize: menu?.isMain ? 16 : 13,
          fontWeight: menu.isMain ? "bold" : "normal",
          flexWrap: "wrap",
          ...labelStyle,
        }}
      >
        {menu?.title}
      </Text>
    </TouchableOpacity>
  );
};

Menu.propTypes = {
  menuStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  menu: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    isMain: PropTypes.bool,
    onPress: PropTypes.func,
  }),
};

export default Menu;
