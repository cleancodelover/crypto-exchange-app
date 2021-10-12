import React from "react";
import { Image, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export interface MarketCoinProps {
  marketCoin: {
    image: string;
    name: string;
    symbol: string;
    valueChange24hrs: number;
    valueUSD: number;
  };
}
const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, valueChange24hrs, valueUSD },
  } = props;
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate("CoinDetails")}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>${name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.value}>${valueUSD}</Text>
        <Text style={{ color: valueChange24hrs > 0 ? "#398f0a" : "#f10000" }}>
          {valueChange24hrs > 0 && "+"} {valueChange24hrs}
        </Text>
      </View>
    </Pressable>
  );
};

export default MarketCoin;
