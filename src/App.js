import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from 'Layouts/Header'
import Layout from 'Layouts/Layout'
import Footer from 'Layouts/Footer'
import './styles/index.scss';

function App() {
  
  return (
    <BrowserRouter>
        <Layout>
          <Header />
          <main className="main">
            <AppRouter />
          </main>
          <Footer />
        </Layout>
    </BrowserRouter>
  );
}

export default App;