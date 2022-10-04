import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import Modal from '@core/ui/src/components/Window/components/Modal';
import { v4 as uuidv4 } from 'uuid';
interface IAddModal {
  title: string;
  content: ReactNode;
  returnButtonAction: () => void;
  confirmButtonAction: () => void;
}

interface ContextProps {
  addModal: (object: IAddModal) => void;
}

interface ModalContextProvider {
  children: ReactNode;
}

interface ITemplateRemoveModal {
  hook: () => void;
  id: string;
}

const Context = createContext({} as ContextProps);
const modalRoot = document.getElementById('modals');

const ModalContextProvider: React.FC<ModalContextProvider> = ({ children }) => {
  const [modais, setModais] = useState<Array<{ id: string; tag: ReactNode }>>(
    []
  );
  const rootElemRef = React.useRef(document.createElement('div'));

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(rootElemRef.current);
    }
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, []);

  function templateRemoveModal({ hook, id }: ITemplateRemoveModal) {
    const newModais = modais.filter((modal) => modal.id !== id);
    setModais(newModais);
    hook();
  }

  function addModal({
    confirmButtonAction,
    content,
    returnButtonAction,
    title,
  }: IAddModal) {
    const id = uuidv4();
    setModais([
      ...modais,
      {
        id,
        tag: (
          <Modal
            key={id}
            headerTitle={title}
            confirmButton={() =>
              templateRemoveModal({
                hook: confirmButtonAction,
                id,
              })
            }
            goBack={() =>
              templateRemoveModal({
                hook: returnButtonAction,
                id,
              })
            }
          >
            {content}
          </Modal>
        ),
      },
    ]);
  }

  return (
    <Context.Provider value={{ addModal }}>
      {ReactDOM.createPortal(
        <>{modais.map((modal) => modal.tag)}</>,
        rootElemRef.current
      )}
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => useContext(Context);

export default ModalContextProvider;
