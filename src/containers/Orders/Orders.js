import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionCreator from '../../store/actions/index'  // can remove index *
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

  componentDidMount() {
    this.props.onFetchOrders()
  }

  render () {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = (
      <div>
        {this.props.orders.map(order => (
          <Order key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
        {/*price={+order.price} use this(plus) to parse float to number  */}
      </div>)
    }
    return orders
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actionCreator.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
