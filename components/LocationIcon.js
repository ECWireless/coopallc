import { Box } from '../components/Boxes';

const LocationIcon = () => {
  return (
    <Box width={60} marginTop={50} marginLeft={30}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>location</title>
        <path
          fill="#FFF"
          d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
        ></path>
      </svg>
    </Box>
  );
};

export default LocationIcon;
