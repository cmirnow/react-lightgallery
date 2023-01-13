const Footer = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="font-face-ps">
      <a
        alt="Masterpro Project"
        title="Masterpro Project"
        href="https://masterpro.ws/react-componentwillmount-componentdidmount"
        target="_blank"
        rel="noreferrer"
      >
        Masterpro.ws{" "}
        {startYear === currentYear ? startYear : startYear + "-" + currentYear}
      </a>
    </footer>
  );
};

export default Footer;
