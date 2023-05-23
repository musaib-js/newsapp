import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p className={`text-${props.mode === "dark"?"light":"dark"}`}>&copy; 2023 Newsdose. All rights reserved.</p>
      </div>
      <div className="col-md-6">
        <ul className="list-inline text-md-right">
          <li className={`text-${props.mode === "dark"?"light":"dark"} list-inline-item`}><a href="/">Terms of Service</a></li>
          <li className={`text-${props.mode === "dark"?"light":"dark"} list-inline-item`}><a href="/">Privacy Policy</a></li>
          <li className={`text-${props.mode === "dark"?"light":"dark"} list-inline-item`}><a href="/">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
