import { Table } from "@/components";
import { useWorkoutData } from "@/hooks";

const Home = () => {
  const { data, handleEditField, handleAddWorkout, handleRemoveWorkout } =
    useWorkoutData();

  return (
    <section className="bg-[#f8fafc] h-full p-8">
      <div className="w-full xl:w-8/12 mx-auto">
        <div className="flex flex-col bg-white w-full shadow-lg rounded">
          <div className="rounded-t p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base text-[#334155]">
                Workouts
              </h3>
              <button
                className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none"
                type="button"
                onClick={handleAddWorkout}
              >
                Add Workout
              </button>
            </div>
          </div>

          <Table
            data={data}
            handleEditField={handleEditField}
            handleRemoveWorkout={handleRemoveWorkout}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
