import { HANDLELOAD, HANDLECHANGEPERMISSION, HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLECLICK, HANDLECLOSE, HANDLESUBMIT } from 'src/constants/UserPanel';

export interface IHANDLELOADAction {
    type: HANDLELOAD,
    payload: JSON
}

export interface IHANDLECHANGEPERMISSIONAction {
    type: HANDLECHANGEPERMISSION,
    event: any,
    payload: any,
    data: any
}

export interface IHANDLECHANGETEXTAction {
    type: HANDLECHANGETEXT,
    payload: any
}

export interface IHANDLESNACKBAROPENAction {
    type: HANDLESNACKBAROPEN,
}

export interface IHANDLESNACKBARCLOSEAction {
    type: HANDLESNACKBARCLOSE,
}

export interface IHANDLECLICKAction {
    type: HANDLECLICK,
    payload: any,
    data: any
}

export interface IHANDLECLOSEAction {
    type: HANDLECLOSE,
    payload: any,
    data: string
}

export interface IHANDLESUBMITAction {
    type: HANDLESUBMIT,
    payload: any,
    data: any
}

export type ModifyAction = IHANDLELOADAction | IHANDLECHANGEPERMISSIONAction | IHANDLECHANGETEXTAction | IHANDLESNACKBAROPENAction | IHANDLESNACKBARCLOSEAction | IHANDLECLICKAction 
| IHANDLECLOSEAction | IHANDLESUBMITAction ;

export const handleLoad = (payload:JSON): IHANDLELOADAction => ({
    type: HANDLELOAD,
    payload,
})

export const handleChangePermission = (payload: string, data: any): IHANDLECHANGEPERMISSIONAction => ({
    type: HANDLECHANGEPERMISSION,
    event,
    payload,
    data
})

export const handleChangeText = (): IHANDLECHANGETEXTAction => ({
    type: HANDLECHANGETEXT,
    payload: event
})

export const handleSnackBarOpen = (): IHANDLESNACKBAROPENAction => ({
    type: HANDLESNACKBAROPEN
})

export const handleSnackBarClose = (): IHANDLESNACKBARCLOSEAction => ({
    type: HANDLESNACKBARCLOSE
})

export const handleClick = (payload: string, data: any): IHANDLECLICKAction => ({
    type: HANDLECLICK,
    payload,
    data
})

export const handleClose = (payload: string, data: string): IHANDLECLOSEAction => ({
    type: HANDLECLOSE,
    payload,
    data
})

export const handleSubmit = (payload: string, data: any): IHANDLESUBMITAction => ({
    type: HANDLESUBMIT,
    payload,
    data
})