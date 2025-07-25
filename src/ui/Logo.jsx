import classNames from "classnames"
import { NavLink } from "react-router"

// eslint-disable-next-line react/prop-types
function Logo({className, src="/logos/white-logo.png"}) {
  return (
    <div>
      <NavLink to="/" >
      <img src={src} alt="Logo" className={classNames("w-28 h-28", className)} />
    </NavLink></div>
  )
}

export default Logo
