"use sctict";

const transformArr = (element) => {
  let object = {};
  for (let i = 0; i < element.length; i++) {
    let tempObject = {};
    tempObject["articul"] = element[i]["gsx$articul"]["$t"];
    tempObject["name"] = element[i]["gsx$name"]["$t"];
    tempObject["img"] = element[i]["gsx$img"]["$t"];
    tempObject["price"] = element[i]["gsx$price"]["$t"];
    tempObject["pieces"] = element[i]["gsx$pieces"]["$t"];
    object[element[i]["gsx$id"]["$t"]] = tempObject;
  }
  return object;
};

export default transformArr;
