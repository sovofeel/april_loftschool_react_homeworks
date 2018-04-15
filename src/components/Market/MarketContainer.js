import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Market from './Market'

import { createOrder, moveOrderToFarm } from '../../actions/marketActions'


function putStateToProps(state){
  return {
    marketList: state.market.orders,
  }
}


function putDispatchToProps(dispatch){
  return {
    createOrder: bindActionCreators(createOrder, dispatch),
    moveOrderToFarm: bindActionCreators(moveOrderToFarm, dispatch),
  }
}

export default connect(putStateToProps,putDispatchToProps)(Market)