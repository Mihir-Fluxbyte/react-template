import { useReducer, useMemo } from "react";

function Provider({ Context, initialState, reducer, children }) {
  if (typeof initialState === "function")
  initialState = initialState()

  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <Context.Provider value={{ state: contextValue.state, dispatch: contextValue.dispatch }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
