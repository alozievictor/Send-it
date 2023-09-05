import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PhotoBottomSheet = ({LunchGallary, setIsOpen, LunchCamera }) => { 
  return (
    <View>
      <Text style={[styles.bottomText, { textAlign: "center" }]}>
        Upload photo
      </Text>
      <Text style={{ textAlign: "center" }}>
        Select and upload photo on click
      </Text>
      <View style={{ paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={LunchCamera}
          style={[
            styles.bottomBtn,
            {
              borderWidth: 1,
              borderColor: "#e7a368",
              backgroundColor: "White",
            },
          ]}
          activeOpacity={0.9}
        >
          <Text style={styles.bottomText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={LunchGallary}
          style={[styles.bottomBtn, { borderWidth: 1, borderColor: "#bbb" }]}
          activeOpacity={0.9}
        >
          <Text style={styles.bottomText}>Select from Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> setIsOpen(false)}
          style={[
            styles.bottomBtn,
            { borderWidth: 1, borderColor: "#ddd", backgroundColor: "#eee" },
          ]}
          activeOpacity={0.9}
        >
          <Text style={styles.bottomText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoBottomSheet;

const styles = StyleSheet.create({
  bottomBtn: {
    height: 55,
    width: "100%",
    // backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    marginTop: 15,
  },
  bottomText: {
    color:'#000',
    fontSize:18,
    fontWeight:'500',
    opacity:0.6,
    textTransform:'capitalize'
  }
});
