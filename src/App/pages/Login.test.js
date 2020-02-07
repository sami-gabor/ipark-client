import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Login/>);
});

describe('<Login /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
