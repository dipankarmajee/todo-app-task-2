import { DateFormat } from "../../utilities/DateFormat";

const TodoDate = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-secondary">
      <h3>Today</h3>
      <span className="fw-semibold">{DateFormat(new Date())}</span>
    </div>
  );
};

export default TodoDate;
