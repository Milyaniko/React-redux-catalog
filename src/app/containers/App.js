import React  from 'react';
import Board from './Board';
import NavBar from './NavBar';
import PriceList from './Pricelist';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <div className="app-content">
          <PriceList />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
