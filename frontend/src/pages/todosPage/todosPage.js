import CardHeader from "../../Components/CardHeader";
import PageBtnContainer from "../../Components/PageBtnContainer";
import TasksContainer from "../../Components/TasksContainer";
import { useHistory } from "react-router-dom";
import { setItemArrayAction } from "../../store/actions";
import { connect } from "react-redux";
import { fetchAllData } from "../../store/helpers";
import "./todosPage.css";

const TodosPage = ({ setItemArrayAction }) => {
  const history = useHistory();
  fetchAllData()
    .then((data) => setItemArrayAction(data.data))
    .catch(() => history.push("/"));

  return (
    <div>
      <div className="main-container">
        <button
          className="sign-out"
          onClick={() => {
            localStorage.clear();
            setItemArrayAction([]);
            history.push("/login");
          }}
        >
          Sign Out
        </button>
        <CardHeader />
        <TasksContainer />
        <PageBtnContainer />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setItemArrayAction: setItemArrayAction,
};

export default connect(null, mapDispatchToProps)(TodosPage);
