import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-on-and-sign-up/sign-on-and-sign-up';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';


const HatsPage = () => (

  <h1>Hats Page</h1>
)

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null

    }
  }

  unsubscriteFromAuth = null


  componentDidMount() {

    this.unsubscriteFromAuth = auth.onAuthStateChanged(async userAuth => { 
      // this.setState({ currentUser : user })


      //this is how you fetch the data
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })

          console.log(this.state)
        })
      } else {
        this.setState({currentUser: userAuth})
      }
      
    })

  }

  componentWillUnmount(){

    this.unsubscriteFromAuth()
  }

  render() {
    return (

      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>

    );
  }
}

export default App;
