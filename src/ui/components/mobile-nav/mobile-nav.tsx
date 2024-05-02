'use client';

import Nav from "../nav/nav"
import Close from "../../icons/close/close"
import Button from "../button/button";
import Link from "next/link";
import styles from "@/src/ui/components/mobile-nav/mobile-nav.module.scss";
import { useState } from "react";

export default function MobileNav() {

    const [isMenuMobileOpen,setIsMenuMobileOpe] = useState(false);

    return (
      <>
        <div 
              className={`${styles.menuIcon} secondary`}
              onClick={() => {
                setIsMenuMobileOpe(true)
              }}
          >
              <svg 
                  className={`${styles.svgImage}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
              >
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
              </svg>
          </div>
          <div className={`${styles.mobileNav} ${isMenuMobileOpen ? styles.open : styles.close} surface shadow-l`}>
              <div className={`${styles.topMenu}`}>
                  <Close 
                      className={`${styles.buttonClose}`}
                      onClick={() => {
                        setIsMenuMobileOpe(false)
                      }}
                  />
              </div>       
              <Nav 
                classes={`${styles.mobileMenu}`}
              />
              <div className={`${styles.bottonMenu}`}>
                <hr className={`${styles.divisor}`}/>
                <div className={`${styles.loginLinks}`}>
                  <Link 
                    className={`themeLink`}
                    href="/login"
                  >
                    Login
                  </Link>
                  <Button 
                    buttonText="Sing up"
                    href="/create-account"
                  />
                </div>              
              </div>
          </div>
      </>
    )
}