import { ReactNode } from "react";
import { BottomSheet as Bs } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => (
  <Bs open={isOpen} onDismiss={onClose}>
    <div className="p-4 pt-0 flex flex-col gap-4 ">{children}</div>
  </Bs>
);

export { BottomSheet };
export type { BottomSheetProps };
