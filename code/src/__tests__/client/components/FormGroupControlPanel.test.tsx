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

import FormGroupControlPanel from '../../../components/subComponents/FormGroupControlPanel';

const setup = () => {
    const props = {
        mission: {
            avatar: "https://pbs.twimg.com/media/D431dlTUEAAiAxb.jpg",
            backImage: "https://pbs.twimg.com/media/DqwbhkeU0AAQwEz.jpg",
            missionName: "終の艦隊迎撃戦",
            quota: 24,
            teamAsGroup: 2,
        }, 
        member: [
            {
                username: "Matoi1",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1999678.jpg",
                class: "HR",
                leader: true,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi2",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2014111.jpg",
                class: "TE",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi3",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2106255.jpg",
                class: "RA",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi4",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2038176.jpg",
                class: "HR",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi5",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1980899.jpg",
                class: "TE",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi6",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2007448.jpg",
                class: "HR",
                leader: true,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi7",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1986761.jpg",
                class: "HR",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi8",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2040341.jpg",
                class: "HR",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi9",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2031898.jpg",
                class: "HR",
                leader: true,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi10",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2147520.jpg",
                class: "TE",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi11",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2008868.jpg",
                class: "RA",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi12",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2044862.jpg",
                class: "HR",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi13",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2026589.jpg",
                class: "HR",
                leader: true,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi14",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2045510.jpg",
                class: "RA",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi15",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2164118.jpg",
                class: "TE",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            },
            {
                username: "Matoi16",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2082250.jpg",
                class: "PH",
                leader: false,
                checked: false,
                rank: 1,
                team: "",
                color: "",
            }
        ]
    };
    const wrapper = mount(<FormGroupControlPanel {...props} />);
    return {
      props,
      wrapper
    };
  };

  describe('FormGroupControlPanel components', () => {
    const { wrapper, props } = setup();
    it('Render successfull ?', () => {
    //   const subtree = wrapper.render();
      expect(wrapper.prop('mission')).toEqual(props.mission);
    //   expect(subtree.find('canvas').length).toBe(1);
    });
  
  });