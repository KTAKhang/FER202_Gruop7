import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/images/Shin/Shine-Burning-1.jpg'
import '../assets/styles/ShineBurningDetail.css';

function ShineBurningDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleAddToCart = () => {
        alert("Shine Burning Gundam has been added to your cart with quantity: " + quantity);
    };

    return (
        <div className="shine-burning">
            {/* Header */}
            <header className="container-fluid fixed-top bg-white shadow-sm">
                <div className="container px-0">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand fw-bold" href="/">Gundam Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            ☰
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Products</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <a href="/cart" className="position-relative me-3">
                                    🛒
                                </a>
                                <a href="/login" className="nav-link">Login</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            <img src={image1} className="img-fluid rounded" alt="Product" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">Shin Burning Gundam</h4>
                                    <p className="mb-3">Bandai</p>
                                    <h5 className="fw-bold mb-3">$100.00</h5>
                                    <h5 className="fw-bold mb-3">
                                        4
                                        <span className="ms-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < 4 ? 'text-warning' : 'text-muted'}>
                                                    &#9733;
                                                </span>
                                            ))}
                                        </span>
                                    </h5>
                                    <p className="mb-4">A 1/100 scale model of the powerful Shin Burning Gundam.</p>

                                    <div>
                                        <div className="input-group quantity mb-5" style={{ width: "100px" }}>
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => handleQuantityChange(-1)}>
                                                -
                                            </button>
                                            <input type="text" className="form-control form-control-sm text-center border-0" value={quantity} readOnly />
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => handleQuantityChange(1)}>
                                                +
                                            </button>
                                        </div>
                                        <button onClick={handleAddToCart} className="btn border border-secondary rounded-pill px-4 py-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fw-bold mb-3">Product Details</h5>
                                <p>This ShineBurning Gundam model is a detailed replica, featuring fine details, movable joints, and a variety of accessories.</p>
                            </div>
                            <div className="mt-4">
                                <h5 className="fw-bold mb-3">Customer Reviews</h5>
                                <div className="review mb-3">
                                    <img src="/images/avatar/avatar1.jpg" alt="Avatar" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
                                    <strong>John Doe</strong>
                                    <span className="d-block text-warning">★★★★★</span>
                                    <p>Amazing detail and quality! A must-have for any Gundam fan.</p>
                                </div>
                                <div className="review mb-3">
                                    <img src="/images/avatar/avatar2.jpg" alt="Avatar" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
                                    <strong>Jane Smith</strong>
                                    <span className="d-block text-warning">★★★★☆</span>
                                    <p>Great model, but a bit hard to assemble.</p>
                                </div>
                                <div className="review">
                                    <img src="/images/avatar/avatar3.jpg" alt="Avatar" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
                                    <strong>Michael Lee</strong>
                                    <span className="d-block text-warning">★★★☆☆</span>
                                    <p>Good quality, but the price is a bit high.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <h4 className="text-center mb-3">Online Gundam Model Shop</h4>
                    <ul className="list-unstyled text-center mb-4">
                        <li>Headquarters: Xuan Khanh, Ninh Kieu District, Can Tho City</li>
                        <li>Phone: 024.6266.1225</li>
                        <li>Email: skynguyenlee@gmail.com</li>
                        <li>Website: <a href="/" className="text-white">5BGunDam.com.vn</a></li>
                        <li>Business registration number: 0104735865</li>
                        <li>Date of issuance: 06/09/2024</li>
                    </ul>
                    <div className="text-center mt-3">
                        <small>&copy; 2024 5BGunDam.com.vn. Website Design - SEO by 5 FPT Guys</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ShineBurningDetail;
