import React from 'react';
import ReactDOM from 'react-dom';
import webapp from './webapp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<webapp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
