import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import { ContentHeader, Brand, Menu } from './HeaderStyles';
import { MdMenu, MdSearch} from 'react-icons/md';

const Header = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <ContentHeader>
        <Brand>
          <Link to='/'>
            <span>
              eFlix
            </span>
          </Link>
        </Brand>
        <Menu>
          <MdSearch className="search" onClick={() => setIsOpen(true)} />
          <MdMenu />
        </Menu>
      </ContentHeader>
      <Search isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
  };

export default Header;
