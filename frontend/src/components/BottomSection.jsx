export default function Footer() {
    function ScrollContainer(e){
        e.preventDefault();
        window.scrollTo(0,0);
    }
  return (
    <div className="footer flex flex-col justify-center items-center w-full bg-black py-4 text-white ">
      <div className="flex  gap-2 items-center">
        <h3 className="text-xl font-semibold"> Follow us </h3>
        <a
          href="https://www.instagram.com/rkh.iitkgp/"
          target="_blank"
          rel="noopener norefferer noreferrer"
        >
          <img className= "invert scale-50 " width={100} height={100}  alt="instagram icon" src="/instagram.png" />
        </a>
        <a
          href="https://www.facebook.com/R.K.Hall.IITkgp/"
          target="_blank"
          rel="noopener norefferer noreferrer"
        >
          <img className= "invert scale-50" width={100} height={100}  alt="facebookicon" src="/facebook.png" />
        </a>
        <a
          href="https://www.linkedin.com/company/radha-krishnan-hall-of-residence-iit-kgp/"
          target="_blank"
          rel="noopener norefferer noreferrer"
        >
          <img className= "scale-50 " width={100} height={100}  alt="linkedin icon" src="/linkedin.png" />
        </a>
      </div>
      <div className="flex gap-4 ">
        <span className="hover:underline">Terms and Conditions</span>
        <span className="hover:underline">Privacy Policy</span>
        <span className="hover:underline">Copyright &copy; </span>
      </div>
    </div>
  );
}
