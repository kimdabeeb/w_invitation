import { Gallery, Item } from 'react-photoswipe-gallery';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'photoswipe/style.css';
import { CustomEn } from '@/components/ContentsFont';
import { TitleCont, Wrap } from '@/components/ContentsWrap';
import images from '@/layout/Gallery/Images.ts';
import '@/layout/Gallery/gallery.css';

const PhotoGallery = () => {
  const options = {
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    maxSpreadZoom: 1,
    pinchToClose: false,
    allowUserZoom: false,
    wheelToZoom: false,
    closeOnScroll: false,
  }

  const smallItemStyles: React.CSSProperties = {
    cursor: 'none',
    objectFit: 'contain',
    width: '100%',
    // height: 'auto', 
    // maxWidth: '100%',
    maxHeight: '100%',
  };

  const handleModalEvents = (instance: any) => {
    const modalEl = instance.pswp?.element;

    if (modalEl) {
      modalEl.classList.add('modal-loading');
      instance.pswp?.on('afterChange', () => {
        modalEl.classList.remove('modal-loading');
      });

      // 확대/축소 및 더블클릭 방지
      modalEl.addEventListener('dblclick', (e: MouseEvent) => e.preventDefault());
      modalEl.addEventListener('wheel', (e: WheelEvent) => e.preventDefault());
      modalEl.addEventListener('touchmove', (e: TouchEvent) => e.preventDefault());
    }
  };

  return (
    <Wrap style={{ paddingLeft: '0', paddingRight: '0'}}>
      <div data-aos="fade-up">
        <CustomEn>Gallery</CustomEn>
        <TitleCont style={{ paddingBottom: 'calc(var(--el-between)* 2)'}}></TitleCont>
        {/* <TitleCont>
          <Title style={{fontSize:'.825rem'}}>사진을 클릭하시면 전체 화면 보기가 가능합니다</Title>
        </TitleCont> */}
      </div>
      <Wrap data-aos="fade-up" style={{ padding: '0 0 3rem 0' }}>
        <Gallery 
          options={options}
          onOpen={handleModalEvents}
          // onOpen={(instance) => {
          //   const modalEl = instance.pswp?.element;

          //   if (modalEl && instance.pswp) {
          //     modalEl.addEventListener('click', () => {
          //       instance.pswp?.close();
          //     });
          //   }
          // }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            style={{ overflow: 'visible' }}
            slidesPerView={1.2}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            pagination={{
              type: 'fraction',
              clickable: true,
            }}
            navigation={true}>
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* <Item original={image.source} thumbnail={image.source} width="1920" height="1280"> */}
                  <Item 
                    original={image.source} 
                    thumbnail={image.source} 
                    width="1920" height="1280"
                    >
                    {({ ref, open }) => (
                      <img
                        style={smallItemStyles}
                        alt={image.alt}
                        src={image.source}
                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                        onClick={open}
                        draggable={false} 
                        onDoubleClick={(e) => e.preventDefault()} 
                        // onClick={() => handleItemClick(open)}
                      />
                    )}
                  </Item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Gallery>
      </Wrap>
    </Wrap>
  );
};

export default PhotoGallery;
