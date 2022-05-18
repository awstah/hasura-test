import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache,} from "@apollo/client"
import {setContext} from "@apollo/client/link/context"

import { BrowserRouter } from 'react-router-dom';

const httpLink = createHttpLink({
  uri:'https://notes.hasura.app/v1/graphql'
})

const auth = setContext((_,{headers})=>{
  const token = "ceV30BL9zGXOeFhyKNjLHv39ekr3KFzY6HfzYP13e2HjGOFI5vwLucYxlS0NN8rr"

  return {headers: {
      ...headers,
      "x-hasura-admin-secret": token
  }}
})

const client = new ApolloClient({
  link: auth.concat(httpLink),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}> 
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
