import { createStore } from 'vuex';
import mainSection from './Modules/mainSection';
import projectModal from './Modules/projectModal';

const store = createStore({
    modules: {
        mainSection,
        projectModal,
    }
})

export { store }