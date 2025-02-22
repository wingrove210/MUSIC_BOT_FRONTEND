import "./index.css";
import EmptyItems from "../EmptyItems/index";
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <EmptyItems className="top-[-100px]" />
    </div>
  );
}
