import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <div className="nav-header-div">
            <nav className="nav-header"> 
                <li><a href='#hello'>Привет</a></li>
                <li><a href='#aboutMe'>Обо мне</a></li>
                <li><a href='#achievements'>Достижения</a></li>
                <li><a href='#projects'>Проекты</a></li> 
            </nav>
        </div>
    )
}

export default Navbar;