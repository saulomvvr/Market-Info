import 'bootstrap/dist/css/bootstrap.min.css';
import logoInsta from '../../Imgs/instagram.png'
import logoYoutube from '../../Imgs/youtube.png'
import logoLinkedin from '../../Imgs/linkedin.png'
import logoGithub from '../../Imgs/github.png'
import logoTwitter from '../../Imgs/twitter.png'

const Footer = ({themeNowHF}) =>{
    return(
        <footer style={{backgroundColor: themeNowHF}}>
            <div className='d-flex justify-content-center p-5'>
                <img src={logoInsta} width={"64px"} className='mx-5'></img>
                <img src={logoYoutube} width={"64px"} className='mx-5'></img>
                <img src={logoLinkedin} width={"64px"} className='mx-5'></img>
                <img src={logoGithub} width={"64px"} className='mx-5'></img>
                <img src={logoTwitter} width={"64px"} className='mx-5'></img>
            </div>
        </footer>
    )
}
export default Footer