import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleImageCard = props => (
  <Card>
    <Image src={props.url} />
    <Card.Content>
      <Card.Meta>
        <Icon.Group size='big'>
          <Icon size='big' name='twitter square' />
          <Icon size='big' name='facebook square' />
          <Icon size='big' name='instagram' />
        </Icon.Group>
      </Card.Meta>
      <Card.Description>
        {
          props.tags.map(tag => <span>{tag}</span>)
        }
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard
