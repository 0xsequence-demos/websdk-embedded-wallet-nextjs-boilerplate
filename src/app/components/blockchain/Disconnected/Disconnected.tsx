import { useOpenConnectModal } from "@0xsequence/kit";

const Disconnected = () => {
  const { setOpenConnectModal } = useOpenConnectModal();
  const onClickConnect = () => {
    setOpenConnectModal(true);
  };

  return (
    <>
      <p>Not connected</p>
      <div className="card">
        <button onClick={onClickConnect}>Connect</button>
      </div>
    </>
  );
};

export default Disconnected;
