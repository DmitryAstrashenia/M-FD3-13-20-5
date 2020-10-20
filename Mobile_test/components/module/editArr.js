"use strict";

let editArr = (newClients, newClient) => {
  let newClientsArr = newClients;
  newClients.forEach((client, i) => {
    if (client.id == newClient.id) {
      newClientsArr[i] = newClient;
    }
  });
  return newClientsArr;
};

export { editArr };
