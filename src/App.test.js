import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'jest-enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders h1', () => {
  const wrapper = mount(
    <App />
  );
  const message = wrapper.find('h1').text();
  expect(message).toEqual('DisTrack')
});