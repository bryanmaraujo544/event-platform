import { Logo } from './Logo';
import { List, X } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

interface Props {
  isSideBarOpened: boolean;
  handleOpenSideBar: () => void;
  handleCloseSideBar: () => void;
}

export const Header = ({
  isSideBarOpened,
  handleCloseSideBar,
  handleOpenSideBar,
}: Props) => {
  return (
    <header className="w-full py-5 px-4 flex align-center justify-between  bg-gray-700 border-b border-gray-600 md:px-0 md:justify-center ">
      <Logo />
      <div className="flex self-center align-center md:hidden">
        Aulas
        <button onClick={() => handleOpenSideBar()}>
          <List
            size={24}
            className={classNames('text-blue-300 ml-2', {
              hidden: isSideBarOpened,
              inline: !isSideBarOpened,
            })}
          />
        </button>
        <button onClick={() => handleCloseSideBar()}>
          <X
            size={24}
            className={classNames('text-blue-300 ml-2', {
              inline: isSideBarOpened,
              hidden: !isSideBarOpened,
            })}
          />
        </button>
      </div>
    </header>
  );
};
