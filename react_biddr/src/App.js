
import React ,{Component}from 'react';
import './App.css';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import WelcomePage from './components/WelcomePage';

//  import { Session } from './requests';
 import { User } from './requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuctionNewPage from './components/AuctionNewPage';
 import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute.js';
import SignUpPage from './components/SignUpPage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
      user: null
    }
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      
      if (user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => { this.setState( { user : null })}

  render(){
    return(
     
      <BrowserRouter>
            <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/>
            <Switch>
              <Route exact path ='/sign_in' 
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>}>
              </Route>
              <Route
              exact path = '/sign_up'
              render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser}/>}
              >
              </Route>
              
            <Route path='/' exact component={WelcomePage} />
            <Route exact path='/auctions' component={AuctionIndexPage} />  
            <AuthRoute isAllowed={!!this.state.user} exact path='/auctions/new' component={AuctionNewPage}></AuthRoute>  
            <Route exact path='/auctions/:id' component={AuctionShowPage} ></Route>
            
            
          
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
            </Switch>
      </BrowserRouter>
      
    )
  }
}



export default App;

