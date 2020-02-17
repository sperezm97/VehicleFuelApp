import React from "react";
import { View, Text } from "react-native";
import { LineChart, ChartConfig, LineChartData } from "react-native-chart-kit";
import spacing from "../../../comon/styles/spacing";
import colors from "../../../comon/styles/colors";
import { RnViewStyleProp } from "native-base";

const Chart = () => {
  const config: ChartConfig = {
    backgroundGradientFrom: colors.grey.lighter,
    // backgroundGradientFromOpacity: 1,
    backgroundGradientTo: colors.grey.lighter,
    // backgroundGradientToOpacity: 0.5,
    // fillShadowGradient: "",
    // fillShadowGradientOpacity: 0,
    color: (opacity = 1) => colors.red,
    labelColor: (opacity = 1) => colors.grey.base,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.1,
    // barRadius: 0,
    decimalPlaces: 0,
    propsForLabels: {},
    propsForBackgroundLines: {},
    style: {}
  };

  const styles: RnViewStyleProp = {};

  const data: LineChartData = {
    labels: ["Jan", "Feb", "March", "April", "May", "june"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  };

  return (
    <View>
      <LineChart
        data={data}
        width={spacing.deviceWidth}
        height={spacing.deviceHeight * 0.3}
        chartConfig={config}
        bezier
        style={styles}
        withInnerLines={false}
        withOuterLines={false}
        fromZero={true}
        yAxisLabel=""
        yAxisSuffix=""
        xAxisLabel=""
        segments={6}
        withShadow={true}
      />
    </View>
  );
};

export default Chart;
