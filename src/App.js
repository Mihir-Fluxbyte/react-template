import "./App.css";

import LoadingContext, {
  reducer as loadingReducer,
  initialLoadingState,
} from "./contextApi/LoadingContext";
import AuthContext, {
  reducer as authReducer,
  initialAuthState,
} from "./contextApi/AuthContext";
import { useReducer } from "react";
import Router from "./router";
import Provider from "./contextApi/Provider";
import Loading from "./@shared/Components/Loading";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./@store/store";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <Provider
          Context={LoadingContext}
          initialState={initialLoadingState}
          reducer={loadingReducer}
        >
          <Provider
            Context={AuthContext}
            initialState={initialAuthState}
            reducer={authReducer}
          >
            <Router />
            <Loading />
          </Provider>
        </Provider>
      </ReduxProvider>
    </>
  );
}

export default App;
