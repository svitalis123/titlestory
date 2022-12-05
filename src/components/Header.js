import React from 'react';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { BsBook } from 'react-icons/bs';
import { VscUnlock } from 'react-icons/vsc';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from '../css/Header.module.css';

// Header function exported as default renders header content
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerdiv1}>
        <HiChevronDoubleRight className={styles.headerfirsticon} />
        <nav className={styles.headerdiv1nav}>
          <BsBook className={styles.headersecondiconbook} />
          <button type="button" className={styles.headernavbutton1}>Main</button>
          <span className={styles.headernavspans}>/</span>
          <button type="button" className={styles.headernavbuttons}>Getting started</button>
          <span className={styles.headernavspans}>/</span>
          <button type="button" className={styles.headernavbuttons}>Front-end developer test proje...</button>
        </nav>
      </div>
      <div className={styles.headerdiv2}>
        <VscUnlock className={styles.headerbutton2diviconlock} />
        <button type="button" className={styles.headernavbuttons}>Editing</button>
        <span className={styles.headernavspans}>|</span>
        <button type="button" className={styles.headerseconddivpublishbtn}>
          Publish Space
          <MdKeyboardArrowDown className={styles.headerbuton2div2caretdown} />
        </button>
      </div>
    </header>
  );
}
