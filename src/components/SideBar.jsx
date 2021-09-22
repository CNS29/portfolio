import React, { useEffect } from 'react';

const SideBar = () => {
    const handleEmail = () => {
        window.open("mailto:canhnguyena2@gmail.com");
    }

    const handleDarkMode = (e) => {
        const isCheck = e.target.checked; 
        isCheck ? document.body.classList.add("light"): document.body.classList.remove("light");
        localStorage.setItem("mode", isCheck);
    }

    useEffect(() => {
        const isCheck = JSON.parse(localStorage.getItem("mode"));
        if(isCheck) {
            document.body.classList.add("light");
            document.querySelector(".cb-modify").checked = true;
        }else {
            document.body.classList.remove("light");
        }
    }, [])
    return (
        <div className="sidebar">
            <img src="https://t4.ftcdn.net/jpg/03/73/72/47/360_F_373724750_qLVkvkQ8iIyCWi73jOiLTYM42v40KUJ0.jpg" alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Cảnh <span>Nguyễn</span></div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href="/" className="sidebar__resume">
                <div className="sidebar__item">
                    <i className="sidebar__icon fas fa-file-download"></i>
                    Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icon">
                <a href="https://www.facebook.com/profile.php?id=100006988935436" target="_blank" rel="noreferrer"><i className="sidebar__icon fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/cn2264/" target="_blank" rel="noreferrer"><i className="sidebar__icon fab fa-instagram-square"></i></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <i className="sidebar__icon fas fa-map-marker-alt"></i>
                    Thủ Đức
                </div>
                <div className="sidebar__item sidebar__contact-github">
                    <a href="https://github.com/CNS29?tab=repositories" target="_blank" rel="noreferrer">
                        <i className="sidebar__icon fab fa-github"></i>Github
                    </a>
                </div>
                <div className="sidebar__item">canhnguyena2@gmail.com</div>
                <div className="sidebar__item">0123456789</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmail}>Email</div>
            <div className="sidebar__modify">
                <div className="sidebar__modify-container">
                    <input type="checkbox" id="cb-modify" className="cb-modify" onChange={handleDarkMode}/>
                    <i className="far fa-moon"></i>
                    <i className="far fa-sun"></i>
                    <label htmlFor="cb-modify" className="circle"></label>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
