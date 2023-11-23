import { createStore } from 'vuex';
import mainSection from './Modules/mainSection';

const store = createStore({
    modules: {
        mainSection,
    }
})

export { store }