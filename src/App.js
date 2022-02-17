import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';

function Home() {
  return <h1>Halaman Home</h1>
}

function ListView() {
  return (
    <>
      <h1>Halaman ListView</h1>
      <Link to="/user/deri">Deri</Link>
      <br/>
      <Link to="/user/rani">Rani</Link>
    </>
  )
}

function NoMatch() {
  return <h1>Halaman Tidak Ditemukan</h1>
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function DetailView(match) {
  const { name } = useParams();
  const query = useQuery();
  console.log(query.get('hello'));
  return <h1>Detail {name}</h1>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/users" element={<ListView/>} />
              <Route path="/user/:name" element={<DetailView/>} />
              <Route path="*" element={<NoMatch/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
