import moment from 'moment';
import Calendar from 'react-calendar';
import Dday from './Dday';
import data from '../../data.json';
import { CustomEn, Title } from '@/components/ContentsFont';
import { TitleCont, Wrap } from '@/components/ContentsWrap';
import 'react-calendar/dist/Calendar.css';

const CalendarWrap = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];
  const markedDate = moment(marks[0], 'DD-MM-YYYY').toDate();

  return (
    <Wrap style={{ marginBottom: '2.5rem' }}>
      <CustomEn data-aos="fade-up">
        WEDDING DAY
      </CustomEn>
      <TitleCont data-aos="fade-up">
        <Title>{greeting.eventDay}</Title>
        <Title>Saturday, March 1, 2025 | PM 15:40 </Title>
      </TitleCont>
      <div data-aos="fade-up">
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
      .react-calendar * {width: 100%!important; font-family: 'GowunDodum'; text-decoration: unset!important;}
      .react-calendar,.react-calendar__navigation button:disabled {background: #fff!important; border: none;}
      .react-calendar__navigation {display: none;}
      .react-calendar__navigation__label__labelText { font-size: 1.1rem; color:#171717;}
      .react-calendar__title { font-size: .95rem; padding-top: 12px; padding-bottom:12px; color:#171717!important; }
      .react-calendar__tile--active { cursor: none; background: unset!important; }
      .react-calendar__month-view {border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 2rem 0; margin-bottom: 2rem;}
      .react-calendar__month-view__days__day--weekend.highlight {color: #fff!important; font-weight: bold;}
      .react-calendar__tile.react-calendar__month-view__days__day {color:#171717!important;}
      .react-calendar__tile.react-calendar__month-view__days__day--weekend {color: #d10000!important;}
      .react-calendar__tile.react-calendar__month-view__days__day--weekend.highlight { background: #cfe3ec!important; color: #ffffff!important; border-radius: 50%; font-size:1rem; aspect-ratio: 1 / .95; position: relative; top: -2px;}
      .react-calendar__month-view__weekdays {margin-bottom:.6rem;}
      .react-calendar__navigation {}

      .react-calendar__viewContainer,
      .react-calendar__tile--active,
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__navigation button:disabled,
      .react-calendar__navigation button:enabled:hover, 
      .react-calendar__navigation button:enabled:focus {background-color: unset!important; background: unset!important; cursor: none; pointer-events: none;}
    }
    `}</style>
      <Dday />
    </Wrap>
  );
};

export default CalendarWrap;

