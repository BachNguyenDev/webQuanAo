import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import Header from './Header';
import Lienhe from './Lienhe';
import axios from 'axios';
import Ao from './Ao';
import Quan from './Quan';
import Home from './Home';
import Cart from './Cart'

const getProductData = () => {
  return axios.get('http://localhost:4000/getdata01')
    .then((res) => res.data);
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ao: [],
      quan: []
    };
  }

  componentDidMount() {
    getProductData()
      .then(data => {
        const ao = data.filter(item => item.category === 'Ao');
        const quan = data.filter(item => item.category === 'Quan');
        this.setState({ data, ao, quan });
      });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="ao" element={<Ao products={this.state.ao} />} />
            <Route path="quan" element={<Quan products={this.state.quan} />} />
          </Route>
          <Route path="/lienhe" element={<Lienhe />} />
          <Route path="/giohang" element={<Cart />} />
        </Routes>
      </Router>
    );
  }
}

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
