import { TableProps } from "@components/Table/types";

const Table = ({ data, handleEditField, handleRemoveWorkout }: TableProps) => {
  return (
    <table className="bg-transparent w-full border-collapse">
      <thead>
        <tr>
          <th className="px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-[#f1f5f9] py-3 text-xs uppercase border-x-0 whitespace-nowrap font-semibold text-left">
            ID
          </th>
          <th className="px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-[#f1f5f9] py-3 text-xs uppercase border-x-0 whitespace-nowrap font-semibold text-left">
            SETS
          </th>
          <th className="px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-[#f1f5f9] py-3 text-xs uppercase border-x-0 whitespace-nowrap font-semibold text-left">
            REPS
          </th>
          <th className="px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-[#f1f5f9] py-3 text-xs uppercase border-x-0 whitespace-nowrap font-semibold text-left">
            WEIGHT
          </th>
          <th className="px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-[#f1f5f9] py-3 text-xs uppercase border-x-0 whitespace-nowrap font-semibold text-right">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center py-4 text-sm">
              No workouts found
            </td>
          </tr>
        ) : (
          data.map((workout) => (
            <tr key={workout.id}>
              <td className="border-t-0 px-6 align-middle border-x-0 text-xs whitespace-nowrap p-4 text-left font-semibold">
                {workout.id}
              </td>
              <td
                className="border-t-0 px-6 align-middle border-x-0 text-xs whitespace-nowrap p-4"
                onClick={() =>
                  handleEditField("sets", workout.id, workout.sets)
                }
              >
                {workout.sets}
              </td>
              <td
                className="border-t-0 px-6 align-center border-x-0 text-xs whitespace-nowrap p-4"
                onClick={() =>
                  handleEditField("reps", workout.id, workout.reps)
                }
              >
                {workout.reps}
              </td>
              <td
                className="border-t-0 px-6 align-middle border-x-0 text-xs whitespace-nowrap p-4"
                onClick={() =>
                  handleEditField("weight", workout.id, workout.weight)
                }
              >
                {workout.weight}
              </td>
              <td className="border-t-0 px-6 align-middle border-x-0 text-xs text-right whitespace-nowrap p-4">
                <button onClick={() => handleRemoveWorkout(workout.id)}>
                  remover
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
