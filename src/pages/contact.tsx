import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';

import { siteMetadata } from '../contents/siteMetadata';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Let’s connect and explore how we can collaborate effectively to achieve impactful results. Feel free to reach out to discuss potential opportunities or projects.";

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - ${siteMetadata.author}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
