import { HANDLECHANGETEXT, HANDLESNACKBAROPEN, HANDLESNACKBARCLOSE, HANDLEEDITCLICK, HANDLEEDITCLOSE, HANDLECREATECLICK, HANDLECREATECLOSE, HANDLEJOINCLICK, HANDLEJOINCLOSE, HANDLEEDITSUBMIT, HANDLECREATESUBMIT, HANDLEJOINSUBMIT } from 'src/constants/UserPanel';

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

export interface IHANDLEEDITCLICKAction {
    type: HANDLEEDITCLICK,
}

export interface IHANDLEEDITCLOSEAction {
    type: HANDLEEDITCLOSE,
}

export interface IHANDLECREATECLICKAction {
    type: HANDLECREATECLICK,
}

export interface IHANDLECREATECLOSEAction {
    type: HANDLECREATECLOSE,
}

export interface IHANDLEJOINCLICKAction {
    type: HANDLEJOINCLICK
}

export interface IHANDLEJOINCLOSEAction {
    type: HANDLEJOINCLOSE
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

export type ModifyAction = IHANDLECHANGETEXTAction | IHANDLESNACKBAROPENAction | IHANDLESNACKBARCLOSEAction | IHANDLEEDITCLICKAction 
| IHANDLEEDITCLOSEAction | IHANDLECREATECLICKAction | IHANDLECREATECLOSEAction| IHANDLEJOINCLICKAction | IHANDLEJOINCLOSEAction |  IHANDLESUBMITAction | IHANDLECREATESUBMITAction | IHANDLEJOINSUBMITAction;

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

export const handleEditClick = (): IHANDLEEDITCLICKAction => ({
    type: HANDLEEDITCLICK,
})

export const handleEditClose = (): IHANDLEEDITCLOSEAction => ({
    type: HANDLEEDITCLOSE,
})

export const handleCreateClick = (): IHANDLECREATECLICKAction => ({
    type: HANDLECREATECLICK,
})

export const handleCreateClose = (): IHANDLECREATECLOSEAction => ({
    type: HANDLECREATECLOSE,
})

export const handleJoinClick = (): IHANDLEJOINCLICKAction => ({
    type: HANDLEJOINCLICK,
})

export const handleJoinClose= (): IHANDLEJOINCLOSEAction => ({
    type: HANDLEJOINCLOSE,
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