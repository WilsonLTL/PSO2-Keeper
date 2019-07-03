import * as React from 'react';
import { mount, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
// tslint:disable-next-line: no-var-requires
customGlobal.fetch = require('jest-fetch-mock');

customGlobal.fetchMock = customGlobal.fetch;

customGlobal.console.error = () => {
  // console.warn(...a);
};

customGlobal.console.warn = () => {
  // console.warn(...a);
};

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false
});

import MemberCard from '../../../components/subComponents/MemberCard';

const setup = () => {
    const props = {
        user: {
            avatar: "https://cdn.myanimelist.net/images/characters/10/369688.jpg",
            username: "User Name",
            password: "password",
            email: "email@email.com",
            register_date: "2019/06/22",
            level: "Regular"
        }
    };
    const wrapper = mount(<MemberCard {...props} />);
    return {
      props,
      wrapper
    };
  };

  describe('Dashboard components', () => {
    const { wrapper, props } = setup();
  
    it('Render successfull ?', () => {
    //   const subtree = wrapper.render();
      expect(wrapper.prop('user')).toEqual(props.user);
    //   expect(subtree.find('canvas').length).toBe(1);
    });
  
  });