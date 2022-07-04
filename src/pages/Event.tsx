import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export const Event = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const asideControls = useAnimation();

  function handleOpenSideBar() {
    setIsSideBarOpened(true);
    asideControls.start('show');
  }

  function handleCloseSideBar() {
    setIsSideBarOpened(false);
    asideControls.start('hidden');
  }

  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header
        isSideBarOpened={isSideBarOpened}
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
      />
      <main className="flex flex-1 relative overflow-hidden">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar asideControls={asideControls} />
      </main>
    </div>
  );
};
