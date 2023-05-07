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
    {
      type: 'radio',
      id: 'seating',
      label: 'Indoor seating',
      required: true,
    },
    {
      type: 'radio',
      id: 'seating',
      label: 'Outdoor seating',
      required: true,
    },
    {
      type: 'date',
      id: 'date',
      label: 'Date',
      required: true,
      placeholder: 'Select Date',
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
    },
    {
      type: 'number',
      id: 'dinners',
      label: 'Number of dinners',
      min: 1,
      max: 10,
      required: true,
      placeholder: 1,
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
    },
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
      placeholder: '+380959999999',
    },
    {
      type: 'textarea',
      id: 'special',
      label: 'Special Requests',
      placeholder: 'Comment',
    },
  ];
  data.map((e) => (e.name = e.id));
  return (
    <section className='bookingPage'>
      <BookingForm data={data} images={images} />
    </section>
  );
};

export default BookingPage;
