import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ProgressChart, PieChart } from "react-native-chart-kit";

const TabB = () => {
  const data = [
    {
      sector: 30,
      color: "#fa830c",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      sector: 30,
      color: "#0cfa4b",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      sector: 40,
      color: "#000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
      <Text>Section chart</Text>
      <Text>30% (orange), 30% (green), 40% (black)</Text>

      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={300}
        chartConfig={chartConfig}
        accessor={"sector"}
        backgroundColor={"transparent"}
        center={[80, 0]}
        absolute
        hasLegend={false}
      />
    </View>
  );
};

export default TabB;
