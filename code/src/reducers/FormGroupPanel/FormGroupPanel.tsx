import { ModifyAction } from '../../actions/FormGroupPanel';
import { HANDLELOAD, HANDLECHANGESTATUS, HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLECLICK, HANDLECLOSE, HANDLESUBMIT } from 'src/constants/FormGroupPanel';
// import { IFormGroupPanelState } from '../../types'

const colorList = [
    {
        color: "#BD6077",
        name: "Red"
    },
    {
        color: "#d00674",
        name: "Pink"
    },
    {
        color: "#9EB70F",
        name: "Yellow"
    },
    {
        color: "#CD853F",
        name: "Peru"
    },
    {
        color: "#DBB375",
        name: "Orange"
    },
    {
        color: "#5c8dbb",
        name: "Blue"
    },
    {
        color: "#19ca66",
        name: "Green"
    },
    {
        color: "#aeaa94",
        name: "Hazel"
    },
    {
        color: "#5c2f9f",
        name: "Purple"
    },
    {
        color: "#EAB5AC",
        name: "Pale"
    },
    {
        color: "#E4ACA7",
        name: "Grayish"
    },
    {
        color: "#ACA7E4",
        name: "navy"
    }
]

const defaultValue = {
    User: {
        avatar: "https://cdn.myanimelist.net/images/characters/10/369688.jpg",
        username: "User Name",
        password: "password",
        email: "email@email.com",
        register_date: "2019/06/22",
        level: "Regular"
    },
    Mission: {
        avatar: "https://pbs.twimg.com/media/D431dlTUEAAiAxb.jpg",
        backImage: "https://pbs.twimg.com/media/DqwbhkeU0AAQwEz.jpg",
        missionName: "終の艦隊迎撃戦",
        quota: 24,
        teamAsGroup: 2,
    },
    GroupFormList: [
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
    ],
    ColorList: [
        {
            avatar: "/images/icon/group1.png",
            group: "1",
            team: [colorList[0], colorList[1]]
        },
        {
            avatar: "/images/icon/group2.png",
            group: "2",
            team: [colorList[2], colorList[3]]
        },
    ],
    Groups: [
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
    SnackBar: {
        status: false,
        messageTpye: "info",
        message: "No mission was recruiting.",
    },
    JoinMission: {
        status: false,
        class: "",
        username: ""
    },
    MessageDialog: {
        status: false,
        message: ""
    }
}

export default (state = defaultValue, action: ModifyAction): any => {
    switch (action.type) {
        case HANDLELOAD: 
            console.log(action.payload)
            return state
        case HANDLECHANGESTATUS:
            switch (action.payload) {
                case "checkbox":
                    state.GroupFormList.forEach(element => {
                        if (action.data === element.username) {
                            element.checked = action.event.target.checked
                        }
                    });
                    return state
                case "Change-class":
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        JoinMission: {
                            status: true,
                            class: action.event.target.textContent,
                            username: ""
                        },
                        MessageDialog: state.MessageDialog
                    }
            }
            return state
        case HANDLECHANGETEXT:
            switch (action.payload.target.name) {
                case "dialog-push-message": 
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        JoinMission: state.JoinMission,
                        MessageDialog: {
                            status: state.MessageDialog.status,
                            message: action.payload.target.value,
                        }
                    }
            }
            return state
        case HANDLESNACKBAROPEN:
            state.SnackBar = {
                status: true,
                messageTpye: "info",
                message: "No mission was recruiting.",
            }
            return state
        case HANDLESNACKBARCLOSE:
            state.SnackBar = {
                status: false,
                messageTpye: "info",
                message: "No mission was recruiting.",
            }
            return state
        case HANDLECLICK:
            switch (action.payload) {
                case "Join-mission":
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        JoinMission: {
                            status: true,
                            class: "",
                            username: ""
                        },
                        MessageDialog: state.MessageDialog
                    }
                case "Push-message":
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        JoinMission: state.JoinMission,
                        MessageDialog: {
                            status: true,
                            message: ""
                        }
                    }
            }
            return state
        case HANDLECLOSE:
            switch (action.payload) {
                case "Join-mission":
                    state.JoinMission = {
                        status: false,
                        class: "",
                        username: ""
                    }
                    return state
                case "Push-message":
                    state.MessageDialog = {
                        status: false,
                        message: state.MessageDialog.message
                    }
                    return state
            }
            return state
        case HANDLESUBMIT:
            switch (action.payload) {
                case "assign-leader":
                    state.GroupFormList.forEach(element => {
                        if (element.checked) {
                            element.leader === false ? element.leader = true : element.leader = false
                        }
                    });
                    return {
                        User: state.User,
                        Mission: defaultValue.Mission,
                        GroupFormList: defaultValue.GroupFormList,
                        ColorList: [
                            {
                                avatar: "/images/icon/group1.png",
                                group: "1",
                                team: [colorList[0], colorList[1]]
                            },
                            {
                                avatar: "/images/icon/group2.png",
                                group: "2",
                                team: [colorList[2], colorList[3]]
                            },
                        ],
                        Groups: state.Groups,
                        SnackBar: defaultValue.SnackBar,
                        JoinMission: defaultValue.JoinMission,
                        MessageDialog: state.MessageDialog
                    }
                case "assign-team":
                    const color = colorList.filter(item => item.name === action.data)
                    state.GroupFormList.forEach(element => {
                        if (element.checked) {
                            element.team = color[0].name
                            element.color = color[0].color
                        }
                    });
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: defaultValue.GroupFormList,
                        ColorList: [
                            {
                                avatar: "/images/icon/group1.png",
                                group: "1",
                                team: [colorList[0], colorList[1]]
                            },
                            {
                                avatar: "/images/icon/group2.png",
                                group: "2",
                                team: [colorList[2], colorList[3]]
                            },
                        ],
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        JoinMission: state.JoinMission,
                        MessageDialog: state.MessageDialog
                    }
                case "Join-mission":
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: {
                            status: true,
                            messageTpye: "info",
                            message: "Join successfull"
                        },
                        JoinMission: {
                            status: false,
                            class: state.JoinMission.class,
                            username: state.JoinMission.username
                        },
                        MessageDialog: state.MessageDialog
                    }
                case "Finish":
                    return state
                case "Push-message":
                    return {
                        User: state.User,
                        Mission: state.Mission,
                        GroupFormList: state.GroupFormList,
                        ColorList: state.ColorList,
                        Groups: state.Groups,
                        SnackBar: {
                            status: true,
                            messageTpye: "info",
                            message: "Message sent"
                        },
                        JoinMission: state.JoinMission,
                        MessageDialog: {
                            status: false,
                            message: state.MessageDialog.message
                        }
                    }
            }
            return state
        default:
            return state
    }
}