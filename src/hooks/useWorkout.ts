import { useState, useEffect } from "react";
import {
  DEFAULT_WORKOUT,
  LOCAL_STORAGE_KEY,
  PROMPT_TITLES,
} from "@/pages/Home/constants";

import { Workout, UseWorkout } from "@/pages/Home/types";

const useWorkoutData = (): UseWorkout => {
  const [data, setData] = useState<Workout[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const handleEditField = (
    field: keyof Workout,
    id: string,
    defaultValue: number | string
  ): void => {
    const response = prompt(
      PROMPT_TITLES[field] || "Edit field",
      defaultValue.toString()
    );

    if (response === defaultValue.toString() || !response) {
      return;
    }

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: parseInt(response, 10) } : item
      )
    );
  };

  const handleAddWorkout = (): void => {
    const workoutId = crypto.randomUUID();
    setData((prev) => [...prev, { id: workoutId, ...DEFAULT_WORKOUT }]);
  };

  const handleRemoveWorkout = (id: string): void => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return { data, handleEditField, handleAddWorkout, handleRemoveWorkout };
};

export default useWorkoutData;
