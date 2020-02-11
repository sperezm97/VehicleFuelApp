import React from "react";
import { View, Text } from "react-native";
import { LineChart, ChartConfig } from "react-native-chart-kit";
import spacing from "../../app/styles/spacing";
import colors from "../../app/styles/colors";
import { RnViewStyleProp } from "native-base";

const Chart = () => {
  const config: ChartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    fillShadowGradient: "",
    fillShadowGradientOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    propsForLabels: {},
    propsForBackgroundLines: {}
  };

  const styles: RnViewStyleProp = {
    // backgroundColor: colors.red
  };

  return (
    <View>
      <LineChart
        data={{
          labels: [],
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
        }}
        width={spacing.deviceWidth}
        height={spacing.deviceHeight * 0.3}
        chartConfig={config}
        bezier
        style={styles}
      />
    </View>
  );
};

export default Chart;
