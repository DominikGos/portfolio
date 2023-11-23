const mainSection = {
    state: {
        innerComponentName: null
    },

    mutations: {
        setInnerComponentName(state: any, name?: string): void {
            state.innerComponentName = name;
        },
    }
}

export default mainSection;