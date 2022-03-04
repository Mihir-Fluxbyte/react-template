export function add(state, action){
    return {
        ...state,
        ids : [...new Set([...state.ids, action.payload.id])],
        entities: {
            ...state.entities,
            [action.payload.id]: action.payload
        }
    }
}

export function destroy(state, action){
    const newId = state.ids.filter(i=> i!==action.payload.id);
    const { [action.payload.id]: _removedEntity, ...filteredEntities } = state.entities; 
    return {
        ...state,
        ids : newId,
        entities: filteredEntities
    }
}

export function load(state, action){

}

export function update(state, action){

}

export default {
    add: add,
    update: update,
    destroy: destroy,
    load: load
}
