import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { images } from 'theme'
import './navbar.scss'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true)
  const [navOpen, setNavOpen] = useState(true)
  const [scrolled, setScrolled] = useState(true)
  const [logoSrc, setLogoSrc] = useState(images.unityLogo) // Initial logo
  const [isMounted, setIsMounted] = useState(true) // New state to track mounting
  const navRef = useRef(null)

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = true // You can adjust this value
      setScrolled(isScrolled)
    }

    // Adding scroll event listener
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle logo change
  useEffect(() => {
    // Skip fade effect on initial render
    if (!isMounted) {
      setIsMounted(true)
      setLogoSrc(scrolled ? images.logo : images.unityLogo)
      return
    }

    // Fade effect after initial render
    setLogoSrc(scrolled ? images.logo : images.unityLogo)
  }, [scrolled, isMounted])

  // Close Dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navRef])

  // Toggle Navigation (Hamburger Menu)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  // Handle keyboard events for accessibility
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleNav()
    }
  }

  return (
    <section className={`${scrolled ? 'navigation' : 'navigationTransparent'}`}>
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">
            <img src={logoSrc} alt="LOGO" className="logo" />
          </NavLink>
        </div>
        <nav ref={navRef}>
          <div
            className="nav-mobile"
            id="nav-toggle"
            onClick={toggleNav}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex="0"
          >
            <span className={navOpen ? 'active' : ''} />
          </div>
          <ul className={`menuItems ${navOpen ? 'show' : ''}`}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={`${scrolled ? 'goldActive' : 'blueActive'}`}
                className={`${scrolled ? 'goldText' : 'whiteText'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rush"
                activeClassName="active"
                className={`${scrolled ? 'goldText' : 'whiteText'}`}
              >
                Rush
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brothers"
                activeClassName="active"
                className={`${scrolled ? 'goldText' : 'whiteText'}`}
              >
                Brothers
              </NavLink>
            </li>

            {/* <li>
              <NavLink to="/" activeClassName="active" className = {`${scrolled ? 'goldText' : 'whiteText'}`}>Professional</NavLink>
            </li> */}
            {/* ... other menu items ... */}
            <li>
              <NavLink
                to="/consulting"
                onClick={toggleDropdown}
                className={`${scrolled ? 'goldText' : 'whiteText'}`}
              >
                Consulting
              </NavLink>
              {dropdownOpen && (
                <ul className="nav-dropdown">
                  <li>
                    <NavLink to="/web-design">Web Design</NavLink>
                  </li>
                  {/* ... other dropdown items ... */}
                </ul>
              )}
            </li>
            {/* ... other menu items ... */}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
