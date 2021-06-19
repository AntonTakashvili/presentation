import './pageBtnContainer.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';

const PageBtnContainer = ({ currentPage, changeCurrentPage, itemArray }) => {
  const pagesCounter = Math.ceil(itemArray / 15);
  const pageBtnArray = [];
  for (let i = 0; i < pagesCounter; i++) {
    pageBtnArray.push(
      <button
        key={i}
        className={currentPage === i + 1 ? 'active' : 'page-btn'}
        onClick={(e) => changeCurrentPage(e)}
      >
        {i + 1}
      </button>
    );
  }
  return <div className="page-btn-container">{pageBtnArray}</div>;
};

const mapToStateProps = (state) => ({
  currentPage: state.currentPage,
  itemArray: selectors.getItemArrayLength(state),
});

const mapDispatchToProps = {
  changeCurrentPage: actions.changeCurrentPageAction,
};

export default connect(mapToStateProps, mapDispatchToProps)(PageBtnContainer);
