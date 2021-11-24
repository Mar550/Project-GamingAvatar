import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';


const app_reducer = (state,actions) => {
    console.log(`this is states ${state}`);

        //return {...state};

        if(actions.type === SIDEBAR_OPEN) {

            return{...state, isSidebarOpen:true}

        }
        throw new Error(`No action is matched in ${actions.type}`);
 
}

export default app_reducer;