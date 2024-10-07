import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'photoswipe/style.css';
import { Wrap, TitleCont } from '@/components/ContentsWrap';
import { CustomEn, Title } from '@/components/ContentsFont';
import images from '@/layout/Gallery/Images.ts';
import '@/layout/Gallery/gallery.css';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
    // height: '150px',
  };

  return (
    <Wrap style={{ paddingLeft: '0', paddingRight: '0' }}>
      <div data-aos="fade-up">
        <CustomEn>Gallery</CustomEn>
        <TitleCont>
          <Title>사진을 클릭하시면 전체 화면 보기가 가능합니다</Title>
        </TitleCont>
      </div>
      <Wrap data-aos="fade" style={{ padding: '0' }}>
        <Gallery>
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
                  <Item original={image.source} thumbnail={image.source} width="1920" height="1280">
                    {({ ref, open }) => (
                      <img
                        style={smallItemStyles}
                        alt={image.alt}
                        src={image.source}
                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                        onClick={open}
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
