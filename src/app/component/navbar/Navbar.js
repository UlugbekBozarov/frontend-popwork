import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    const [nav] = useState([
        {
            id: 1,
            path: "/product",
            name: "Product"
        },
        {
            id: 2,
            path: "/customers",
            name: "Customers"
        },
        {
            id: 3,
            path: "/pricing",
            name: "Pricing"
        },
        {
            id: 4,
            path: "/manifesto",
            name: "Manifesto"
        },
        {
            id: 5,
            path: "/blog",
            name: "Blog"
        },
        {
            id: 6,
            path: "/log-in",
            name: "Log in"
        },
        {
            id: 7,
            path: "/try-it-now",
            name: "Try it now"
        }
    ]);

    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const renderNavLink = () => {
        return nav.map(link => {
            return (
                <li className="nav-item" key={link.id}>
                    <Link to={link.path} className={link.id === 6 ? "nav-link log_in" : link.id === 7 ? "nav-link try_it_now" : "nav-link"} >{link.name}</Link>
                </li>
            )
        })
    }
    return (
        <nav id="navbar" className="navbar navbar-expand-xl">
            <div className="container">
                <Link to="/" className="navbar-brand" >
                    <svg width="143" height="28" viewBox="0 0 143 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.8152 28V20.9847C27.5209 21.8425 28.9938 22.5164 30.9577 22.5164C32.9129 22.5164 34.6037 21.8148 35.8617 20.6063C37.3481 19.1783 38.2302 17.0428 38.2302 14.5208C38.2302 9.95624 35.5605 6.58643 31.1418 6.58643C28.9632 6.58643 27.3061 7.5361 26.6618 8.51641V6.95405H22.151V28H26.8152ZM30.1906 18.3501C28.3801 18.3501 26.7538 17.0635 26.7538 14.5514C26.7538 12.0088 28.3801 10.7834 30.1906 10.7834C32.0317 10.7834 33.658 12.0088 33.658 14.5514C33.658 17.0941 32.0317 18.3501 30.1906 18.3501ZM47.733 22.639C52.3051 22.639 55.834 19.2691 55.834 14.5514C55.834 9.8337 52.3051 6.49453 47.733 6.49453C43.1916 6.49453 39.632 9.8337 39.632 14.5514C39.632 19.2691 43.1916 22.639 47.733 22.639ZM47.733 18.3501C45.9839 18.3501 44.2962 17.0941 44.2962 14.5514C44.2962 11.9781 45.9839 10.7834 47.733 10.7834C49.5128 10.7834 51.1698 11.9781 51.1698 14.5514C51.1698 17.1247 49.5128 18.3501 47.733 18.3501ZM61.8997 28V20.9847C62.6054 21.8425 64.0783 22.5164 66.0422 22.5164C70.3075 22.5164 73.3147 19.1772 73.3147 14.5208C73.3147 9.95624 70.645 6.58643 66.2263 6.58643C64.0477 6.58643 62.3906 7.5361 61.7462 8.51641V6.95405H57.2355V28H61.8997ZM65.2751 18.3501C63.4646 18.3501 61.8383 17.0635 61.8383 14.5514C61.8383 12.0088 63.4646 10.7834 65.2751 10.7834C67.1162 10.7834 68.7425 12.0088 68.7425 14.5514C68.7425 17.0941 67.1162 18.3501 65.2751 18.3501ZM82.8266 22.1794L85.6645 13.5999C85.7409 13.3689 85.9903 13.2436 86.2215 13.3198C86.3533 13.3633 86.4569 13.4662 86.5012 13.5975L89.3933 22.1794H94.0268L98.7524 6.95405H94.1803L92.0251 14.6014C91.9591 14.8355 91.7155 14.9719 91.4811 14.906C91.3398 14.8663 91.2275 14.759 91.1816 14.6197L88.6569 6.95405H83.7165L81.1626 14.603C81.0856 14.8337 80.8358 14.9584 80.6048 14.8815C80.4663 14.8354 80.3596 14.7237 80.3199 14.5834L78.1624 6.95405H73.3141L78.1011 22.1794H82.8266ZM106.853 22.639C111.425 22.639 114.954 19.2691 114.954 14.5514C114.954 9.8337 111.425 6.49453 106.853 6.49453C102.312 6.49453 98.7521 9.8337 98.7521 14.5514C98.7521 19.2691 102.312 22.639 106.853 22.639ZM106.853 18.3501C105.104 18.3501 103.416 17.0941 103.416 14.5514C103.416 11.9781 105.104 10.7834 106.853 10.7834C108.633 10.7834 110.29 11.9781 110.29 14.5514C110.29 17.1247 108.633 18.3501 106.853 18.3501ZM121.02 22.1794V15.5317C121.02 12.4989 122.708 11.3961 124.579 11.3961C125.04 11.3961 125.531 11.4267 126.052 11.5492V6.95405C125.745 6.86214 125.285 6.80088 124.825 6.80088C123.598 6.80088 121.664 7.29103 120.867 9.00656V6.95405H116.356V22.1794H121.02ZM132.118 22.1794V18.6144C132.118 18.5036 132.16 18.3968 132.235 18.3154L133.242 17.2283C133.407 17.0497 133.686 17.0388 133.865 17.2039C133.89 17.2274 133.913 17.2537 133.932 17.2824L137.212 22.1794H142.919L136.843 13.3567L142.796 6.95405H136.751L132.886 11.222C132.723 11.4024 132.444 11.4164 132.263 11.2532C132.171 11.1697 132.118 11.0511 132.118 10.9266V0H127.454V22.1794H132.118Z" fill="#111111" />
                        <path d="M11.9167 6.16H4.90686C2.19688 6.16 0 8.3538 0 11.06V18.06C0 20.7662 2.19688 22.96 4.90686 22.96H11.9167C14.6267 22.96 16.8235 20.7662 16.8235 18.06V11.06C16.8235 8.3538 14.6267 6.16 11.9167 6.16Z" fill="#373529" fillOpacity="0.155594" />
                        <path d="M8.41176 18.2C10.4249 18.2 12.0569 16.5703 12.0569 14.56C12.0569 12.5497 10.4249 10.92 8.41176 10.92C6.39863 10.92 4.76666 12.5497 4.76666 14.56C4.76666 16.5703 6.39863 18.2 8.41176 18.2Z" fill="#111111" />
                    </svg>
                </Link>
                <button type="button" className="btn navbar-toggler" onClick={() => setNavbarCollapse(!navbarCollapse)}>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="2" rx="1" fill="black" />
                        <rect y="5" width="20" height="2" rx="1" fill="black" />
                        <rect y="10" width="20" height="2" rx="1" fill="black" />
                    </svg>
                </button>
                <div className={navbarCollapse ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                    <ul className="navbar-nav">
                        {
                            renderNavLink()
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
