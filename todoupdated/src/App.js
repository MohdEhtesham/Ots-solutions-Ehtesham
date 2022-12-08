
import './App.css';
import Form from './Form';
import { Grid, Segment } from 'semantic-ui-react'
import List from './List';

function App() {
  return (
    <Grid columns={2}  >
    <Grid.Row stretched>
      <Grid.Column >
        <Segment><Form /></Segment>
      </Grid.Column>
      <Grid.Column > 
        <Segment><List /></Segment>
        
      </Grid.Column>
      
    </Grid.Row>
    
    <Grid.Column >
        <Segment></Segment>
        <Segment></Segment>
        <Segment></Segment>
        <Segment></Segment>
        
       
      </Grid.Column>
  </Grid>
  );
}

export default App;
