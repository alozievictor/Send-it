import { FlatList, Text, View } from "react-native";
import React from "react";
import Tracker from "./tracker";
import UseFetch from "../../component/sub-component/UseFetch";
import Loader from "../../component/form/Loader";
import { AnimatedView, COLORS, SIZES } from "../../constant/Theme";



const ProductRow = () => {
  const { data, loading, error, Refresh } = UseFetch();
  console.log("FETCHED DATA:", data);
  console.log("FETCHED...:", data.package);

  if (loading) {
    return <Loader visible={loading} />;
  } else if (error) {
    return <Text>Something went wrong</Text>;
  } else if (data && data.package && data.package.length > 0) {
    return (
      <FlatList
        data={data.package}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Tracker item={item} />}
      />
    );
  } else {
    return (
      <AnimatedView
        animation={"lightSpeedIn"}
        duration={1000}
        delay={300}
        style={{
          backgroundColor: "#fafafa",
          paddingHorizontal: 15,
        }}
      >
        <Text>No data available</Text>
      </AnimatedView>
    );
  }
};

export default ProductRow;
