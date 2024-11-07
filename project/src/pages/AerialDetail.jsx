import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/images/Aerial/a4.jpg';
import image2 from '../assets/images/Aerial/ctt.png';
import image3 from '../assets/images/Aerial/ltl.png';
import image4 from '../assets/images/Aerial/tnk.png';
import '../assets/styles/AerialDetail.css';
import Footer from '../components/Khang/Footer';

function AerialDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleAddToCart = () => {
        alert("Gundam Aerial has been added to your cart with quantity: " + quantity);
    };

    return (
        <div className="aerial">
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
                                            <img src={image1} className="img-fluid rounded" alt="Gundam Aerial" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">Gundam Aerial</h4>
                                    <p className="mb-3">Bandai</p>
                                    <h5 className="fw-bold mb-3">$120.00</h5>
                                    <h5 className="fw-bold mb-3">
                                        5
                                        <span className="ms-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-warning">&#9733;</span>
                                            ))}
                                        </span>
                                    </h5>
                                    <p className="mb-4">A 1/100 scale model of the advanced Gundam Aerial, piloted by Suletta Mercury. This model includes intricate details, movable joints, and unique accessories that bring the Gundam Aerial to life.</p>

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
                                <p>This Gundam Aerial model features detailed craftsmanship, including fine panel lining, movable parts, and customizable accessories, making it a must-have for fans of Mobile Suit Gundam: The Witch from Mercury.</p>
                            </div>
                            <div className="mt-4">
                                <h5 className="fw-bold mb-3">Customer Reviews</h5>
                                <div className="review mb-3">
                                    <img src={image2} alt="Avatar" className="rounded-circle me-2" style={{ width: "100px", height: "100px" }} />
                                    <strong>Châu Tinh Trì(AKA 007)</strong>
                                    <span className="d-block text-warning">★★★★★</span>
                                    <p>Đạt Văn Tây Chế Cho Anh Con Này.</p>
                                </div>
                                <div className="review mb-3">
                                    <img src={image3} alt="Avatar" className="rounded-circle me-2" style={{ width: "100px", height: "100px" }} />
                                    <strong>Lý Tiểu Long(AKA Long ka)</strong>
                                    <span className="d-block text-warning">★★★★★</span>
                                    <p>Con Này Ngon.</p>
                                </div>
                                <div className="review">
                                    <img src={image4} alt="Avatar" className="rounded-circle me-2" style={{ width: "100px", height: "100px" }} />
                                    <strong>Ngộ Không(AKA Đại Sư Huynh)</strong>
                                    <span className="d-block text-warning">★★★★★</span>
                                    <p>Mua Con Này Lắp Trên Đường Thỉnh Kinh Cho Đở Buồn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-light py-4 mt-5">
                <Footer />
            </footer>
        </div>
    );
}

export default AerialDetail;
