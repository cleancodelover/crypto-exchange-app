import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const image = require("../../assets/images/Saly-31.png");
import styles from "./styles";

const CoinExchangeScreen = () => {
  const [coinAmount, setCoinAmount] = useState("");
  const [coinUSDValue, setCoinUSDValue] = useState("");

  const route = useRoute();
  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount) {
      setCoinAmount("0");
      return;
    }
    setCoinUSDValue((amount * coinData?.currentPrice).toString());
  }, [coinAmount]);
  const onPlaceOrder = () => {
    // const maxUsd = 0;
    // if (isBuy && parseInt(coinUSDValue) > parseInt(maxUsd)) {
    //   Alert.alert("Error", `Not enough USD coins. Max: ${maxUsd}`);
    //   return;
    // }
    if (!isBuy && coinAmount > coinData.amount) {
      Alert.alert(
        "Error",
        `Not enough ${coinData.symbol} coins. Max: ${coinData.amount}`
      );
      return;
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <Text style={styles.title}>
        {isBuy ? "Buy " : "Sell "} {coinData?.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coinData?.symbol}
        {" = "}${coinData?.currentPrice}
      </Text>
      <Image style={styles.image} source={image} />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text>{coinData?.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
          />
          <Text>{coinData?.symbol}</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
