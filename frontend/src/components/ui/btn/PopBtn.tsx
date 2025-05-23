import {
  animationManager,
  useGSAP,
} from "../../../_lib/gsap/animation-manager";

type ModalType = "formModal" | "sheetInfoModal";
interface Props {
  showModal: boolean;
  whichModal: ModalType;
  text: string;
  iconDirection?: string;
  className?: string;
}
const PopBtn = ({
  iconDirection = "btn--right",
  text = "Explorar",
  showModal = false,
  whichModal = "formModal",
  className = "btn",
}: Props) => {
  const { contextSafe } = useGSAP({ dependencies: [showModal] });

  const handleBtn = contextSafe(() => {
    animationManager.toggleModal({ open: showModal, className: whichModal });
  });
  return (
    <button
      className={`btn ${className} ${iconDirection}`}
      onClick={() => handleBtn()}
    >
      {text}
    </button>
  );
};

export default PopBtn;
