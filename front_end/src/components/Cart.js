import { connect } from 'react-redux';
import React, { Component } from 'react';
import {  clearCart, increaseQuantity, decreaseQuantity } from './reducers/addToCart';

class Cart extends Component {
  eachProductPrice = (item) => {
    return item.quantity * item.product_price;
  };
  TotalPrice = () => {
    const { items } = this.props;
    return items.reduce((total, item) => total + this.eachProductPrice(item), 0);
  };
  
  handleIncrease = (id) => {
    this.props.increaseQuantity(id);
  };

  handleDecrease = (id) => {
    this.props.decreaseQuantity(id);
  };

  renderCartItems = () => {
    const { items } = this.props; // Lấy items từ props
    if (!items || items.length === 0) {
      return <div>Không có sản phẩm trong giỏ hàng.</div>;
    }
    return items.map((item, index) => (
      <div key={index} className="cart-item">
        <img src={item.image} alt={item.product_name} />
        <div className="item-details">
          <h3>{item.product_name}</h3>
          <p>Giá: {item.product_price} VND</p>
          <p>Số lượng: 
            <button onClick={() => this.handleDecrease(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => this.handleIncrease(item.id)}>+</button>
          </p>
          <p> tổng tiền : {this.eachProductPrice(item)} VND</p>
        </div>
      </div>
    ));
  };


  handlePayment = () => {
    this.props.clearCart()
    alert('Đơn hàng của bạn đã được thanh toán thành công')
  };

  render() {
    return (
      <div className="giohang">
        <h2>Chi tiết giỏ hàng</h2>
        <div className="cart-items">
          {this.renderCartItems()}
        </div>
        <p>Tổng tiền : {this.TotalPrice()} VND</p>
        <button onClick={this.handlePayment}>Thanh toán</button>
      </div>
    );
  }
}

// mapStateToProps để lấy dữ liệu từ store và truyền vào props của component
const mapStateToProps = (state) => ({
  items: state.addToCart.items,
});
const mapDispatchToProps = {
  // Ánh xạ các action creators vào props của component
  clearCart,
  increaseQuantity,
  decreaseQuantity 
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);