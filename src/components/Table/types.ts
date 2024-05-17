import { Workout, UseWorkout } from "@/pages/Home/types";

export interface TableProps {
  data: Workout[];
  handleEditField: UseWorkout["handleEditField"];
  handleRemoveWorkout: UseWorkout["handleRemoveWorkout"];
}
