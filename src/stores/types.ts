import { v4 as uuidv4 } from "uuid";

export interface Item {
  id: string;
}

export function generateFakeData(): Item {
  return {
    id: uuidv4(),
  };
}
