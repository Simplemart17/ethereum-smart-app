import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import { useIsFocused } from "@react-navigation/native";
import Loading from "../components/Loading";
import { theme } from "../utils/theme";

const MeterScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [energyUsage, setEnergyUsage] = useState(5);
  const [availableUnit, setAvailableUnit] = useState(333);
  const [meter, setMeter] = useState("home");
  const [day, setDay] = useState("today");
  const isFocused = useIsFocused();

  useEffect(() => {
    setIsLoading(true);
  }, [isFocused]);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const usageOptions = [
    {
      label: "TODAY",
      value: "today",
    },
    {
      label: "THIS WEEK",
      value: "week",
    },
    {
      label: "THIS MONTH",
      value: "month",
    },
  ];

  const meterOptions = [
    {
      label: "HOME",
      value: "home",
    },
    {
      label: "OFFICE",
      value: "office",
    },
  ];

  // function to filter energy usage
  const handleUnitUsage = (text) => {
    if (text.value === "today" && meter === "home") {
      setDay("today")
      setEnergyUsage(5)
    };
    if (text.value === "week" && meter === "home") {
      setDay("week")
      setEnergyUsage(25)
    };
    if (text.value === "month" && meter === "home") {
      setDay("month")
      setEnergyUsage(320)
    }
    if (text.value === "today" && meter === "office") {
      setDay("today")
      setEnergyUsage(65)
    };
    if (text.value === "week" && meter === "office") {
      setDay("week")
      setEnergyUsage(240)
    };
    if (text.value === "month" && meter === "office") {
      setDay("month")
      setEnergyUsage(660)
    }
  }

  // function to filter energy usage for different meter
  const handleMeter = (text) => {
    if (text.value === "home" && day === "today") {
      setMeter("home")
      setDay("today")
      setAvailableUnit(333)
      setEnergyUsage(5)
    };
    if (text.value === "home" && day === "week") {
      setMeter("home")
      setDay("today")
      setAvailableUnit(333)
      setEnergyUsage(25)
    };
    if (text.value === "home" && day === "month") {
      setMeter("home")
      setDay("today")
      setAvailableUnit(333)
      setEnergyUsage(320)
    };
    if (text.value === "office" && day === "today") {
      setDay("today")
      setMeter("office")
      setAvailableUnit(407)
      setEnergyUsage(65)
    };
    if (text.value === "office" && day === "week") {
      setDay("today")
      setMeter("office")
      setAvailableUnit(207)
      setEnergyUsage(240)
    };
    if (text.value === "office" && day === "month") {
      setDay("today")
      setMeter("office")
      setAvailableUnit(207)
      setEnergyUsage(660)
    };
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View
            style={{
              paddingVertical: 10,
              marginTop: 10,
              ...styles.cardView,
            }}
          >
            <Text
              style={{
                color: theme.colors.secondary,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              METER
            </Text>
            <DropDownPicker
              items={meterOptions}
              defaultValue="home"
              defaultIndex={5}
              activeLabelStyle={{ color: theme.colors.primary }}
              containerStyle={styles.meterDropdown}
              style={{ paddingHorizontal: 10 }}
              onChangeItem={(text) => handleMeter(text)}
            />
          </View>
          <View style={styles.container}>
            <Card containerStyle={styles.card}>
              <Card.Title>CURRENT PRICE</Card.Title>
              <Text style={{ ...styles.text, fontSize: 28 }}>₦137/UNIT</Text>
            </Card>
            <Card containerStyle={styles.card}>
              <Card.Title>AVAILABLE UNIT</Card.Title>
              <Text style={{ ...styles.text, fontSize: 35 }}>{availableUnit}</Text>
            </Card>
            <Card containerStyle={styles.card}>
              <View style={{ marginTop: 15, ...styles.cardView }}>
                <Card.Title>USAGE</Card.Title>
                <DropDownPicker
                  items={usageOptions}
                  defaultValue="today"
                  defaultIndex={5}
                  activeLabelStyle={{ color: theme.colors.primary }}
                  containerStyle={styles.usageDropdown}
                  style={{ paddingHorizontal: 10 }}
                  onChangeItem={(text) => handleUnitUsage(text)}
                />
              </View>
              <Text style={styles.usageText}>{`${energyUsage.toFixed(2)}kWh`}</Text>
            </Card>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8F9",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: theme.colors.accent,
    fontWeight: "bold",
  },
  cardView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  usageDropdown: {
    height: 40,
    width: 130,
    marginLeft: 16,
    marginTop: -15,
  },
  usageText: {
    marginTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 35,
    color: theme.colors.accent,
    fontWeight: "bold",
  },
  meterDropdown: {
    height: 40,
    width: 100,
    marginLeft: 18,
  },
});

export default MeterScreen;
