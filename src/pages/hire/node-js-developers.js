import React, { memo, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import { HireNodeJSDevProps } from '../../components/Props/hire-node-js-developers'
import styled from 'styled-components'
import SEO from '../../components/Seo'
 import BuildApplication from '../../components/BuildApplication/BuildApplication'
import { graphql, navigate } from 'gatsby'
import { images } from '../../config/images'
import CustomDevelopment from '../../components/CustomDevelopment/CustomDevelopment'
import FaqSection from '../../components/FaqSection/FaqSection'
import { useLazyLoad } from '../../components/hooks/useLazyload'
import { useAnimationClass } from '../../components/hooks/useAnimationClass'
import { fetchItem, getViewerCountry } from '../../config/utils'
import WhyShouldHireUs from '../../components/WhyShouldHireUs/WhyShouldHireUs'
export const HireDedicatedDevPage = styled.div`
  .banner {
    .banner-content {
      max-width: 780px;
      p {
        max-width: 680px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .banner-img {
      display: block;
    }
  }
  .feature-resource-section {
    background: linear-gradient(to top, #eef2ff, #ffffff);
    .contact-info-card {
      display: none;
    }
  }
  .ppcbenefit-section {
    .heading-wrapper {
      max-width: 740px;
    }
  }
`

const DDT = memo(props => {
  useEffect(() => { /*
    if (fetchItem('country') === 'IN') {
      navigate('/')
    }
    if (fetchItem('country') === null) {
      getViewerCountry().then(res => {
        if (res === 'IN') navigate('/')
      })
    } */
  }, [])

  const { data } = props
  const { location } = props
  // const { showContent } = useLazyLoad('.lazy-load-div')
  useAnimationClass({ showContent: true })

  return (
    <Layout
      mainClass="hire-dedicated-dev services-page"
      location={location}
      data={{
        img: images.contactAmit,
        img2x: images.contactAmit2x,
        name: 'Amit Kumar Trivedi',
        description:
          'Building great software products, Engineer at heart and handson React JS, React Native Developer',
      }}
    >
      <SEO
        title="Hire expert Node JS Developers, engineers, coders and Programmers"
        description="Hire expert Node JS Develoeprs who works dedicately for you on monthly, weekly or hourly basis. "
        keywords={[`Prydan Software`]}
        links={[
          {
            href: 'https://www.prydansoftware.com/hire/dedicated-developers/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/hire/dedicated-developers/',
          },
          {
            property: 'og:image',
            content: data && data.bannerImage.childImageSharp.gatsbyImageData.src,
          },
        ]}
      />
      <HireDedicatedDevPage>
        <Banner
          bannerData={HireNodeJSDevProps}
          showBannerImage={true}
          {...props}
        />
       
        <div className="lazy-load-div">
          <BuildApplication buildApplicationData={HireNodeJSDevProps} />
          <CustomDevelopment customServicedata={HireNodeJSDevProps} />
          <WhyShouldHireUs WhyShouldHireUsData={HireNodeJSDevProps} />
        </div>
      
      <FaqSection faqSectiondata={HireNodeJSDevProps} />
      </HireDedicatedDevPage>
    </Layout>
  );
})

export default DDT

export const query = graphql`{
  bannerImage: file(relativePath: {regex: "../NodeJS-Developer-Banner.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`