import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

export default function MeterScreen() {
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
    {
      label: "THIS YEAR",
      value: "year",
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
  return (
    <>
      <View
        style={{
          paddingVertical: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>METER</Text>
        <DropDownPicker
          items={meterOptions}
          defaultValue="home"
          defaultIndex={5}
          activeLabelStyle={{ color: "#771144" }}
          containerStyle={{
            height: 40,
            width: 100,
            marginLeft: 18,
          }}
          style={{ paddingHorizontal: 10 }}
          onChangeItem={(item) => console.log(item.value)}
        />
      </View>
      <View style={styles.container}>
        <Card containerStyle={{ backgroundColor: "#FFF", borderRadius: 5 }}>
          <Card.Title>CURRENT PRICE</Card.Title>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              color: "#8d7f3e",
              fontWeight: "bold",
            }}
          >
            ₦137/UNIT
          </Text>
        </Card>
        <Card containerStyle={{ backgroundColor: "#FFF", borderRadius: 5 }}>
          <Card.Title>AVAILABLE UNIT</Card.Title>
          <Text
            style={{
              textAlign: "center",
              fontSize: 35,
              color: "#8d7f3e",
              fontWeight: "bold",
            }}
          >
            333
          </Text>
        </Card>
        <Card containerStyle={{ backgroundColor: "#FFF", borderRadius: 5 }}>
          <View
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.Title>USAGE</Card.Title>
            <DropDownPicker
              items={usageOptions}
              defaultValue="today"
              defaultIndex={5}
              activeLabelStyle={{ color: "#771144" }}
              containerStyle={{
                height: 40,
                width: 130,
                marginLeft: 16,
                marginTop: -15,
              }}
              style={{ paddingHorizontal: 10 }}
              onChangeItem={(item) => console.log(item.value)}
            />
          </View>
          <Text
            style={{
              marginTop: 30,
              paddingBottom: 30,
              textAlign: "center",
              fontSize: 35,
              color: "#8d7f3e",
              fontWeight: "bold",
            }}
          >
            5.00kWh
          </Text>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8F9",
  },
});
