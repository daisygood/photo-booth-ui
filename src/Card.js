import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const CardGroup = ({ content, tags, mobile }) => {
  let tagHTML = '';
  tags.forEach(tag => {
    tagHTML += '#' + tag + ' ';
  });

  return (
  <div style={{
    margin: '0 auto',
    padding: mobile ? '25px 50px' : '50px 100px'
  }}>
    <Card.Group itemsPerRow={ mobile ? 2 : 4}>
      {
        content.map(card => (
          <Card>
            <a href={card}><Image src={card}/></a>
            <Card.Content extra style={{
              padding: mobile ? '0.5em 0.8em' : ''
            }}>
              <div style={{float: 'left'}}>
                <p style={{
                  fontSize: mobile ? '6px' : '11px',
                  lineHeight: 0,
                }}>
                  {
                    tagHTML
                  }
                </p>
              </div>
              <div style={{float: 'right', marginTop: mobile ?  '0.5em' : '1em'}}>

                <a href='https://twitter.com/NM_News' target='_blank'>
                  <Icon link size={mobile ? 'small' : 'large'} name='twitter square'/>
                </a>
                <a href='https://www.facebook.com/northwesternmutual' target='_blank'>
                  <Icon link size={mobile ? 'small' : 'large'} name='facebook square'/>
                </a>
                <a href='https://www.instagram.com/northwesternmutual/' target='_blank'>
                  <Icon link size={mobile ? 'small' : 'large'} name='send'/>
                </a>
                <a href='https://www.linkedin.com/company/northwestern-mutual' target='_blank'>
                  <Icon link size={mobile ? 'small' : 'large'} name='linkedin'/>
                </a>
              </div>
            </Card.Content>
          </Card>
        ))
      }
    </Card.Group>
  </div>
  );
};

export default CardGroup
