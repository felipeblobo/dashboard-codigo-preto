import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
  <footer className="sticky-footer bg-white">
    <div className="container my-auto">
      <div className='copyright text-center my-auto'>
        <a target='_blank' rel="noreferrer" href='https://github.com/felipeblobo' alt='github'><FontAwesomeIcon className = 'mx-1' icon={faGithub} size="2x" style={{color: '#3F3D56'}} /></a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/felipelobo23/' alt='linkedin'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '##3F3D56'}} /></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;