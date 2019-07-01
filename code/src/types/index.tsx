export type StoreState = any;

export interface ILoginRegisterState {
  Home: {
    value: number,
    Confirmpassword: string,
    Dialog: boolean,
    Dialogtitle: string,
    Dialogtext: string,
    Email: string,
    Login: boolean,
    Password: string,
    Username: string
  }
}

export interface IUserPanelState {
  UserPanel: {
    DashData: any,
    User: any,
    Groups: any,
    SnackBar: any,
    EditDialog: any,
    CreateDialog: any,
    JoinDialog: any,
    GroupDialog: any,
    SelectMissionDialog: any,
  }
}

export interface IFormGroupPanelState {
  FormGroupPanel: {
    User: any,
    Mission: any,
    GroupFormList: any,
    ColorList: any,
    Groups: any,
    SnackBar: any,
    JoinMission: any,
    MessageDialog: any,
  }
}