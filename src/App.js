import React from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import client from './ApolloClient';
import Header from './Header';
import CardGroup from './Card';
import ResponsiveContainer from './ResponsiveContainer';

const App =  () =>  {

  return (
  <ApolloProvider client={client}>
      <ResponsiveContainer />
      {/*<div className="App">*/}
        {/*<Header />*/}
        {/*<CardGroup*/}
          {/*content={[*/}
            {/*'https://78.media.tumblr.com/8b6426ce12928809a8a525c31657a684/tumblr_p4gm2oy64z1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/8b6426ce12928809a8a525c31657a684/tumblr_p4gm2oy64z1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
            {/*'https://78.media.tumblr.com/14aec703ea72aea6c56838ffb2d7acdc/tumblr_p4gn0iADlJ1x40y7so1_1280.gif',*/}
          {/*]}*/}
          {/*tags={['NM', 'photo booth fun', 'some other tags']}*/}
        {/*/>*/}
      {/*</div>*/}
  </ApolloProvider>
  );

};

export default App;
