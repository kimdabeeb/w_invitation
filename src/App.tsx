import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavermapsProvider } from 'react-naver-maps';
import { Container, GalleryWrap, Wrapper } from '@/components/ContentsWrap';
import Account from '@/layout/Account/Account';
import CalendarWrap from '@/layout/Calendar/CalendarWrap';
import HostContact from '@/layout/Contact/HostContact';
import SendMessage from '@/layout/Contact/SendMessage';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import PhotoGallery from '@/layout/Gallery/PhotoGallery';
import Intro from '@/layout/Invitation/Intro';
import ShareBox from '@/layout/Invitation/ShareBox';
import Location from '@/layout/Location/Location';

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 20, // pixel
      delay: 200,
      duration: 1200,
      easing: 'ease-in',
      once: true,
    });
    AOS.refreshHard();

    //setScreenHeight();
    //window.addEventListener('resize', setScreenHeight);
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      //window.removeEventListener('resize', setScreenHeight);
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
          <CalendarWrap/>
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
