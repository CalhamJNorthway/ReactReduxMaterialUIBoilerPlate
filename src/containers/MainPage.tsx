import MainPage from '../components/MainPage';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { TabVO } from '../vo/TabVO';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState) {
  let num: number = state.number;
  if (!num) {
    num = 0;
  }

  return {
    num,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NumberAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementNumber()),
    onDecrement: () => dispatch(actions.decrementNumber()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
