import React, { useState } from "react";
import "./QueryBar.css";
import { interpretBrackets, StringOrBracketedString } from "./utils";

enum AndOr {
  And,
  Or,
}

type QueryBarInputElement =
  | { type: "AndOrSelector"; value: AndOr }
  | { type: "Brackets"; value: QueryBarInputElement[] }
  | { type: "Table"; value: string; valid: boolean }
  | { type: "Pattern"; value: string }
  | { type: "Tag"; value: string }
  | { type: "string"; value: string };

interface QueryBarInputProps {
  value: QueryBarInputElement[];
}
function QueryBarInput({ value }: QueryBarInputProps) {
  const toJsxElement = (element: QueryBarInputElement): JSX.Element => {
    switch (element.type) {
      case "Brackets":
        return (
          <div className="brackets">
            {element.value.map((e) => toJsxElement(e))}
          </div>
        );
      case "AndOrSelector":
        return (
          <span className="andor-selector">
            {element.value === AndOr.And ? "AND" : "OR"}
          </span>
        );
      case "Table":
        return <span className="table-pill">{element.value}</span>;
      case "Pattern":
        return (
          <span className="column-name-pattern-pill">{element.value}</span>
        );
      case "Tag":
        return <span className="tag-pill">{element.value}</span>;
      case "string":
        return <span>{element.value}</span>;
      default:
        return <span />;
    }
  };
  return (
    <div className="custom-input">{value.map((e) => toJsxElement(e))}</div>
  );
}

function QueryBar() {
  const [query, setQuery] = useState<string>(
    "(table:Customer.Details AND pattern:%name%) or pattern:%customername% or tag:Name"
  );

  const toQueryBarElement = (element: string): QueryBarInputElement => {
    const components = element.split(":");
    const type = components[0].toLowerCase();
    switch (type) {
      case "and":
        return { type: "AndOrSelector", value: AndOr.And };
      case "or":
        return { type: "AndOrSelector", value: AndOr.Or };
      case "table":
        return { type: "Table", value: components[1], valid: true };
      case "pattern":
        return { type: "Pattern", value: components[1] };
      case "tag":
        return { type: "Tag", value: components[1] };
      default:
        return { type: "string", value: element };
    }
  };
  const toQueryBarElementsFromString = (
    query: string
  ): QueryBarInputElement[] => {
    const interpretedQuery = interpretBrackets(query);
    console.log(interpretedQuery);
    return toQueryBarElementsFromSobs(interpretedQuery);
  };

  const toQueryBarElementsFromSobs = (
    query: StringOrBracketedString[]
  ): QueryBarInputElement[] => {
    return query
      .map((s) => toQueryBarElementsFromSob(s))
      .reduce(function (a, b) {
        return a.concat(b);
      });
  };

  const toQueryBarElementsFromSob = (
    query: StringOrBracketedString
  ): QueryBarInputElement[] => {
    switch (query.type) {
      case "string":
        return query.value.split(" ").map((p) => toQueryBarElement(p));
      case "bracketed-string":
        return [
          { type: "Brackets", value: toQueryBarElementsFromSobs(query.value) },
        ];
    }
  };

  const queryBarElements = toQueryBarElementsFromString(query);
  return (
    <div className="field">
      <input
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Enter query here"
      ></input>
      <QueryBarInput value={queryBarElements} />
    </div>
  );
}

export default QueryBar;
