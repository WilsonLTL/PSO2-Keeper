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

import Dashboard from '../../../components/subComponents/Dashboard';

const setup = () => {
    const props = {
      data: {
        labels: [
            '創世導く母なる神',
            '悲劇を願う破滅の虚影',
            '終の艦隊迎撃戦',
            '魔神城戦：不尽の狂気'
        ],
        datasets: [{
            data: [3, 5, 10, 2],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#696969'
            ]
        }]
    }
    };
    const wrapper = mount(<Dashboard {...props} />);
    return {
      props,
      wrapper
    };
  };

  describe('Dashboard components', () => {
    const { wrapper } = setup();
  
    it('Render successfull ?', () => {
      const subtree = wrapper.render();
      expect(subtree.find('canvas').length).toBe(1);
    });
  
  });