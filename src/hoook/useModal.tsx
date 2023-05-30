import { useState } from 'react'

interface IModal {
  isOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

export const useModal = (): IModal => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return { isOpen, handleOpenModal, handleCloseModal }
}
