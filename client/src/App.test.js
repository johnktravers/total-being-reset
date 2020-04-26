import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Home page rendering', () => {
  it('Renders the title in <h1> tags', () => {
    const wrapper = shallow(<App />);
    const title = <h1>Videos</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
