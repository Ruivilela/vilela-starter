import Counter from './component'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)
