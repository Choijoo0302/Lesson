import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <Link to="/">home</Link>
            <Link to='/register'>register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/task'>Task</Link>
            <Link to='/todo'>todo</Link>

        </div>
      );
}

export default Header;