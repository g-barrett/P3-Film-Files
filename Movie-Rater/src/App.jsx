
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import Signup from './pages/Signup';
import AddProfile from './pages/AddProfile';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  // const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
      <Signup />
      <AddProfile />
      </div>
    </ApolloProvider>
  );
}

export default App;
