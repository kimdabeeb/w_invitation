import Calendar from 'react-calendar';
import moment from 'moment';
import data from '../../data.json';
import { Wrap, TitleCont } from '@/components/ContentsWrap';
import { CustomEn, Title } from '@/components/ContentsFont';
import 'react-calendar/dist/Calendar.css';

const CalendarWrap = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];
  const markedDate = moment(marks[0], 'DD-MM-YYYY').toDate();

  return (
    <Wrap style={{ marginBottom: '2.5rem' }}>
      <CustomEn data-aos="fade-up" data-aos-duration="1800">WEDDING DAY</CustomEn>
      <TitleCont data-aos="fade-up" data-aos-duration="1800">
        <Title>{greeting.eventDay}</Title>
        <Title>Saturday, March 1, 2025 | PM 15:40 </Title>
        <hr style={{ borderTop: '1px solid #e5e7eb', margin: '3rem auto 0' }} />
      </TitleCont>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Calendar
          formatDay={(locale = 'ko', date) => moment(date).locale(locale).format('D')}
          selectRange={false}
          calendarType="gregory"
          showNeighboringMonth={false}
          minDetail="month"
          prevLabel={null}
          nextLabel={null}
          prev2Label={null}
          next2Label={null}
          activeStartDate={new Date(2025, 2, 1)}
          tileClassName={({ date }) => {
            return moment(date).isSame(markedDate, 'day') ? 'highlight' : '';
          }}
        />
      </div>
      <style>{`
      .react-calendar * {background: #fff!important; font-family: GowunBatang; text-decoration: unset!important;}
      .react-calendar {border: none;
        .highlight {
          background: #afc8d4;
          border-radius: 50%;
          max-width: 38px!important;
          position: relative;
          left: 6px;
        }
      }
      
      .react-calendar__navigation {margin-bottom: 1.5rem;}
      .react-calendar__navigation__label__labelText { font-size: 1.25rem; color:#171717;}
      .react-calendar__title { font-size: .95rem; padding-top: 12px; padding-bottom:12px; color:#171717!important; }
     // .react-calendar > button:hover,  .react-calendar > button.active { cursor: none; background: unset; }
      .react-calendar__month-view__days__day--weekend.highlight {color: #fff!important; font-weight: bold;}
      .react-calendar__tile.react-calendar__month-view__days__day {color:#171717!important;}
      .react-calendar__tile.react-calendar__month-view__days__day--weekend {color: #d10000!important;}
      .react-calendar__month-view__weekdays {margin-bottom:.6rem;}
      .react-calendar__navigation {}

      ..react-calendar__viewContainer,
      .react-calendar__tile--active,
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__navigation button:disabled,
      .react-calendar__navigation button:enabled:hover, 
      .react-calendar__navigation button:enabled:focus { background-color: unset!important; background: unset!important; cursor: none; pointer-events: none;}
    }
    `}</style>
    </Wrap>
  );
};

export default CalendarWrap;

