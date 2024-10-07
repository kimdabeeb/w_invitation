import Calendar from 'react-calendar';
import moment from 'moment';
import data from 'data.json';
import { Wrap, TitleCont } from '@/components/ContentsWrap';
import { CustomEn, Title } from '@/components/ContentsFont';
import 'react-calendar/dist/Calendar.css';

const CalendarWrap = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];
  const markedDate = moment(marks[0], 'DD-MM-YYYY').toDate();

  return (
    <Wrap data-aos="fade-up" data-aos-delay="150" style={{ marginBottom: '3rem' }}>
      <CustomEn>WEDDING DAY</CustomEn>
      <TitleCont>
        <Title>{greeting.eventDay}</Title>
        <Title>Saturday, March 1, 2025 | PM 15:40 </Title>
      </TitleCont>
      <hr style={{ borderTop: '1px solid #e5e7eb', margin: '0 auto 2rem' }} />
      <div data-aos="fade-up" data-aos-delay="300">
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
      .react-calendar * {
        text-decoration: unset!important;
      }
      .react-calendar {
        font-family: GowunBatang;
        border: none;
      .highlight {
        background: #afc8d4;
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
        max-width: 43px!important;
        position: relative;
        left: 0;
      }
      
      .react-calendar__navigation__label__labelText { font-size: 1.125rem; }
      .react-calendar__tile { font-size: .95em; padding-top: 12px; padding-bottom:12px; }
      .react-calendar__tile--active,
      .react-calendar__navigation__label {
        background: #fff;
        font-family: GowunBatang;
        color:#000;
      }
      .react-calendar__month-view__weekdays {margin-bottom:.6rem;}
      .react-calendar__month-view__days__day--neighboringMonth {color: #5F5F5F;}
      .react-calendar__navigation {
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0 .5rem;
        margin-bottom: 2rem;
          .react-calendar__navigation button {
            font-size: 1rem;
            min-width: 20px;
          }
          .react-calendar__navigation__label {
            width: 5.5rem;
            height: 1.375rem;
            font-size: 16px;
            border: none;
            font-weight: 700;
            background-color: #fff;
          }
      }
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__navigation button:enabled:hover, 
      .react-calendar__navigation button:enabled:focus {
        background-color: unset;
      }
    }
    `}</style>
    </Wrap>
  );
};

export default CalendarWrap;

