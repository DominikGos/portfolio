import type Project from "@/Interfaces/Project";

const projectModal = {
    state: {
        project: null,
    },

    mutations: {
        setProject(state: any, project?: Project): void {
            state.project = project;
        },
    }
}

export default projectModal;