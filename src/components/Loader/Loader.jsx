import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loader;
