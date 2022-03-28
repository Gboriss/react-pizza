import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App () {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={ Home } exact/>
        <Route path='cart' component={ Cart } exact/>  
      </div>
    </div>
  );
}

// const mapStateToProps = (state) =>  {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
