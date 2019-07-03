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

import GroupCardList from '../../../components/subComponents/List/GroupCardList';

const setup = () => {
    const props = {
        tileData: [
            {
                img: "http://img.soogif.com/nF7fr7X0ny8hiYeCZdRmqS848j4WXE4V.gif_jpg",
                avatar: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/18157862_1175327462576972_6446174160084094492_n.jpg?_nc_cat=104&_nc_ht=scontent.fhkg4-2.fna&oh=a28bb65b5b72b1d9c46c0770d9adf0a4&oe=5D940F34",
                groupName: '康娜的日常',
                permission: 'Administrator',
                access_token: "a8fe5rh2xutp",
                member: [
                    {
                        username: "Matoi1",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1999678.jpg",
                        permission: "Administrator",
                        status: true,
                    },
                    {
                        username: "Matoi2",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2014111.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi3",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2106255.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi4",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2038176.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi5",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1980899.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi6",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2007448.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi7",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1986761.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi8",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2040341.jpg",
                        permission: "Administrator",
                        status: true
                    },
                    {
                        username: "Matoi9",
                        avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2031898.jpg",
                        permission: "Administrator",
                        status: true
                    }
                ],
                mission: {
                    custom_mission: [],
                    template_mission: [
                        {
                            avatar: "https://pbs.twimg.com/media/D431dlTUEAAiAxb.jpg",
                            backImage: "https://pbs.twimg.com/media/DqwbhkeU0AAQwEz.jpg",
                            missionName: "終の艦隊迎撃戦",
                            quota: 16,
                            teamAsGroup: 2,
                        },
                        {
                            avatar: "https://i.imgur.com/bUPwrtw.jpg",
                            backImage: "https://pso2roboarks.jp/wp-content/uploads/583f754d0c13b6430deb5ddff3e73a6f.jpg",
                            missionName: "悲劇を願う破滅の虚影",
                            quota: 24,
                            teamAsGroup: 3,
                        },
                        {
                            avatar: "https://i.imgur.com/zVNHykd.jpg",
                            backImage: "https://pbs.twimg.com/media/Cwlzz65UsAA58_3.jpg",
                            missionName: "創世導く母なる神",
                            quota: 36,
                            teamAsGroup: 3,
                        }
                    ]
                },
                status: true
            },
            {
                img: "https://pic.pimg.tw/qseawd123123/1414094246-1762173914_n.jpg",
                avatar: "http://www.acgrenwu.com/uploads/allimg/171201/1-1G201235R3K8.jpg",
                groupName: '鄰人團 - 我的朋友很少',
                permission: 'User',
                access_token: "a8fe5rh2xutp",
                member: [],
                mission: {
                    custom_mission: [],
                    template_mission: []
                },
                status: false
            },
            {
                img: "https://pmcvariety.files.wordpress.com/2014/07/neon-genesis-evangelion.jpg?w=1000&h=563&crop=1",
                avatar: "https://www.nippon.com/en/ncommon/contents/japan-topics/86562/86562.jpg",
                groupName: 'GENESIS - 休閒時裝',
                permission: 'User',
                access_token: "a8fe5rh2xutp",
                member: [],
                mission: {
                    custom_mission: [],
                    template_mission: []
                },
                status: false
            },
            {
                img: "https://i2.kknews.cc/SIG=1mupvk0/437000026sn9pq2on657.jpg",
                avatar: "http://1.bp.blogspot.com/-dVsrlGG0-L8/Uu58UF_S-lI/AAAAAAAAB-Y/NE7zGxXrWTA/s1600/comic.jpg",
                groupName: '只有Loner知道的世界 - 拼分團',
                permission: 'Administrator',
                access_token: "a8fe5rh2xutp",
                member: [],
                mission: {
                    custom_mission: [],
                    template_mission: []
                },
                status: false
            },
        ],
    };
    const wrapper = mount(<GroupCardList {...props} />);
    return {
      props,
      wrapper
    };
  };

  describe('Dashboard components', () => {
    const { wrapper, props } = setup();
  
    it('Render successfull ?', () => {
    //   const subtree = wrapper.render();
      expect(wrapper.prop('tileData')).toEqual(props.tileData);
    //   expect(subtree.find('canvas').length).toBe(1);
    });
  
  });