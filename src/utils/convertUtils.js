
export function convertJSONToObjectLiteral(json) {
  const parsedObject = JSON.parse(json);
  const objectLiteral = {};

  for (const key in parsedObject) {
    objectLiteral[key] = parsedObject[key];
  }

  return objectLiteral;
}