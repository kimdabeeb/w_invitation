import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Wrapper, GalleryWrap } from '@/components/ContentsWrap';
import Intro from '@/layout/Invitation/Intro';
import ShareBox from '@/layout/Invitation/ShareBox';
import CalendarWrap from '@/layout/Calendar/CalendarWrap';
import HostContact from '@/layout/Contact/HostContact';
import SendMessage from '@/layout/Contact/SendMessage';
import PhotoGallery from '@/layout/Gallery/PhotoGallery';
import Location from '@/layout/Location/Location';
import Account from '@/layout/Account/Account';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 50,
      duration: 1500,
      once: false,
    });

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Container>
        <Wrapper>
          <Intro />
          <CalendarWrap />
          <HostContact />
          <GalleryWrap ref={galleryRef}>
            <PhotoGallery />
          </GalleryWrap>
          <Location />
          <Account />
          <SendMessage />
          <ShareBox />
          <FloatingBar isVisible={isVisible} />
        </Wrapper>
      </Container>
    </NavermapsProvider>
  );
}

export default App;
