import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    return(
        <div className="nav-header-div col-lg-7 col-md-9 col-sm-12">
            <nav className="navbar navbar-expand-sm px-0">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                        <img src={'/assets/Menu.png'} alt="Меню"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav-header ms-auto navbar-nav flex-sm-row flex-column justify-content-around">
                            <li><a className='px-3' href='#hello'>Привет</a></li>
                            <li><a className='px-3' href='#aboutMe'>Обо мне</a></li>
                            <li><a className='px-3' href='#achievements'>Достижения</a></li>
                            <li><a className='px-3' href='#projects'>Проекты</a></li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;