import Head from "next/head";
import {
  SectionWrapper,
  PageAnchor,
  SectionHeader,
  Hero,
  Customers,
  Cta,
  ContactForm,
  Footer,
  FeatureList,
  DiagonalSectionWrapper,
} from "../components";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Northern Code, Inc.</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <Hero />
        <Customers />
        <SectionWrapper>
          <PageAnchor anchorId="services">
            <SectionHeader
              heading="Services"
              subheading="Web sites &amp; mobile apps"
            >
              description
            </SectionHeader>
            <FeatureList>
              <FeatureList.Item heading="SEO best practices">
                description
              </FeatureList.Item>
              <FeatureList.Item heading="Powerful analytics">
                description
              </FeatureList.Item>
              <FeatureList.Item heading="Subsecond page load times">
                description
              </FeatureList.Item>
              <FeatureList.Item heading="Simple/easy to use designs">
                description
              </FeatureList.Item>
              <FeatureList.Item heading="Content management">
                description
              </FeatureList.Item>
            </FeatureList>
          </PageAnchor>
        </SectionWrapper>
        <DiagonalSectionWrapper type="alternate">
          <Cta />
        </DiagonalSectionWrapper>
        <SectionWrapper>
          <SectionHeader
            heading="Mobile apps"
            subheading="Welcome to mobile computing"
          >
            description
          </SectionHeader>
          <FeatureList>
            <FeatureList.Item heading="Built on web technologies">
              description
            </FeatureList.Item>
            <FeatureList.Item heading="Published to iOS and Android">
              description
            </FeatureList.Item>
            <FeatureList.Item heading="Simple/easy to use designs">
              description
            </FeatureList.Item>
            <FeatureList.Item heading="Leverages native capabilities">
              description
            </FeatureList.Item>
          </FeatureList>
        </SectionWrapper>
        <DiagonalSectionWrapper>
          <PageAnchor anchorId="contact-us">
            <SectionHeader heading="Contact" subheading="Let's get to work">
              Share a few things about you, your company, and your project. We
              would be happy to work with you!
            </SectionHeader>
            <ContactForm />
          </PageAnchor>
        </DiagonalSectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
