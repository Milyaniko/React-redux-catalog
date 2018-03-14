import React from 'react';
import FilterAmount from '../components/FilterAmount';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchData from '../actions/FetchData';

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar-container">
        <FilterAmount fetchData={this.props.fetchData}/>
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
    fetchData: FetchData
  }, dispatch)
}

// Bridge between our React app and Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

