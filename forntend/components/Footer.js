

const Footer=()=>{


    return(
        <React.Fragment>

            <footer>
				<div className="container">
					<p><a href="#">Home</a> | <a href="#work">works</a> | <a href="#team">Team</a> | <a href="#contact">Contact</a></p>
					<div className="social">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-dribbble"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
					
					<p class="copy-right">Copyright &copy; 2020 <a href="#">Your Site</a> | Designed By : <a href="">Bunchu</a>, All rights reserved. </p>
				</div>
			</footer>
        </React.Fragment>
    )
}

export default Footer;