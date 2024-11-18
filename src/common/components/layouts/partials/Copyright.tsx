import { siteMetadata, socialAccounts } from '@/contents/siteMetadata';

const Copyright = () => {
  return (
    <div className='flex items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-600 font-sora'>
      <span>{new Date().getFullYear()}</span>
      <span>© All rights reserve.</span>
          {siteMetadata.siteShortTitle}
        </span>
      </a>
    </div>
  );
};

export default Copyright;
