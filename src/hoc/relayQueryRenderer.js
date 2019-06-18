import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { graphql, QueryRenderer } from "react-relay";
import environment from "~/relay/environment";
import Loading from "~/src/components/Loading";

function createRelayQueryRenderer(Container, config) {
  return renderProps => (
    <QueryRenderer
      environment={environment}
      query={config.query}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          <Text>Error!</Text>;
        }
        if (!props) {
          return <Loading />;
        }
        return <Container {...props} />;
      }}
    />
  );
}

export default createRelayQueryRenderer;
