import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/facebook_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/malekinusicdoo" className="fb-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} Malekinušić d.o.o.</p>
      <p className="p-footer">+385 (0)98 622 267 | jozomalekinusic@gmail.com</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost tvrtke Malekinušić d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer