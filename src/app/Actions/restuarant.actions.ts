import { Action } from '@ngrx/store'
import { Restuarant } from '../Models/restuarant.model'


export enum RestuarantActionTypes {
    LOAD_RESTUARANTS = '[Restuarant] Load Restuarants',
    ADD_RESTUARANT = '[Restuarant] Add Restuarant',
    VEG_RESTUARANT = '[Restuarant] Veg Restuarant',
    NONVEG_RESTUARANT = '[Restuarant] Non Veg Restuarant',
    REMOVE_RESTUARANT = '[Restuarant] Remove Restuarant',
    SEARCH_RESTUARANT = '[Restuarant] Search Restuarant'
}



export class LoadRestuarants implements Action{
    readonly type = RestuarantActionTypes.LOAD_RESTUARANTS

    constructor(public payload?: {data : Restuarant[]}){}
}

export class AddRestuarants implements Action{
    readonly type = RestuarantActionTypes.ADD_RESTUARANT

    constructor(public payload: Restuarant){}
}
export class RemoveRestuarant implements Action{
   readonly type = RestuarantActionTypes.REMOVE_RESTUARANT

    constructor(public payload: number){}
}


export class VegRestuarant implements Action{
    readonly type = RestuarantActionTypes.VEG_RESTUARANT
}
export class NonVegRestuarant implements Action{
    readonly type = RestuarantActionTypes.NONVEG_RESTUARANT
}
export class SearchRestuarant implements Action{
    readonly type = RestuarantActionTypes.SEARCH_RESTUARANT

    constructor(public payload : string){}
}



export type Actions = LoadRestuarants | AddRestuarants | RemoveRestuarant | VegRestuarant | NonVegRestuarant | SearchRestuarant;

