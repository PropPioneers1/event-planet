import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import image from '../../assets/image/nobg.png';
import imagesad from '../../assets/image/black-and-white-sad-face-hi.png';

const ErrorPage = () => {
  return (
    <Container>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm" alt="404 Error" />
          <div>
            <h1 className="text-5xl text-red-800 font-bold">404 ERROR !</h1>
            <div className='flex justify-center align-middle items-center gap-2'>
            <p className="text-center text-2xl mb-2 font-semibold">Page not found 
            </p><img src={imagesad}className='w-8 h-8' alt="" />
            </div>
            <Link to="/" className=''>
              <button
                className="w-full font-semibold py-3 rounded-md transition-all duration-300 ease-in
                bg-gradient-to-tl from-accent
                to-accent/70 hover:bg-gradient-to-tr
                text-white"
              >
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
