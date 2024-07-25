import Link from 'next/link'

import CloseIcon from '../public/icons/close.svg'
import HomeIcon from '../public/icons/home.svg'
import SkillsetIcon from '../public/icons/window_code.svg'
import FolderIcon from '../public/icons/folder_open.svg'
import UserIcon from '../public/icons/user_square.svg'

export default function NavModal({ setShowModal }) {
  const closeModal = () => setShowModal(false)

  return (
    <div className='NavModal'>
      <button className='NavModal__close' onClick={closeModal}>
        <CloseIcon />
      </button>
      <ul className='NavModal__links'>
        <li className='NavModal__links-link' onClick={closeModal}>
          <Link href='/'>Home<HomeIcon /></Link>
        </li>
        <li className='NavModal__links-link' onClick={closeModal}>
          <Link href='/skillset'>Skillset<SkillsetIcon /></Link>
        </li>
        <li className='NavModal__links-link' onClick={closeModal}>
          <Link href='/projects'>Projects<FolderIcon /></Link>
        </li>
        <li className='NavModal__links-link' onClick={closeModal}>
          <Link href='/about'>About<UserIcon /></Link>
        </li>
      </ul>
    </div>
  );
}
