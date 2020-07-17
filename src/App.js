import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CustomerList from './screens/CustomerList';
import CustomerDetails from './screens/CustomerDetails';

class App extends React.Component {
  
  render(){

    return (
      <BrowserRouter>
        <div>
            <Route path="/details" component={CustomerDetails}/>
            <Route path="/" component={CustomerList} exact/>
        </div>
    </BrowserRouter>
  );
}
}
export default App;
