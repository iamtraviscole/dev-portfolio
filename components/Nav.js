import { useState, useEffect } from 'react'
import Link from 'next/link'

import NavModal from './NavModal'

import Logo from '../public/logo.svg'
import BurgerIcon from '../public/icons/burger.svg'
import SkillsetIcon from '../public/icons/window_code.svg'
import FolderIcon from '../public/icons/folder_open.svg'
import UserIcon from '../public/icons/user_square.svg'
import MoonIcon from '../public/icons/moon.svg'
import SunIcon from '../public/icons/sun.svg'

import { useThemeContext } from '../context/ThemeContext'

export default function Nav() {
  const [showModal, setShowModal] = useState(false)
  const { theme, setTheme } = useThemeContext()

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
        <Link href='/' passHref><Logo /></Link>
      </div>
      <ul className='Nav__links'>
        <li className='Nav__links-link'>
          <Link href='/skillset' passHref>Skillset<SkillsetIcon /></Link>
        </li>
        <li className='Nav__links-link'>
          <Link href='/projects' passHref>Projects<FolderIcon /></Link>
        </li>
        <li className='Nav__links-link'>
          <Link href='/about' passHref>About<UserIcon /></Link>
        </li>
        <li className='Nav__links-theme'>
          {theme === 'light'
            ? <button onClick={() => setTheme('dark')}><MoonIcon /></button>
            : <button onClick={() => setTheme('light')}><SunIcon /></button>}
        </li>
        <li className='Nav__links-burger'>
          <BurgerIcon onClick={() => setShowModal(!showModal)}/>
        </li>
      </ul>
    </nav>
  );
}

