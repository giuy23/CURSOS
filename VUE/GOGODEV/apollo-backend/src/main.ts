import { createApp, provide, h } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import {createClient} from 'graphql-ws'
const HTTP_LINK = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

// const WS_LINK = new WebSocketLink({
//   uri: 'ws://localhost:4000/graphql',
//   options: {
//     reconnect: true
//   }
// })

const WS_LINK = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql'
}))

const LINK = split(({query}) => {
  const definition = getMainDefinition(query)
  return (
    definition.kind === "OperationDefinition" && definition.operation === "subscription"
  )
},
WS_LINK,
HTTP_LINK
)

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: LINK,
  cache
})

createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
}).mount('#app')
