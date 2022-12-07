import React, { useState } from 'react'
import Goodi from './Goodi';
import { Grid, Image,Icon } from 'semantic-ui-react'

function Home(props){
    
     
    return(
      <Grid columns='three' divided>
      <Grid.Row>
        <Goodi/>
        <Goodi/>
        <Goodi/>
      </Grid.Row>
  
      <Grid.Row>
        <Goodi/>
        <Goodi/>
        <Goodi/>
      </Grid.Row>
    </Grid>
)
}
export default Home