import './App.css';
import Customers from './Components/Customers';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Trainings from './Components/Trainings';


function App() {
  return (
    <div className="App">


      <AppBar position="static" color="secondary">
        <Toolbar>
        
          <Typography variant="h6" >
            Treenipalvelu
          </Typography>
         
        </Toolbar>
      </AppBar>
      <BrowserRouter>
<div>
<Link to="/">Customers</Link>{' '}
<Link to="/Components/Trainings">Trainings</Link>{' '}

<Switch>
<Route exact path="/" component={Customers}/>
<Route path ="/Components/Trainings" component={Trainings}/>

</Switch>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
