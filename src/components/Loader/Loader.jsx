import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleLoader size={80} color="#ffffff" loading />
    </div>
  );
};

export default Loader;
