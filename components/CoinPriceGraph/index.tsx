import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
interface CoinPriceGraphProps {
  dataString: string;
}
const CoinPriceGraph = ({ dataString }: CoinPriceGraphProps) => {
  const data = JSON.parse(dataString);
  return (
    <View>
      <LineChart
        data={{
          labels: ["-7D", "-6D", "-5D", "-4D", "-3D", "-2D", "-1D", "Now"],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withOuterLines={false}
        withInnerLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#eaeaea",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#fafafa",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CoinPriceGraph;
