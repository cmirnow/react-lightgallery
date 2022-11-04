const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="font-face-ps">
      <a
        href="https://github.com/cmirnow/react-lightgallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`© Masterpro.ws Project ${year}`}
      </a>
    </footer>
  );
};

export default Footer;
