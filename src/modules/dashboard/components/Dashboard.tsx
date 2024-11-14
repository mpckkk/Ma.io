import Breakline from '@/common/components/elements/Breakline';
import { author, featureSwich } from '@/contents/siteMetadata';
import CodingActive from './CodingActive';
import Contributions from './Contributions';

const Dashboard = () => {
  // Guard against missing feature switches or author details
  const showCodingActive = featureSwich?.dashboard_wakatime ?? false;
  const githubAccounts = author?.github_accounts?.filter((account) => account?.is_active) || [];

  return (
    <>
      {showCodingActive && (
        <>
          <CodingActive />
          <Breakline className="mt-10 mb-8" />
        </>
      )}

      {featureSwich?.dashboard_github && githubAccounts.length > 0 && (
        <div className="space-y-10">
          {githubAccounts.map((account, index) => (
            <Contributions
              key={index}
              username={account?.username ?? 'Unknown'}
              type={account?.type ?? 'User'}
              endpoint={account?.endpoint ?? '/default-endpoint'}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Dashboard;
