const Footer = () => {
  return (
    <footer className="text-black body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-black">
          {/* <img className='h-10 w-10' src='/aircraft.png' alt='icon' /> */}
          <span className="ml-3 text-black">Dress IN</span>
        </span>
        <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
          © 2022 Dress IN.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="text-black">
            <a href="https://www.google.com/search?q=dress%20in%20rawalpindi&rlz=1C5CHFA_enPK1018PK1018&oq=dress+in&aqs=chrome.1.69i59l2j0i512l3j69i61l3.3179j0j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:10&tbm=lcl&rflfq=1&num=10&rldimm=15873587890843590444&lqi=ChNkcmVzcyBpbiByYXdhbHBpbmRpSKeb8r-ArYCACFodEAAYABgBGAIiE2RyZXNzIGluIHJhd2FscGluZGmSAQ5jbG90aGluZ19zdG9yZaoBDRABKgkiBWRyZXNzKAA&phdesc=fVXCKoB6osE&ved=2ahUKEwj1o8Xo-pb7AhWFH-wKHZPCBK0QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:15873587890843590444,l,ChNkcmVzcyBpbiByYXdhbHBpbmRpSKeb8r-ArYCACFodEAAYABgBGAIiE2RyZXNzIGluIHJhd2FscGluZGmSAQ5jbG90aGluZ19zdG9yZaoBDRABKgkiBWRyZXNzKAA,y,fVXCKoB6osE;mv:[[33.599119439398656,73.0514032635866],[33.596590410544536,73.04678986408096]]">
              <img src="/images/location.png" className="w-10 h-10" alt=" " />
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
