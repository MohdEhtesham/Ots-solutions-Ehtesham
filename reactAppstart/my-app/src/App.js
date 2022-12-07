
import './App.css';
import { Button ,Icon} from 'semantic-ui-react'
import { Tab } from 'semantic-ui-react'
import Home from "./Home"
import { useState } from 'react';

function App(props) {
  
  
  const panes = [
    {
      menuItem: 'home',
      render: () => <Tab.Pane attached={false} ><Home/></Tab.Pane>,
    },
    {
      menuItem: 'service',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'contact us',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]
  return (
    <div className="App">
        <Button primary>Click Here</Button>
        <Tab menu={{ pointing: true }} panes={panes} />


        
      
        
        


    </div>
  );
}

export default App;
