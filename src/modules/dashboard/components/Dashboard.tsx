import { useEffect, useState } from 'react';
import Breakline from '@/common/components/elements/Breakline';
import { author, featureSwich } from '@/contents/siteMetadata';
import CodingActive from './CodingActive';
import Contributions from './Contributions';

const Dashboard = () => {
  // Track if the component is on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Guard against missing feature switches or author details
  const showCodingActive = isClient && (featureSwich?.dashboard_wakatime ?? false);
  const githubAccounts = isClient
    ? author?.github_accounts?.filter((account) => account?.is_active) || []
    : [];

  return (
    <>
      {showCodingActive && (
        <>
          <CodingActive />
          <Breakline className="mt-10 mb-8" />
        </>
      )}

      {isClient && featureSwich?.dashboard_github && githubAccounts.length > 0 && (
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
