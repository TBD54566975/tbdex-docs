import React from 'react';
import HeroCard from '@site/src/components/HeroCard';
import ExploreCard from '../src/components/ExploreCard';
import Community from '../src/components/Community';
import Head from '@docusaurus/Head';

function DocsIndex() {
  return (
    <div>
      <Head title="Developer Docs | TBD">
        <meta property="og:title" />
      </Head>
      <h1>
        Give your customers control of their identity, data, and finances.
      </h1>
      <p className="mb-8">
        Our toolkits bring decentralized identity, messaging, and data storage
        to your applications. They let developers focus on creating delightful
        user experiences, while returning ownership to individuals.
      </p>
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">

        <HeroCard
          heroText="tbDEX"
          buttonUrl="/"
          buttonText="Playbooks 📖"
          bodyText="Guides on integrating your app with the tbDEX SDK to seek or provide liquidity"
          imgSrc="/img/money-msg-blue-purple.svg"
          imgClass="w-36 flip"
          themeColor="cyan"
        />
      </div>

      <div className="padding-top--xl" />


     
    </div>
  );
}

export default DocsIndex;
