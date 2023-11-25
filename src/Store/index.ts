import { createStore } from 'vuex';
import mainSection from './Modules/mainSection';
import projectModal from './Modules/projectModal';

const store: any = createStore({
    modules: {
        mainSection,
        projectModal,
    }
})

export { store }