export default(state = [], action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                animal: action.item
            }
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'finishLoading':
            return {
                ...state,
                weather: action.weather,
                loading: false
            }
        default:
            console.log("state", state);

    }
    return state;
}