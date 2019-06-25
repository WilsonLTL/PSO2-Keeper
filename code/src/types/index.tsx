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
    GroupInfoDialog: any,
  }
}