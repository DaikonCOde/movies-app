import React, { useState } from 'react';

import Search from '../Search';

import { ContentHeader, Brand, Menu } from './HeaderStyles';
import { MdMenu, MdSearch} from 'react-icons/md';

const Header = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <ContentHeader>
        <Brand>
          <span>
            eFlix
          </span>
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
