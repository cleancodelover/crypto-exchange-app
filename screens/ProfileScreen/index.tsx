import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
const image = require("../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: "1",
    name: "Verkyav",
    email: "verkyavpeter@gmail.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgold-coin-with-ethereum-sign-vector-19576543&psig=AOvVaw3SZ-HEH9vUrUQrBVE0QuKI&ust=1633836748042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDrgq6yvPMCFQAAAAAdAAAAABAD",
    netWorth: 12312,
  });

  const navigation = useNavigation();

  const signOut = async () => {
    console.warn("You are logged out");
  };
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
