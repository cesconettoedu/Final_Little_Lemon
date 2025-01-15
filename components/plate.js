import React from "react";
import { View, Text,Image } from "react-native";

const Plate = (props) => {
  
  const imageUrl = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${props.info.image}?raw=true`;

  return (
    <View style={{marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>
        {props.info.name}
      </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ width: "70%", justifyContent: "space-around" }}>
          <Text numberOfLines={2} style={{ fontSize: 16, fontWeight: "400" }}>
            {props.info.description}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#495E57" }}>
            $ {props.info.price}
          </Text>
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 90, height: 90, borderRadius: 5 }}
          contentFit="contain"
        />
      </View>
    </View>

  );
};

export default Plate;
