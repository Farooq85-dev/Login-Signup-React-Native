import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [formType, setFormType] = useState("Signup");
  console.log(Platform.OS);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {formType === "Signup" ? (
        <React.Fragment>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{formType}</Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              padding: 20,
              width: "100%",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 16 }}
              aria-label="Label for user name"
              nativeID="labelUserName"
            >
              Name
            </Text>
            <TextInput style={styles.input} placeholder="Muhamamd" />
            <Text
              style={{ fontWeight: "bold", fontSize: 16 }}
              aria-label="Label for user email"
              nativeID="labelUserEmail"
            >
              Email Address
            </Text>
            <TextInput style={styles.input} placeholder="your@gmail.com" />
            <Text
              style={{ fontWeight: "bold", fontSize: 17 }}
              aria-label="Label for user passwrod"
              nativeID="labelUserPassword"
            >
              Password
            </Text>
            <TextInput style={styles.input} placeholder="******" />
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#52d159",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => alert("Signup Successfully!")}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            Already have an account?
            <TouchableOpacity>
              <Text
                style={{ color: "#52d159" }}
                onPress={() => setFormType("Signin")}
              >
                Signin now
              </Text>
            </TouchableOpacity>
          </Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{formType}</Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              padding: 20,
              width: "100%",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 16 }}
              aria-label="Label for user name"
              nativeID="labelUserName"
            >
              Name
            </Text>
            <TextInput style={styles.input} placeholder="Muhamamd" />
            <Text
              style={{ fontWeight: "bold", fontSize: 17 }}
              aria-label="Label for user passwrod"
              nativeID="labelUserPassword"
            >
              Password
            </Text>
            <TextInput style={styles.input} placeholder="******" />
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#52d159",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => alert("Sigin Successfully!")}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Signin
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            Don't have an account?
            <TouchableOpacity>
              <Text
                style={{ color: "#52d159" }}
                onPress={() => setFormType("Signup")}
              >
                {" "}
                Signup now
              </Text>
            </TouchableOpacity>
          </Text>
        </React.Fragment>
      )}
      {/* <Text>
        {Platform.OS === "web" ? "Hello From Web" : "Hello From Android"}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
