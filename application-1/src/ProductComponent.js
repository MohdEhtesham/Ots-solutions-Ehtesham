import React from "react";
import { Container, Card, Icon } from "semantic-ui-react";

function ProductComponent(props) {
  return (
    <Container style={{  margin: '20px' }}>
      <Card>
        {/* <Image src="/images/avatar/large/matthew.png" wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{props.productName}</Card.Header>
          <Card.Meta>
            <span className="date">{props.price}</span>
          </Card.Meta>
          <Card.Description>
          {props.productDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default ProductComponent;
