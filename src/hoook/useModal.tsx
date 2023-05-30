import { useState } from "react"

interface Modal {
    isOpen: boolean
    handleOpenModal: () => void
    handleCloseModal: () => void
}

export const useModal = ():Modal => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    
    return { isOpen, handleOpenModal, handleCloseModal }
    }