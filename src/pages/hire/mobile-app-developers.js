import React, { memo, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import { HireMobileAppDevProps } from '../../components/Props/hire-mobile-app-developers'
import styled from 'styled-components'
import SEO from '../../components/Seo'
 import BuildApplication from '../../components/BuildApplication/BuildApplication'
/*import CaseStudySlider from 'components/CaseStudySlider/CaseStudySlider' */
import { graphql, navigate } from 'gatsby'
import { images } from '../../config/images'
import CustomDevelopment from '../../components/CustomDevelopment/CustomDevelopment'

import FaqSection from '../../components/FaqSection/FaqSection'
/* import FeatureResources from 'components/FeatureResources/FeatureResources' */
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
        title="Hire High skilled Dedicated Developers, Engineers, Coders and  Programmers"
        description="Hire high skilled Developers, Engineers, Programmers, Coders and Designers from Prydan Software on hourly, weekly or monthly basis."
        keywords={[`prydansoftware`]}
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
          bannerData={HireMobileAppDevProps}
          showBannerImage={true}
          {...props}
        />
       
        <div className="lazy-load-div">
          <BuildApplication buildApplicationData={HireMobileAppDevProps} />
          <CustomDevelopment customServicedata={HireMobileAppDevProps} />
          <WhyShouldHireUs WhyShouldHireUsData={HireMobileAppDevProps} />
        </div>
      <FaqSection faqSectiondata={HireMobileAppDevProps} />
      </HireDedicatedDevPage>
    </Layout>
  );
})

export default DDT

export const query = graphql`{
  bannerImage: file(relativePath: {regex: "../Mobile-App-Developer-Banner.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`