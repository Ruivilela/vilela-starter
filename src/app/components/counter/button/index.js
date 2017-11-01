import CounterButton from './component'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from '@state/counter/actions';


function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        increase: INCREASE_COUNTER,
        decrease: DECREASE_COUNTER
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton)