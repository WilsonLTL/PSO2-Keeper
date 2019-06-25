import { ModifyAction } from '../../actions/UserPanel';
// import { IUserPanelState } from '../../types'
import { HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLEEDITCLICK, HANDLEEDITCLOSE, HANDLECREATECLICK, HANDLECREATECLOSE, HANDLEEDITSUBMIT, HANDLECREATESUBMIT, HANDLEJOINCLICK, HANDLEJOINCLOSE, HANDLEJOINSUBMIT } from '../../constants/UserPanel';

const defaultValue = {
    User: {
        avatar: "https://cdn.myanimelist.net/images/characters/10/369688.jpg",
        username: "User Name",
        password: "password",
        email: "email@email.com",
        register_date: "2019/06/22",
        level: "Regular"
    },
    Groups: [
        {
            img: "http://img.soogif.com/nF7fr7X0ny8hiYeCZdRmqS848j4WXE4V.gif_jpg",
            avatar: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/18157862_1175327462576972_6446174160084094492_n.jpg?_nc_cat=104&_nc_ht=scontent.fhkg4-2.fna&oh=a28bb65b5b72b1d9c46c0770d9adf0a4&oe=5D940F34",
            groupName: '康娜的日常',
            permission: 'Administrator',
            member: [],
            mission: [],
            status: true
        },
        {
            img: "https://pic.pimg.tw/qseawd123123/1414094246-1762173914_n.jpg",
            avatar: "http://www.acgrenwu.com/uploads/allimg/171201/1-1G201235R3K8.jpg",
            groupName: '鄰人團 - 我的朋友很少',
            permission: 'User',
            member: [],
            mission: [],
            status: false
        },
        {
            img: "https://pmcvariety.files.wordpress.com/2014/07/neon-genesis-evangelion.jpg?w=1000&h=563&crop=1",
            avatar: "https://www.nippon.com/en/ncommon/contents/japan-topics/86562/86562.jpg",
            groupName: 'GENESIS - 休閒時裝',
            permission: 'User',
            member: [],
            mission: [],
            status: false
        },
        {
            img: "https://i2.kknews.cc/SIG=1mupvk0/437000026sn9pq2on657.jpg",
            avatar: "http://1.bp.blogspot.com/-dVsrlGG0-L8/Uu58UF_S-lI/AAAAAAAAB-Y/NE7zGxXrWTA/s1600/comic.jpg",
            groupName: '只有Loner知道的世界 - 拼分團',
            permission: 'Administrator',
            member: [],
            mission: [],
            status: false
        },
    ],
    SnackBar: {
        status: false,
        messageTpye: "info",
        message: "No mission was recruiting.",
    },
    DashData: {
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
    },
    EditDialog: {
        status: false
    },
    CreateDialog:{
        status: false,
        avatar: "/images/icon/arks_logo2.png",
        backImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f295f94-b7e0-4e0f-abd7-a0c58edfe653/d7vb2jx-5d5e97ed-257f-4b78-9b50-dbf7f9cbebcd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMjk1Zjk0LWI3ZTAtNGUwZi1hYmQ3LWEwYzU4ZWRmZTY1M1wvZDd2YjJqeC01ZDVlOTdlZC0yNTdmLTRiNzgtOWI1MC1kYmY3ZjljYmViY2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4CLHjL1pORPDmxblz9-C1UlPcF0RcCpS_Fy7z1oVW1E",
        groupName: "New Group",
    },
    JoinDialog: {
        status: false,
        access_token: ""
    }
}

