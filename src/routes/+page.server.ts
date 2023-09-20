import { error } from "@sveltejs/kit";
import { faqs } from "./data";

export function load({ params }) {
  if (!faqs) throw error(404);

  return {
    faqs,
  };
}
