import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-on-and-sign-up/sign-on-and-sign-up';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from "./redux/user/user.action"

const HatsPage = () => (

  <h1>Hats Page</h1>
)

class App extends Component {

  // //replaced by the redux
  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser: null

  //   }
  // }

  unsubscriteFromAuth = null


  componentDidMount() {

    this.unsubscriteFromAuth = auth.onAuthStateChanged(async userAuth => { 
      // this.setState({ currentUser : user })


      //this is how you fetch the data
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          // //replace by setCurrentUser code 
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, () => {
          //   console.log(this.state)
          // })
          this.props.setCurrentUser({
            id: snapShot.id,
                ...snapShot.data()
          })



          console.log(this.state)
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
      
    })

  }

  componentWillUnmount(){

    this.unsubscriteFromAuth()
  }

  render() {
    return (

      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route 
          exact 
          path="/signin" 
          render={()=> 
            this.props.currentUser 
            ? (<Redirect to="/"/>) 
            : (<SignInAndSignUpPage/>)}  />

        </Switch>
      </div>

    );
  }
}

//where you retrieve data -> user is from the action 
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
  
})

//where you send the data
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
