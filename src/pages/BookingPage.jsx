import { BiTime } from 'react-icons/bi';
import { FaCalendar, FaGlassCheers } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

import BookingForm from '../components/BookingForm';
import salad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.png';
import dessert from '../assets/lemon-dessert.jpg';

const BookingPage = () => {
  const images = [
    { src: salad, label: 'image1' },
    { src: bruchetta, label: 'image2' },
    { src: dessert, label: 'image3' },
  ];
  const data = [
    [
      {
        type: 'date',
        id: 'date',
        label: 'Date',
        required: true,
        placeholder: 'Select Date',
        icon: <FaCalendar />,
      },
      {
        type: 'select',
        id: 'time',
        label: 'Time',
        elements: [
          { label: '17:00', value: '17:00' },
          { label: '18:00', value: '18:00' },
          { label: '19:00', value: '19:00' },
          { label: '20:00', value: '20:00' },
          { label: '21:00', value: '21:00' },
          { label: '22:00', value: '22:00' },
        ],
        required: true,
        placeholder: 'Select Time',
        icon: <BiTime />,
      },
      {
        type: 'number',
        id: 'diners',
        label: 'Number of diners',
        completed: ' Diners',
        min: 1,
        max: 10,
        required: true,
        placeholder: 'Change Diners',
        icon: <BsPerson />,
      },
      {
        type: 'select',
        id: 'occasion',
        label: 'Occasion',
        elements: [
          { label: 'Birthday', value: 'birthday' },
          { label: 'Anniversary', value: 'anniversary' },
        ],
        required: true,
        placeholder: 'Select Occasion',
        icon: <FaGlassCheers />,
      },
      {
        type: 'radio',
        id: 'seating',
        label: 'Indoor seating',
        required: true,
        placeholder: 'Change seating',
        index: 'last',
        value: 'Indoor seating',
      },
      {
        type: 'radio',
        id: 'seating',
        label: 'Outdoor seating',
        required: true,
        placeholder: 'Change seating',
        index: 'last',
        value: 'Outdoor seating',
      },
    ],
    [
      {
        type: 'text',
        id: 'firstName',
        label: 'First name',
        required: true,
        placeholder: 'First name',
      },
      {
        type: 'text',
        id: 'lastName',
        label: 'Last name',
        required: true,
        placeholder: 'Last name',
      },
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        required: true,
        placeholder: 'you@company.com',
      },
      {
        type: 'tel',
        id: 'phone',
        label: 'Phone number',
        required: true,
        placeholder: 'Enter Phone number',
      },
      {
        type: 'textarea',
        id: 'special',
        label: 'Special Requests',
        placeholder: 'Comment',
      },
    ],
  ];

  const privacy = {
    type: 'checkbox',
    id: 'privacy',
    label: 'You agree to our friendly privacy policy',
    required: true,
    placeholder: 'Change seating',
    value: true,
  };

  return (
    <section className='bookingPage'>
      <BookingForm data={data} images={images} privacy={privacy} />
    </section>
  );
};

export default BookingPage;
