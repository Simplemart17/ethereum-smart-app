import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Card } from "react-native-elements";
import CardComponent from "../components/Card";
import historyData from "../DummyData/data";

export default function HomeScreen() {
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
        <ScrollView>
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
          <View
            style={{
              borderBottomWidth: 2,
              marginTop: 25,
              borderBottomColor: "#D3D3D3",
            }}
          ></View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 18,
                marginBottom: 10,
              }}
            >
              MOST RECENT
            </Text>
            <Card
              containerStyle={{
                justifyContent: "flex-start",
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#ffffff",
                shadowColor: "#000",
                shadowRadius: 2,
                elevation: 2,
                shadowOpacity: 0.5,
                marginVertical: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingHorizontal: 18,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold" }}>UNIT LOADED</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>DATE TIME</Text>
                </View>
              </View>
            </Card>
            {historyData.map((data, index) => {
              return (
                <CardComponent
                  key={index}
                  date={data.date}
                  unitLoaded={data.unitLoaded}
                />
              );
            })}
          </View>
        </ScrollView>
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
