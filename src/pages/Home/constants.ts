import { Workout } from "@/pages/Home/types";

export const DEFAULT_WORKOUT = {
  sets: 0,
  reps: 0,
  weight: 0,
};

export const PROMPT_TITLES: Partial<Record<keyof Workout, string>> = {
  sets: "Edit sets",
  reps: "Edit reps",
  weight: "Edit weight",
};

export const LOCAL_STORAGE_KEY = "enhancefit@workouts";
