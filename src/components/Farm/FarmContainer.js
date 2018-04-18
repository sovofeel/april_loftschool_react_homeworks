import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Farm from './Farm'

import { moveOrderToCustomer } from '../../actions/farmActions'


function putStateToProps(state){
  return {
    farmList: state.farm.orders,
  }
}


function putDispatchToProps(dispatch){
  return {
    moveOrderToCustomer: bindActionCreators(moveOrderToCustomer, dispatch),
  }
}

export default connect(putStateToProps,putDispatchToProps)(Farm)