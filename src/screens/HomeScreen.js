import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="md-person" size={30} color="#771144" />
            <Text
              style={{ marginLeft: 10, color: "#8d7f3e", fontWeight: "bold" }}
            >
              MANAGE PROFILE
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Meter");
        }}
      >
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="md-speedometer" size={30} color="#771144" />
            <Text
              style={{ marginLeft: 10, color: "#8d7f3e", fontWeight: "bold" }}
            >
              MANAGE METER
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("History");
        }}
      >
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-list-box" size={30} color="#771144" />
            <Text
              style={{ marginLeft: 10, color: "#8d7f3e", fontWeight: "bold" }}
            >
              MANAGE PAYMENT FLOW
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-people" size={30} color="#771144" />
            <Text
              style={{ marginLeft: 10, color: "#8d7f3e", fontWeight: "bold" }}
            >
              MANAGE COMPLAINTS
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
