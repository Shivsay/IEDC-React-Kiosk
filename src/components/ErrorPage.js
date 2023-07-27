import { useRouteError } from "react-router-dom";
import SideBar from "./SideBar";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div>
        <SideBar />
        <div className='content'>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
  );
}

export default ErrorPage;
