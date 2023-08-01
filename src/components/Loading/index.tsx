import { Backdrop } from "../Modal/ModalRoot";

export default function Loading() {
  return (
      <Backdrop className="z-[10000]">
      <div style={{ textAlign: "center" }}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Backdrop>
  );
}
