export enum REGION_TYPES {
    ADD_REGION = 'REGION/ADD_REGION',
    UPDATE_REGION = 'REGION/UPDATE_REGION',
}


const initialState = {
    region: [
        'Владимирская',
        'Ивановская',
        'Ярославская',
        'Татарстан',
        'Пермский край',
        'Краснодарский край',
    ]
}

export type StateType = {
    region: string[]
}

export const RegionReducer =(state: StateType = initialState, action: ActionType): StateType=>{
    switch (action.type) {
        case REGION_TYPES.ADD_REGION:
            return {...state, region: [...state.region, action.region]}
        default:
            return {...state}
    }
}

export const addRegionAC =(region: string)=> ({type: REGION_TYPES.ADD_REGION, region}as const)

export type ActionType = ReturnType<typeof addRegionAC>
