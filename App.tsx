import React, { useEffect, useState } from "react";
import AppNavigator from "./src/app/navigation";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import "./src/app/config/sentry";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    loadFontsAsync();
  });

  const loadFontsAsync = async () => {
    try {
      Font.loadAsync({
        IBMPlexMono_Bold: require("./assets/fonts/IBMPlexMono-Bold.ttf"),
        IBMPlexMono_BoldItalic: require("./assets/fonts/IBMPlexMono-BoldItalic.ttf"),
        IBMPlexMono_ExtraLight: require("./assets/fonts/IBMPlexMono-ExtraLight.ttf"),
        IBMPlexMono_ExtraLightItalic: require("./assets/fonts/IBMPlexMono-ExtraLightItalic.ttf"),
        IBMPlexMono_Italic: require("./assets/fonts/IBMPlexMono-Italic.ttf"),
        IBMPlexMono_Light: require("./assets/fonts/IBMPlexMono-Light.ttf"),
        IBMPlexMono_LightItalic: require("./assets/fonts/IBMPlexMono-LightItalic.ttf"),
        IBMPlexMono_Medium: require("./assets/fonts/IBMPlexMono-Medium.ttf"),
        IBMPlexMono_MediumItalic: require("./assets/fonts/IBMPlexMono-MediumItalic.ttf"),
        IBMPlexMono_Regular: require("./assets/fonts/IBMPlexMono-Regular.ttf"),
        IBMPlexMono_SemiBold: require("./assets/fonts/IBMPlexMono-SemiBold.ttf"),
        IBMPlexMono_SemiBoldItalic: require("./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf"),
        IBMPlexMono_Thin: require("./assets/fonts/IBMPlexMono-Thin.ttf"),
        IBMPlexMono_ThinItalic: require("./assets/fonts/IBMPlexMono-ThinItalic.ttf"),
        IBMPlexSans_Bold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
        IBMPlexSans_BoldItalic: require("./assets/fonts/IBMPlexSans-BoldItalic.ttf"),
        IBMPlexSans_ExtraLight: require("./assets/fonts/IBMPlexSans-ExtraLight.ttf"),
        IBMPlexSans_ExtraLightItalic: require("./assets/fonts/IBMPlexSans-ExtraLightItalic.ttf"),
        IBMPlexSans_Italic: require("./assets/fonts/IBMPlexSans-Italic.ttf"),
        IBMPlexSans_Light: require("./assets/fonts/IBMPlexSans-Light.ttf"),
        IBMPlexSans_LightItalic: require("./assets/fonts/IBMPlexSans-LightItalic.ttf"),
        IBMPlexSans_Medium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
        IBMPlexSans_MediumItalic: require("./assets/fonts/IBMPlexSans-MediumItalic.ttf"),
        IBMPlexSans_Regular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
        IBMPlexSans_SemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
        IBMPlexSans_SemiBoldItalic: require("./assets/fonts/IBMPlexSans-SemiBoldItalic.ttf"),
        IBMPlexSans_Thin: require("./assets/fonts/IBMPlexSans-Thin.ttf"),
        IBMPlexSans_ThinItalic: require("./assets/fonts/IBMPlexSans-ThinItalic.ttf")
      });
      setIsFontLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isFontLoaded) {
    return <AppLoading />;
  }
  return <AppNavigator />;
}
