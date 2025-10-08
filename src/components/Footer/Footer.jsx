import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Path & Strings</h3>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/resources">Resources</a>
        </nav>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer