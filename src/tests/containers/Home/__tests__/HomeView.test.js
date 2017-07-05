import React from 'react';
import HomeView from '../../../../containers/Home/HomeView'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'


describe('Home page tests', () => {

    const initialState = {};
    const mockStore = configureStore();
    const getApps = jest.fn();
    let store,component;

    beforeEach(()=>{
        store = mockStore(initialState);
        component = mount( <Provider store={store}><HomeView getApps={getApps}/></Provider> );
    });

    it('renders  Home without crashing', () => {
        const home = renderer.create(<HomeView getApps={getApps}/>);
        let tree = home.toJSON();
        expect(tree).toMatchSnapshot()
    });

    it('change the message for admin when click', () => {
        expect(component.find('div[id="messeage"]').text()).toEqual('Home page');
        component.find('button').simulate('click');
        expect(component.find('div[id="messeage"]').text()).toEqual('Home page with message')

    })

})

