import { HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLECLICK, HANDLECLOSE,
    HANDLEEDITSUBMIT, HANDLECREATESUBMIT, HANDLEJOINSUBMIT } from 'src/constants/UserPanel';

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
    groupName: string
}

export interface IHANDLECLOSEAction {
    type: HANDLECLOSE,
    payload: any,
    groupName: string
}

export interface IHANDLESUBMITAction {
    type: HANDLEEDITSUBMIT,
}

export interface IHANDLECREATESUBMITAction {
    type: HANDLECREATESUBMIT,
}

export interface IHANDLEJOINSUBMITAction {
    type: HANDLEJOINSUBMIT
}

export type ModifyAction = IHANDLECHANGETEXTAction | IHANDLESNACKBAROPENAction | IHANDLESNACKBARCLOSEAction | IHANDLECLICKAction 
| IHANDLECLOSEAction | IHANDLESUBMITAction | IHANDLECREATESUBMITAction | IHANDLEJOINSUBMITAction;

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

export const handleClick = (payload: string, groupName: string): IHANDLECLICKAction => ({
    type: HANDLECLICK,
    payload,
    groupName
})

export const handleClose = (payload: string, groupName: string): IHANDLECLOSEAction => ({
    type: HANDLECLOSE,
    payload,
    groupName
})

export const handleCreateSubmit = (): IHANDLECREATESUBMITAction => ({
    type: HANDLECREATESUBMIT,
})

export const handleSubmit = (): IHANDLESUBMITAction => ({
    type: HANDLEEDITSUBMIT,
})

export const handleJoinSubmit = (): IHANDLEJOINSUBMITAction => ({
    type: HANDLEJOINSUBMIT
})