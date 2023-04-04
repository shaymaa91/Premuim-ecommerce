import React from "react";
import "./Carousel.css";

const CarouselItem = ({ imgsrc, heading, description, alt, children }) => {
    return (
        <div className="carousel__item-container text-white vh-100 vw-100">
            <img className="carousel__image" src={imgsrc} alt={alt} />
            <div className="carousel__image-overlay"></div>
            <div className="carousel__heading d-flex flex-column w-100 h-100 justify-content-center px-3 mx-3">
                <h3 className="fs-1 fw-bold my-3">{heading}</h3>
                <p className="my-2">{description}</p>
                <main className="my-2">{children}</main>
            </div>
        </div>
    );
};

export default CarouselItem;
