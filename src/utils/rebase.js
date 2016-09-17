import Rebase from 're-base'

let base
const getRebase = () => {
  if (!base) {
    base = Rebase.createClass({
        apiKey: "AIzaSyB71dAqoCIoZdhaML-rPCPDslTdrodHOEU",
        authDomain: "bdhackathon-a7ad7.firebaseapp.com",
        databaseURL: "https://bdhackathon-a7ad7.firebaseio.com",
        storageBucket: "bdhackathon-a7ad7.appspot.com",
        messagingSenderId: "279779742512"
    })
  }
  return base
}

export default getRebase
