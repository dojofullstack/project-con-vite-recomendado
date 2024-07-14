

const Main = ({props, props2}) => {

    console.log(props);

    return (
      <main>
            <div>
                <h1>{props.title}</h1>

                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="First slide"
                        ></li>
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="1"
                            aria-label="Second slide"
                        ></li>
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="2"
                            aria-label="Third slide"
                        ></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img
                                src="https://percia.com.pe/wp-content/uploads/2023/06/BANNER-ARMAR-PC.png#777:#555/text:First slide"
                                className="w-100 d-block"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://percia.com.pe/wp-content/uploads/2023/06/BANNER-ARMAR-PC.png#666:#444/text:Second slide"
                                className="w-100 d-block"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://percia.com.pe/wp-content/uploads/2023/06/BANNER-ARMAR-PC.png#666:#444/text:Third slide"
                                className="w-100 d-block"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>


            <img src={props.imagen} alt="" srcset="" />


            <div className="catalogo-productos" id="catalogo-products">

                <div className="card" style={{
                    width: "300px"
                }} >
                    <img className="card-img-top" src="https://i0.wp.com/rayotec.pe/wp-content/uploads/2022/10/EC1.jpg?fit=1080%2C1080&ssl=1" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Pc Gamer</h4>
                        <p className="card-text">Precio $99</p>
                    </div>
                </div>
                

            </div>
            
      </main>
    );
  };
  
  
export default Main;