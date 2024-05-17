export interface Workout {
  id: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface UseWorkout {
  data: Workout[];
  handleEditField: (
    field: keyof Workout,
    id: string,
    defaultValue: number | string
  ) => void;
  handleAddWorkout: () => void;
  handleRemoveWorkout: (id: string) => void;
}
