import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterByCategory from '../actions/FilterByCategory';
import FetchData from '../actions/FetchData';
import FilterByPrice from '../actions/FilterByPrice';
import FilterPrices from '../components/FilterPrices';
import FilterCategory from '../components/FilterCategory';

class PriceList extends React.Component {

  render() {
    return (
      <div className="pricelist-container">
        <FilterCategory filterByCategory={this.props.filterByCategory}/>
        <FilterPrices filterByPrice={this.props.filterByPrice} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalog.data
  }
}

/// Transfer our functions/actions from Redux to React's props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchData: FetchData,
    filterByCategory: FilterByCategory,
    filterByPrice: FilterByPrice  
  }, dispatch)
}

// Bridge between our React app and Redux store
export default connect(mapStateToProps, mapDispatchToProps)(PriceList)
