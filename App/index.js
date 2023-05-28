import Navigation from "./config/Navigation";
import { api } from './util/api'

api('/latest?base=USD')
  .then(res => console.log('response', res))
  .catch(err => console.log('error', err))

export default function Index() {
  return (
    <Navigation />
  )
}