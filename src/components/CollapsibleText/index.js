import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

const CollapsibleText = ({ text, textStyle }) => {
  const [collapsible, setCollapsible] = useState(4);
  const bigText = text.length >= 200;
  function toggleText() {
    return setCollapsible(collapsible === 4 ? 0 : 4);
  }
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={textStyle}
        ellipsizeMode="tail"
        numberOfLines={collapsible}
        onPress={() => toggleText()}
      >
        {text}
      </Text>
      {bigText && (
        <Text
          style={{ fontWeight: "bold", color: "#fff", marginTop: 10 }}
          onPress={() => toggleText()}
        >
          Press to see {collapsible ? "more" : "less"}
        </Text>
      )}
    </View>
  );
};

export default CollapsibleText;
