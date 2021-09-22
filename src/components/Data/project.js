import mangaweb from '../../assests/img/mangaweb.png';
import musicweb from '../../assests/img/musicweb.png';
import profileweb from '../../assests/img/profileweb.png';
import headphoneshop from '../../assests/img/headphoneshop.png';

const projectsData = [
    {
        name: "Web Manga",
        img: mangaweb,
        deployed_url: "https://cns-webmanga.herokuapp.com/index.html",
        github_url: "https://github.com/CNS29/web-manga.git",
        category: ["html-css-javascript"]
    },
    {
        name: "Web Music",
        img: musicweb,
        deployed_url: "https://cns-webmusic.herokuapp.com/index.html",
        github_url: "",
        category: ["html-css-javascript"]
    },
    {
        name: "Web Profile",
        img: profileweb,
        deployed_url: "https://cns-webprofile.herokuapp.com/",
        github_url: "https://github.com/CNS29/webprofile.git",
        category: ["html-css-javascript"]
    },
    {
        name: "Web Headphone Shop",
        img: headphoneshop,
        deployed_url: "https://cns29.github.io/headphoneshop/",
        github_url: "https://github.com/CNS29/headphoneshop.git",
        category: ["reactjs"]
    },
];

export default projectsData;