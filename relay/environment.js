import { Environment, Network, RecordSource, Store } from "relay-runtime";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("https://oldmoviesgraphql.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => response.json());
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;
