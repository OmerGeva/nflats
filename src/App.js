import './App.css';
import NavigationBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/home.component';
import CheckOutPage from './pages/check-out/check-out.component';
import PackagesPage from './pages/packages/packages.component';
import InfoPage from './pages/info-page/info-page.component'

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/packages' component={PackagesPage}/>
                <Route path='/checkout' component={CheckOutPage}/>
                <Route exact path={`/terms`} render={(props) => <InfoPage isTermsPage/>} />
                <Route path='/privacy' component={InfoPage} />
                <Route render={() => <Redirect to="/" />} />
        </Switch>
        <span className='flex-grower'></span>
        <Footer />
    </div>
  );
}

export default App;
