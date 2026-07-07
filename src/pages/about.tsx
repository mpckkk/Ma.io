import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { getEntry } from '@/common/libs/mdx';
import { CareerProps } from '@/common/types/careers';
import { EducationProps } from '@/common/types/education';
import { siteMetadata } from '@/contents/siteMetadata';
import About from '@/modules/about';
const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'I am a Phd student at School of Computing, University of Nebraska Lincoln. I am fortunate to be advised by Prof. Qiuming Yao.

I received my M.S. in Computer Science from Bostonn University in Dec 2021. Before coming to BU, I received my B.S. in Economic from San Diego State University in Dec 2018.

My general research interest is Computer Science, Bioinformatics, Artificial Intelligence and Machine Learning. I am currently on the job market for academic research positions starting Fall 2027. If you find my research background a good fit, please feel free to reach out to me.
';

interface About {
  content: string;
  frontMatter: {
    resume: string;
    education: EducationProps[];
    career: CareerProps[];
  };
}

const AboutPage: NextPage<{ about: About }> = ({ about }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - ${siteMetadata.author}`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About about={about} />
      </Container>
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const about = await getEntry('', 'about');

  return {
    props: {
      about: about,
    },
  };
};
