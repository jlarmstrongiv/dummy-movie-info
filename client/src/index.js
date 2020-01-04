import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router} from 'react-router-dom'

const client = new ApolloClient({
    uri: process.env.REACT_APP_APOLLO_SERVER || 'http://localhost:4000',
  });
  
  const root = (
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  );

ReactDOM.render(root, document.getElementById('root'));