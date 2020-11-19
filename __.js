const state = {
    context: null
}

export default new class {
    get ["context"]() {
        return state.context
    }

    set ["context"](value) {
        state.context = value
    }
}