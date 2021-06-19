import "./tasksContainer.css";
import { connect } from "react-redux";
import Item from "../Item";
import * as selectors from "../../store/selectors";

const TasksContainer = (props) => {
  return (
    <div className="tasks-container">
      {props.getRenderedTasks.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </div>
  );
};

const mapToStateProps = (state) => ({
  itemArray: state.itemArray,
  currentPage: state.currentPage,
  getRenderedTasks: selectors.getRenderedTasks(state),
});

export default connect(mapToStateProps, null)(TasksContainer);
