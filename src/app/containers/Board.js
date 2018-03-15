import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchData from '../actions/FetchData';
import Product from '../components/Product';

class Board extends React.Component {

  componentDidMount() {
    this.props.fetchData();
  }


  // Check the categories
  uniqueItems = (a, b, c) => c.indexOf(a) === b;

  render() {
    return (
      <div className="boardContainer">
        <h2>Products</h2>
        <Product
          catalog={this.props.catalog}
          isFetching={this.props.isFetching} />
      </div>
    );
  }
}

// Transfer our Redux store's states to React's app props
const mapStateToProps = (state) => {
  return {
    isFetching: state.catalog.isFetching,
    catalog: state.catalog.data,    // The general  data
  }
}

/// Transfer our functions/actions from Redux to React's props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchData: FetchData  // Take data from JSON
  }, dispatch)
}

// Bridge between our React app and Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Board)
