import { connect } from 'react-redux'
import Budget from './Budget'


function putStateToProps(state){
  return {
    state: state.budget,
  }
}


export default connect(putStateToProps)(Budget)