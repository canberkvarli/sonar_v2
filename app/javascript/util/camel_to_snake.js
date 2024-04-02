export const convertToSnakeCase = (obj) => {
  // via Andrew
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  let newObj = {};
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let convertedKeys = keys.map((key) => camelToSnakeCase(key));
  for (let i = 0; i < keys.length; i++) {
    newObj[convertedKeys[i]] = values[i];
  }
  return newObj;
};

export const formDataConvert = (formData) => {
  const retFormData = new FormData();
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  for (let pair of formData.entries()) {
    let newKey = camelToSnakeCase(pair[0]);
    retFormData.append(newKey, pair[1]);
  }
  return retFormData;
};
