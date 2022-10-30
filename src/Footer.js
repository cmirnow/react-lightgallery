const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="google-font">{`© Masterpro.ws Project ${year}`}</footer>;
};

export default Footer; 
