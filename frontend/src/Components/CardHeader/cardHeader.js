import "./cardHeader.css";
import InputBox from "../InputBox";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import * as selectors from "../../store/selectors";
import {
  selectAllItems,
  unSelectAllItems,
  deleteSelectedItems,
} from "../../store/helpers";

const Title = styled.h2`
  color: #4f52b3;
  margin-top: 25px;
`;

const cardHeader = ({
  selectedTaskCounter,
  itemArrayLength,
  selectAllAction,
  deleteSelectedAction,
  isAllChecked,
  unSelectAllAction,
}) => {
  // const token = localStorage.getItem('token');
  const toggleAll = () => {
    selectAllItems().then(() => {
      selectAllAction();
    });
  };

  const unToggleAll = () => {
    unSelectAllItems().then(() => {
      unSelectAllAction();
    });
  };

  return (
    <div className="card-header">
      <div className="title-container">
        <Title className={selectedTaskCounter ? "" : "hide"}>
          Selected: {selectedTaskCounter}/{itemArrayLength}
        </Title>
      </div>

      <div>
        <InputBox />
      </div>
      <div className="buttons-container">
        <button
          className="select-all"
          onClick={isAllChecked ? unToggleAll : toggleAll}
          hidden={!itemArrayLength}
        >
          {isAllChecked ? "Unselect all" : "Select all"}
        </button>
        <button
          className="delete-selected-btn"
          onClick={() => {
            deleteSelectedItems().then(() => {
              deleteSelectedAction();
            });
          }}
          hidden={!Math.ceil(selectedTaskCounter / 15)}
        >
          Delete Selected
        </button>
      </div>
    </div>
  );
};

const mapToStateProps = (state) => ({
  itemArrayLength: selectors.getItemArrayLength(state),
  isAllChecked: selectors.getIsAllCheckedValue(state),
  selectedTaskCounter: selectors.getCompletedCount(state),
});

const mapDispatchToProps = {
  deleteSelectedAction: actions.deleteSelectedAction,
  selectAllAction: actions.selectAllAction,
  unSelectAllAction: actions.unSelectAllAction,
};

export default connect(mapToStateProps, mapDispatchToProps)(cardHeader);
