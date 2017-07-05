import React from 'react'
import HeaderView from '../../../../containers/Header/HeaderView'
import { shallow } from 'enzyme'


it('should render HeaderView without crashing', () => {
    const app = shallow(<HeaderView />);
    expect(app).toMatchSnapshot()
});