import { useState, useEffect } from 'react'
import Link from 'next/link'

import NavModal from './NavModal'

import Logo from '../public/logo.svg'
import BurgerIcon from '../public/icons/burger.svg'
import SkillsetIcon from '../public/icons/window_code.svg'
import FolderIcon from '../public/icons/folder_open.svg'
import UserIcon from '../public/icons/user_square.svg'

export default function Nav() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    showModal 
      ? document.body.style.overflow = 'hidden'
      : document.body.style.removeProperty('overflow')
  }, [showModal])

  useEffect(() => {
    return () => {
        setShowModal(false)
      }
  }, [])

  return (
      <nav className='Nav'>
        {showModal && <NavModal setShowModal={setShowModal} />}
        <div className='Nav__logo'>
          <Link href='/'><a><Logo /></a></Link>
        </div>
        <ul className='Nav__links'>
          <li className='Nav__links-burger'>
            <BurgerIcon onClick={() => setShowModal(!showModal)}/>
          </li>
          <li className='Nav__links-link'>
            <Link href='/skillset'><a>Skillset<SkillsetIcon /></a></Link>
          </li>
          <li className='Nav__links-link'>
            <Link href='/projects'><a>Projects<FolderIcon /></a></Link>
          </li>
          <li className='Nav__links-link'>
            <Link href='/about'><a>About<UserIcon /></a></Link>
          </li>
        </ul>
      </nav>
  )
}

