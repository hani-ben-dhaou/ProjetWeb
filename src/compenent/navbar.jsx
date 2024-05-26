import {Link} from "react-router-dom"
function NAVBAR(){
    return ( 
        <div className="bar">
    <img  class="logo"  src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"  alt="logo" />
<span className=""><Link to="/art">art</Link></span>
<span className=""><Link to="/technologie">technologie</Link></span>
<span className=""><Link to="/science">science</Link></span>
<span className=""><Link to="/cinema">cinema</Link></span>
<span className=""><Link to="/syrine">syrine</Link></span>
<span className=""><Link to="/logout">logout</Link></span>
<span className=""><Link to="/write">write</Link></span>
        </div>



    )


}
export default NAVBAR;