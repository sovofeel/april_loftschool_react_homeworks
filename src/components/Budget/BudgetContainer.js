import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Budget from './Budget'

import { moveOrderToCustomer } from '../../actions/farmActions'
//import { moveOrderToFarm } from '../../actions/marketActions'


function putStateToProps(state){
  return {
    state: state.budget,
  }
}


function putDispatchToProps(dispatch){
  return {
    //moveOrderToCustomer: bindActionCreators(moveOrderToCustomer, dispatch),
  }
}

export default connect(putStateToProps,putDispatchToProps)(Budget)