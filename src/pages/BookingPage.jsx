import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const data = [
    {
      type: 'radio',
      id: 'seating',
      label: 'Indoor seating',
    },
    {
      type: 'radio',
      id: 'seating',
      label: 'Outdoor seating',
    },
    {
      type: 'date',
      id: 'date',
      label: 'Date',
    },
    {
      type: 'select',
      id: 'time',
      label: 'Time',
      elements: [
        {
          name: 'Select Time',
          disabled: true,
          value: '',
        },
        { name: '17:00', value: '17:00' },
        { name: '18:00', value: '18:00' },
        { name: '19:00', value: '19:00' },
        { name: '20:00', value: '20:00' },
        { name: '21:00', value: '21:00' },
        { name: '22:00', value: '22:00' },
      ],
    },
    {
      type: 'number',
      id: 'dinners',
      label: 'Number of dinners',
      min: 1,
      max: 10,
      placeholder: 1,
    },
    {
      type: 'select',
      id: 'occasion',
      label: 'Occasion',
      elements: [
        {
          name: 'Select Occasion',
          disabled: true,
          value: '',
        },
        { name: 'Birthday', value: 'birthday' },
        { name: 'Anniversary', value: 'anniversary' },
      ],
    },
    {
      type: 'text',
      id: 'firstName',
      label: 'First name',
      placeholder: 'First name',
    },
    {
      type: 'text',
      id: 'lastName',
      label: 'Last name',
      placeholder: 'Last name',
    },
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      placeholder: 'you@company.com',
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone number',
      placeholder: '+380959999999',
    },
    {
      type: 'textarea',
      id: 'special',
      label: 'Special Requests',
      placeholder: 'Comment',
    },
  ];
  return (
    <section className='bookingPage'>
      <BookingForm data={data} />
    </section>
  );
};

export default BookingPage;
