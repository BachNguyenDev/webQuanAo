import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './reducers/addToCart'; // Import action creator addToCart

class Ao extends Component {
  handleAddToCart = (product) => {
    // Dispatch action addToCart với thông tin sản phẩm
    this.props.addToCart(product);
  }

  render() {
    return (
      <div>
        <h2>Danh sách Áo</h2>
        <section className="center">
          <div className="center books">
            {this.props.products && this.props.products.map((product, index) => (
              <div key={index} className="book fade-in-image">
                <figure>
                  <img src={product.image} alt="" />
                  <figcaption>{product.product_name}</figcaption>
                  <div className="col40">{product.product_price} VND</div>
                  <button onClick={() => this.handleAddToCart(product)}>Add to Cart</button>
                </figure>
              </div>
            ))}
          </div>
        </section>  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Ao);
