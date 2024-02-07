
export function removeEmptyObjValues(obj) {
  const result = {};

  for (const key in obj) {
    if (obj[key] !== '') {
      result[key] = obj[key];
    }
  }
  
  return result;
}