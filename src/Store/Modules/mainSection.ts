const mainSection = {
    state: {
        innerComponentName: 'AboutMe'
    },

    mutations: {
        setInnerComponentName(state: any, name?: string): void {
            state.innerComponentName = name;
        },
    }
}

export default mainSection;