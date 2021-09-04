import { ParsedQs } from "qs";

type Parameter = undefined | string | string[] | ParsedQs | ParsedQs[];

function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function asInt(parameter: Parameter): number | undefined {
  if (!isString(parameter)) {
    return undefined;
  }

  const parsed = parseInt(parameter, 10);

  if (isNaN(parsed)) {
    return undefined;
  }

  return parsed;
}

export function asString(parameter: Parameter): string | undefined {
  if (!isString(parameter)) {
    return undefined;
  }

  return parameter;
}
