import React from 'react';

import ProductDetailHeader from './product_detail_header';
import ProductDetailMedia from './product_detail_media';
import ProductDiscussionContainer from '../product_discussion/product_discussion_container';
import ProductDetailNav from './product_detail_nav';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProduct(this.props.viewedProductId);
  }

  render() {
    let product = this.props.product;
    let createUpvote = this.props.createUpvote;
    let destroyUpvote = this.props.destroyUpvote;

    return (
      <div className="product-detail-container">
          <ProductDetailHeader product={product}/>
        <div className="product-detail-main-content-container">
          <div className="product-detail-content-bar">
            <div className="product-detail-content-header">
              <h3>DISCUSSION</h3>
            </div>
            <ProductDiscussionContainer 
                  product={product} 
                  viewedProductId={this.props.viewedProductId}
                  fetchProduct={this.props.fetchProduct} />
          </div>
          <div className="product-detail-aside">
            <ProductDetailNav product={product}
                              createUpvote={createUpvote}
                              destroyUpvote={destroyUpvote} />
          </div>
        </div>
      </div>
    );
  }
}

{/* <ProductDetailMedia /> */}
export default ProductDetail;