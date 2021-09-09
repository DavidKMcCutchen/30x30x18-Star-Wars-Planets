import { Planet } from "./planet.model";

export interface SwapiPagination {
  count: number;
  next?: string;
  previous?: string;
  results: Planet[];
}