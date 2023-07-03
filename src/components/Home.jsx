import React from 'react'

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/revslider/infnet-01/infnet-sao-jose.jpg" style={{ width: '500px', height: '500px' }} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://leonardovichi.com/wp-content/uploads/2018/10/normal_share_image_1517944041.jpg" style={{ width: '500px', height: '500px' }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://ibid.com.br/blog/wp-content/uploads/2017/02/sistema-de-compras-por-que-sua-empresa-deve-adotar-agora3-1024x683.jpg" style={{ width: '500px', height: '500px' }} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container marketing" />

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src="https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/revslider/infnet-01/infnet-sao-jose.jpg" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="https://leonardovichi.com/wp-content/uploads/2018/10/normal_share_image_1517944041.jpg" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="https://ibid.com.br/blog/wp-content/uploads/2017/02/sistema-de-compras-por-que-sua-empresa-deve-adotar-agora3-1024x683.jpg" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '500px', height: '500px' }} src="https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/revslider/infnet-01/infnet-sao-jose.jpg" data-holder-rendered="true" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '500px', height: '500px' }} src="https://leonardovichi.com/wp-content/uploads/2018/10/normal_share_image_1517944041.jpg" data-holder-rendered="true" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '500px', height: '500px' }} src="https://ibid.com.br/blog/wp-content/uploads/2017/02/sistema-de-compras-por-que-sua-empresa-deve-adotar-agora3-1024x683.jpg" data-holder-rendered="true" />
                </div>
            </div>

            <hr className="featurette-divider" />
        </>
    )
}

export default Home