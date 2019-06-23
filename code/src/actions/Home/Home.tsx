import { HANDLECHANGE, HANDLECHANGETEXT, CLEAR , HANDLECLICKOPEN, HANDLECLOSE } from 'src/constants/Home';
// HandleChange
export interface IHANDLECHANGEAction {
    type: HANDLECHANGE;
    payload: any;
}

// HandleChangeText
export interface IHANDLECHANGETEXTAction {
    type: HANDLECHANGETEXT;
    payload: any;
}
// HandleClickOpen
export interface IHANDLECLICKOPENAction {
    type: HANDLECLICKOPEN;
}
// HandleClear
export interface ICLEARction {
    type: CLEAR;
}
// HandleClose
export interface IHANDLECLOSEAction {
    type: HANDLECLOSE;
}

export type ModifyAction = IHANDLECHANGEAction | IHANDLECHANGETEXTAction | IHANDLECLICKOPENAction | ICLEARction | IHANDLECLOSEAction;

export const handleChange = (): IHANDLECHANGEAction => ({
    type: HANDLECHANGE,
    payload: event
})

export const handleChangeText = (): IHANDLECHANGETEXTAction => ({
    type: HANDLECHANGETEXT,
    payload: event,
})

export const handleClickOpen = (): IHANDLECLICKOPENAction => ({
    type: HANDLECLICKOPEN
})

export const clear = (): ICLEARction => ({
    type: CLEAR
})

export const handleClose = (): IHANDLECLOSEAction => ({
    type: HANDLECLOSE
})