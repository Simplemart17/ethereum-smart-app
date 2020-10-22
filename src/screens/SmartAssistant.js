import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ToggleSwitch from "toggle-switch-react-native";

export default function SmartAssistant() {
  const [consumptionSwitch, setConsumptionSwitch] = useState(false);
  const [rechargeSwitch, setRechargeSwitch] = useState(false);

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
        <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
          <ToggleSwitch
            isOn={consumptionSwitch}
            onColor="#771144"
            offColor="grey"
            label="SET CONSUMPTION ALARM"
            labelStyle={{ color: "black", fontWeight: "bold" }}
            onToggle={() => setConsumptionSwitch(!consumptionSwitch)}
          />
        </View>
        <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
          <Text>MINIMUM THRESHOLD (UNITS)</Text>
          <TextInput
            style={{
              backgroundColor: "#FFF",
              borderWidth: 1,
              height: 40,
              paddingHorizontal: 10,
              marginTop: 5,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 40 }}>
          <ToggleSwitch
            isOn={rechargeSwitch}
            onColor="#771144"
            offColor="grey"
            label="SET AUTO RECHARGE"
            labelStyle={{ color: "black", fontWeight: "bold" }}
            onToggle={() => setRechargeSwitch(!rechargeSwitch)}
          />
        </View>
        <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
          <Text>MINIMUM THRESHOLD (UNITS)</Text>
          <TextInput
            style={{
              backgroundColor: "#FFF",
              borderWidth: 1,
              height: 40,
              paddingHorizontal: 10,
              marginTop: 5,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
          <Text>AMOUNT TO RECHARGE (UNITS)</Text>
          <TextInput
            style={{
              backgroundColor: "#FFF",
              borderWidth: 1,
              height: 40,
              paddingHorizontal: 10,
              marginTop: 5,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 18, marginTop: 15 }}>
          <Text style={{ fontWeight: "700" }}>
            ** Current pricing will be used
          </Text>
        </View>
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
