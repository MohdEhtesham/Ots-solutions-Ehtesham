import React, { useState } from 'react'
import { Grid, Image,Icon } from 'semantic-ui-react'
function Goodi(props){  
  const onPressHeart = () => {
    setIsuserLike(!isUserLike);
  };
  const [isUserLike, setIsuserLike] = useState(props.isUserLike);

        return(
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
          <Icon onClick={onPressHeart} name={isUserLike ? "heart" : "heart outline"} color="#900 "/>
        </Grid.Column>
        )}
        export default Goodi