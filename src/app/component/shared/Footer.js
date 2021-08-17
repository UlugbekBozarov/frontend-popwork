import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row m-0 text-align-center">
                    <div className="col-12 col-lg-7 mb-4 mb-lg-0 p-0">
                        <div className="row m-0">
                            <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                                <div className="brand">
                                    <svg width="113" height="22" viewBox="0 0 113 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.0396 22V16.488C21.5934 17.1619 22.749 17.6915 24.2899 17.6915C25.824 17.6915 27.1506 17.1402 28.1376 16.1906C29.3039 15.0687 29.996 13.3907 29.996 11.4092C29.996 7.82276 27.9014 5.17505 24.4344 5.17505C22.7249 5.17505 21.4248 5.92123 20.9192 6.69147V5.46389H17.38V22H21.0396ZM23.688 14.4179C22.2675 14.4179 20.9915 13.407 20.9915 11.4333C20.9915 9.43545 22.2675 8.47265 23.688 8.47265C25.1326 8.47265 26.4086 9.43545 26.4086 11.4333C26.4086 13.4311 25.1326 14.4179 23.688 14.4179ZM37.4521 17.7877C41.0394 17.7877 43.8082 15.14 43.8082 11.4333C43.8082 7.72648 41.0394 5.10284 37.4521 5.10284C33.8888 5.10284 31.0959 7.72648 31.0959 11.4333C31.0959 15.14 33.8888 17.7877 37.4521 17.7877ZM37.4521 14.4179C36.0797 14.4179 34.7555 13.4311 34.7555 11.4333C34.7555 9.41138 36.0797 8.47265 37.4521 8.47265C38.8485 8.47265 40.1486 9.41138 40.1486 11.4333C40.1486 13.4551 38.8485 14.4179 37.4521 14.4179ZM48.5674 22V16.488C49.1212 17.1619 50.2769 17.6915 51.8177 17.6915C55.1643 17.6915 57.5238 15.0678 57.5238 11.4092C57.5238 7.82276 55.4292 5.17505 51.9622 5.17505C50.2528 5.17505 48.9527 5.92123 48.4471 6.69147V5.46389H44.9078V22H48.5674ZM51.2158 14.4179C49.7953 14.4179 48.5193 13.407 48.5193 11.4333C48.5193 9.43545 49.7953 8.47265 51.2158 8.47265C52.6604 8.47265 53.9365 9.43545 53.9365 11.4333C53.9365 13.4311 52.6604 14.4179 51.2158 14.4179ZM64.9871 17.4267L67.2137 10.6856C67.2736 10.5042 67.4693 10.4057 67.6507 10.4656C67.7541 10.4997 67.8354 10.5806 67.8702 10.6838L70.1394 17.4267H73.7749L77.4827 5.46389H73.8953L72.2043 11.4726C72.1525 11.6565 71.9614 11.7637 71.7775 11.7119C71.6666 11.6807 71.5785 11.5963 71.5425 11.4869L69.5616 5.46389H65.6853L63.6814 11.4738C63.621 11.6551 63.425 11.753 63.2438 11.6926C63.1351 11.6564 63.0514 11.5686 63.0202 11.4584L61.3275 5.46389H57.5234L61.2793 17.4267H64.9871ZM83.8385 17.7877C87.4259 17.7877 90.1947 15.14 90.1947 11.4333C90.1947 7.72648 87.4259 5.10284 83.8385 5.10284C80.2753 5.10284 77.4824 7.72648 77.4824 11.4333C77.4824 15.14 80.2753 17.7877 83.8385 17.7877ZM83.8385 14.4179C82.4662 14.4179 81.142 13.4311 81.142 11.4333C81.142 9.41138 82.4662 8.47265 83.8385 8.47265C85.235 8.47265 86.5351 9.41138 86.5351 11.4333C86.5351 13.4551 85.235 14.4179 83.8385 14.4179ZM94.9541 17.4267V12.2035C94.9541 9.82057 96.2783 8.95405 97.747 8.95405C98.1081 8.95405 98.4933 8.97812 98.9026 9.0744V5.46389C98.6619 5.39168 98.3007 5.34354 97.9396 5.34354C96.9765 5.34354 95.4597 5.72866 94.8337 7.07659V5.46389H91.2945V17.4267H94.9541ZM103.662 17.4267V14.6256C103.662 14.5385 103.695 14.4546 103.754 14.3907L104.544 13.5365C104.673 13.3962 104.892 13.3876 105.033 13.5174C105.053 13.5358 105.07 13.5565 105.085 13.5791L107.658 17.4267H112.137L107.369 10.4945L112.04 5.46389H107.297L104.264 8.81728C104.136 8.95901 103.917 8.96999 103.776 8.84181C103.703 8.77621 103.662 8.68298 103.662 8.58519V0H100.002V17.4267H103.662Z" fill="#000066" />
                                        <path d="M9.35 4.83984H3.85C1.7237 4.83984 0 6.56355 0 8.68984V14.1898C0 16.3161 1.7237 18.0398 3.85 18.0398H9.35C11.4763 18.0398 13.2 16.3161 13.2 14.1898V8.68984C13.2 6.56355 11.4763 4.83984 9.35 4.83984Z" fill="#D6D6EB" />
                                        <path d="M6.60001 14.3001C8.17954 14.3001 9.46001 13.0196 9.46001 11.4401C9.46001 9.86054 8.17954 8.58008 6.60001 8.58008C5.02047 8.58008 3.74001 9.86054 3.74001 11.4401C3.74001 13.0196 5.02047 14.3001 6.60001 14.3001Z" fill="#000066" />
                                    </svg>
                                </div>
                                <p>
                                    Popwork, the app that makes managers and teams work better together.
                                </p>
                                <p>© People over Process SAS</p>
                                <Link to="/" className="nav-link" >Popwork on LinkedIn</Link>
                            </div>
                            <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                                <h4>Discover Popwork</h4>
                                <Link to="/" className="nav-link" >How it works</Link>
                                <Link to="/" className="nav-link" >Mood tracker</Link>
                                <Link to="/" className="nav-link" >Check-in ritual</Link>
                                <Link to="/" className="nav-link" >Topics follow-up</Link>
                            </div>
                            <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                                <h4>About</h4>
                                <Link to="/" className="nav-link" >Manifesto</Link>
                                <Link to="/" className="nav-link" >How much it costs</Link>
                                <Link to="/" className="nav-link" >User terms</Link>
                                <Link to="/" className="nav-link" >Privacy policy</Link>
                                <Link to="/" className="nav-link" >Follow us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 p-0">
                        <div className="row m-0">
                            <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                                <h4>Ressources & Help</h4>
                                <Link to="/" className="nav-link" >Log in</Link>
                                <Link to="/" className="nav-link" >Help Centers</Link>
                                <Link to="/" className="nav-link" >Product news</Link>
                                <Link to="/" className="nav-link" >Blog</Link>
                                <Link to="/" className="nav-link" >Popwork management guide</Link>
                                <Link to="/" className="nav-link" >Popwork questions guide</Link>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h4>From the Blog</h4>
                                <Link to="/" className="nav-link" >Product update: Better, faster, stronger text editing on Popwork</Link>
                                <Link to="/" className="nav-link" >Prioritize prioritizing!</Link>
                                <Link to="/" className="nav-link" >Product update: improved objectives are live</Link>
                                <Link to="/" className="nav-link" >Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
