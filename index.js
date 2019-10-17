/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://172.19.167.78:3000/api'
  }),
  cache: new InMemoryCache()
})

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

AppRegistry.registerComponent(appName, () => ApolloApp)
