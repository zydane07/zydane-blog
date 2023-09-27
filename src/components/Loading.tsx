const Loading = () => {
  return (
    <>
      <div
        className=" fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/[0.05]"
        style={{
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    </>
  );
};

export default Loading;
