import React from 'react'
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';

function App ({ items }) {

  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={ () =>  <Home items={items} />} exact/>
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
