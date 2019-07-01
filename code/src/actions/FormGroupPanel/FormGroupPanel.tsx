import { HANDLELOAD, HANDLECHANGESTATUS, HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLECLICK, HANDLECLOSE, HANDLESUBMIT } from 'src/constants/FormGroupPanel';

export interface IHANDLELOADAction {
    type: HANDLELOAD,
    payload: JSON
}

export interface IHANDLECHANGESTATUSAction {
    type: HANDLECHANGESTATUS,
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
    payload: any
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
    data: string
}

export type ModifyAction = IHANDLELOADAction | IHANDLECHANGESTATUSAction | IHANDLECHANGETEXTAction | IHANDLESNACKBAROPENAction | IHANDLESNACKBARCLOSEAction | IHANDLECLICKAction 
| IHANDLECLOSEAction | IHANDLESUBMITAction ;

export const handleLoad = (payload:JSON): IHANDLELOADAction => ({
    type: HANDLELOAD,
    payload,
})

export const handleChangeStatus = (payload: string, data: any): IHANDLECHANGESTATUSAction => ({
    type: HANDLECHANGESTATUS,
    event,
    payload,
    data
})

export const handleChangeText = (): IHANDLECHANGETEXTAction => ({
    type: HANDLECHANGETEXT,
    payload: event
})

export const handleSnackBarOpen = (payload: any): IHANDLESNACKBAROPENAction => ({
    type: HANDLESNACKBAROPEN,
    payload
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

export const handleSubmit = (payload: string, data: string): IHANDLESUBMITAction => ({
    type: HANDLESUBMIT,
    payload,
    data
})