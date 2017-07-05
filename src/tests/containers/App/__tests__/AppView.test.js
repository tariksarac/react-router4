import React from 'react'
import AppView from '../../../../containers/App/AppView'
import { shallow } from 'enzyme'


it('should render App without crashing', () => {
    const app = shallow(<AppView />);
    expect(app).toMatchSnapshot()
});