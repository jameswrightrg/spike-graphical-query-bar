export type StringOrBracketedString =
  | { type: "string"; value: string }
  | { type: "bracketed-string"; value: StringOrBracketedString[] };

export const interpretBrackets = (input: string): StringOrBracketedString[] => {
  const length = input.length;

  var result: StringOrBracketedString[] = [];

  var buffer = "";
  var nestedLevel = 0;
  for (var i = 0; i < length; i++) {
    if (input[i] === "(") {
      if (nestedLevel === 0) {
        result.push({ type: "string", value: buffer });
        buffer = "";
      } else {
        buffer += input[i];
      }
      nestedLevel++;
    } else if (input[i] === ")") {
      if (nestedLevel === 1) {
        result.push({
          type: "bracketed-string",
          value: interpretBrackets(buffer),
        });
        buffer = "";
      } else {
        buffer += input[i];
      }
      if (nestedLevel >= 1) {
        nestedLevel--;
      }
    } else {
      buffer += input[i];
    }
  }
  if (nestedLevel === 0) {
    result.push({ type: "string", value: buffer });
  } else {
    result.push({ type: "bracketed-string", value: interpretBrackets(buffer) });
  }

  return result;
};
