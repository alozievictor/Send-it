import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={17}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Tracking Number, Order ID, Etc.."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            // setCLicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      <View style={{width:'10%', borderLeftWidth:1, borderColor:"#ccc", paddingHorizontal:3, justifyContent:'center' }}>
        <Ionicons style={{alignSelf:'center',}} name="qr-code-outline" size={20} color="black" />
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setCLicked(false);
            }}
          ></Button>
        </View>
      )}
      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    elevation:1,
    borderWidth:0.9,
    borderColor:'#ddd',
    borderRadius: 15,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fafafa",
    alignItems: "center",
    
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
});
