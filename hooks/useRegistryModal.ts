import {create} from 'zustand';

interface RegistryModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegistryModal = create<RegistryModalProps>((set) => ({
        isOpen: false,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false}),
    }
))

export default useRegistryModal;