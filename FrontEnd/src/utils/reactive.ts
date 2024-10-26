import { toRaw } from "vue";

export function toRawValue<T>(data: T) {
  return toRaw(data);
}
