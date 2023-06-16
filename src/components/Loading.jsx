import loading from "../assets/loading.gif";
export default function Loading() {
  return (
    <div className="bg-black flex h-screen w-screen flex-col items-center justify-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
}
