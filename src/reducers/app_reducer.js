import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';


const app_reducer = (state,actions) => {

        //return {...state};

        if(actions.type === SIDEBAR_OPEN) {

            return{...state, isSidebarOpen:true}

        }

        if (actions.type === SIDEBAR_CLOSE){
            return {...state, isSidebarOpen:false}
        }
throw new Error(`No action is matched in ${actions.type}`);
 
}

export default app_reducer;