export default (state = defaultValue, action: ModifyAction): any => {
    switch (action.type) {
        case HANDLECHANGETEXT:
            switch (action.payload.target.name) {
                case "edit-avatar":
                    return {
                        User: {
                            avatar: action.payload.target.value,
                            username: state.User.username,
                            password: state.User.password,
                            email: state.User.email,
                            register_date: state.User.register_date,
                            level: state.User.level
                        },
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: state.CreateDialog,
                        JoinDialog: state.JoinDialog
                    }
                case "edit-username":
                    return {
                        User: {
                            avatar: state.User.avatar,
                            username: action.payload.target.value,
                            password: state.User.password,
                            email: state.User.email,
                            register_date: state.User.register_date,
                            level: state.User.level
                        },
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: state.CreateDialog,
                        JoinDialog: state.JoinDialog
                    }
                case "edit-email":
                    return {
                        User: {
                            avatar: state.User.avatar,
                            username: state.User.username,
                            password: state.User.password,
                            email: action.payload.target.value,
                            register_date: state.User.register_date,
                            level: state.User.level
                        },
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: state.CreateDialog,
                        JoinDialog: state.JoinDialog
                    }
                case "edit-password":
                    return {
                        User: {
                            avatar: state.User.avatar,
                            username: state.User.username,
                            password: action.payload.target.value,
                            email: state.User.email,
                            register_date: state.User.register_date,
                            level: state.User.level
                        },
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: state.CreateDialog,
                        JoinDialog: state.JoinDialog
                    }  
                case "new-group-avatar":
                    return {
                        User: state.User,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: {
                            status: true,
                            avatar: action.payload.target.value,
                            backImage: state.CreateDialog.backImage,
                            groupName: state.CreateDialog.groupName,
                        },
                        JoinDialog: state.JoinDialog
                    }
                case "new-group-backImage":
                    return {
                        User: state.User,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: {
                            status: true,
                            avatar: state.CreateDialog.avatar,
                            backImage: action.payload.target.value,
                            groupName: state.CreateDialog.groupName,
                        },
                        JoinDialog: state.JoinDialog
                    }
                case "new-group-username":
                    return {
                        User: state.User,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: {
                            status: true,
                            avatar: state.CreateDialog.avatar,
                            backImage: state.CreateDialog.backImage,
                            groupName: action.payload.target.value,
                        },
                        JoinDialog: state.JoinDialog
                    }   
                case "new-group-access-token":
                    return {
                        User: state.User,
                        Groups: state.Groups,
                        SnackBar: state.SnackBar,
                        DashData: state.DashData,
                        EditDialog: state.EditDialog,
                        CreateDialog: state.CreateDialog,
                        JoinDialog: {
                            status: true,
                            access_token: action.payload.target.value
                        }
                    }      
            }
        case HANDLESNACKBAROPEN:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: {
                    status: true,
                    messageTpye: "info",
                    message: "No mission was recruiting.",
                },
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: state.CreateDialog,
                JoinDialog: state.JoinDialog
            }
        case HANDLESNACKBARCLOSE:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: {
                    status: false,
                    messageTpye: "info",
                    message: "",
                },
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: state.CreateDialog,
                JoinDialog: state.JoinDialog
            }
        case HANDLEEDITCLICK:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: {
                    status: true
                },
                CreateDialog: state.CreateDialog,
                JoinDialog: state.JoinDialog
            }
        case HANDLEEDITCLOSE:
            return {
                User: defaultValue.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: {
                    status: false
                },
                CreateDialog: state.CreateDialog,
                JoinDialog: state.JoinDialog
            }
        case HANDLECREATECLICK: 
            return {
                User: defaultValue.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: {
                    status: true,
                    avatar: state.CreateDialog.avatar,
                    backImage: state.CreateDialog.backImage,
                    groupName: state.CreateDialog.groupName,
                },
                JoinDialog: state.JoinDialog
            }
        case HANDLECREATECLOSE:
            return {
                User: defaultValue.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: {
                    status: false,
                    avatar: state.CreateDialog.avatar,
                    backImage: state.CreateDialog.backImage,
                    groupName: state.CreateDialog.groupName,
                },
                JoinDialog: state.JoinDialog
            }
        case HANDLEJOINCLICK:
            return {
                User: defaultValue.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: state.CreateDialog,
                JoinDialog: {
                    status: true,
                    access_token: state.JoinDialog.access_token
                }
            }
        case HANDLEJOINCLOSE:
            return {
                User: defaultValue.User,
                Groups: state.Groups,
                SnackBar: state.SnackBar,
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: state.CreateDialog,
                JoinDialog: {
                    status: false,
                    access_token: state.JoinDialog.access_token
                }
            }    
        case HANDLEEDITSUBMIT:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: {
                    status: true,
                    messageTpye: "info",
                    message: "Update profile successfull.",
                },
                DashData: state.DashData,
                EditDialog: {
                    status: false
                },
                CreateDialog: state.CreateDialog,
                JoinDialog: state.JoinDialog
            }
        case HANDLECREATESUBMIT:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: {
                    status: true,
                    messageTpye: "info",
                    message: "Create successfull.",
                },
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: {
                    status: false,
                    avatar: state.CreateDialog.avatar,
                    backImage: state.CreateDialog.backImage,
                    groupName: state.CreateDialog.groupName,
                },
                JoinDialog: state.JoinDialog
            }
        case HANDLEJOINSUBMIT:
            return {
                User: state.User,
                Groups: state.Groups,
                SnackBar: {
                    status: true,
                    messageTpye: "info",
                    message: "Join successfull.",
                },
                DashData: state.DashData,
                EditDialog: state.EditDialog,
                CreateDialog: state.CreateDialog,
                JoinDialog: {
                    status: false,
                    access_token: state.JoinDialog.access_token
                }
            }    
        default:
            return state
    }
}