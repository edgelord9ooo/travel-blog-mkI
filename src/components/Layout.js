import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
// import './debug.css'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className='bg'>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        
        <link
          rel="icon"
          sizes="180x180"
          href="../img/icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="../img/icon.svg"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="../img/icon.svg"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      <div>
        <div className='row'><Navbar /></div>
        <div className='columns'>
          <div class="column"></div>
          <div class="column is-three-fifths">
            <div>
              {children}
            </div>
          </div>
          <div class="column"></div>
        </div>
      {/* <Footer /> */}
      </div>
    </div>
  )
}

export default TemplateWrapper
