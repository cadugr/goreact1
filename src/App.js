import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        name: 'Diego Schell Fernandes',
        time: 'há 3 min',
        image: '',
        text:
          'Ea enim ea aliquip cupidatat voluptate. Sunt labore dolore deserunt esse quis officia pariatur laboris enim. Excepteur deserunt consequat irure ex dolor consectetur ea duis aliquip.',
      },
      {
        name: 'Rubia Salvoksi',
        time: 'há 10 min',
        image: '',
        text:
          'Excepteur et reprehenderit aliquip non aute incididunt deserunt commodo elit minim. Aute veniam irure Lorem in anim est velit tempor enim ipsum nostrud enim. Lorem ea qui Lorem cillum.',
      },
      {
        name: 'Mr. Mustache',
        time: 'há 20 min',
        image: '',
        text:
          'Elit occaecat pariatur ex nulla adipisicing. Velit laborum dolor fugiat cillum aliqua ad est fugiat duis. Aliqua magna eu do ex et reprehenderit irure eu sint irure enim. Tempor in esse ad ullamco excepteur ex enim proident proident amet ut eu. Velit deserunt elit elit esse nulla mollit nisi ad nisi excepteur dolore veniam elit adipisicing.',
      },
    ],
  };

  render() {
    return (
      <div>
        <Header title="RocketBook" />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
