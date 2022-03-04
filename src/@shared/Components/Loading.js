import { useContext } from "react";
import LoadingContext from "../../contextApi/LoadingContext";
import './Loading.scss'

function Loading() {
  const loading = useContext(LoadingContext);
  if(!loading.state.isLoading) return null;
  return <>
    <div className="overlay">
      <div>
        <div className="spinner">
        </div>
    </div>
  </div>
  </>
}

export default Loading;
