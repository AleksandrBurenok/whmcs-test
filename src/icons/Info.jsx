const Info = ({ ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    {...restProps}
  >
    <path
      fill="#b5b5b5"
      strokeMiterlimit="10"
      d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 3v2h2V7zm0 4v6h2v-6z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      textAnchor="none"
      transform="scale(10.66667)"
    ></path>
  </svg>
);

export default Info;
