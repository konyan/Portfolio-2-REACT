import React from 'react';

const OptimizingNextJs: React.FC = () => {
  return (
    <>
      <h1>Optimizing Next.js for High Traffic</h1>
      <p>
        When building high-performance e-commerce applications like the <strong>AutoMate Platform</strong>, speed is currency. A delay of just 100ms can impact conversion rates significantly. Here is how we optimized Next.js to handle high traffic loads.
      </p>

      <h2>1. Incremental Static Regeneration (ISR)</h2>
      <p>
        Traditional Static Site Generation (SSG) is great, but for an e-commerce site with thousands of products, rebuilding the entire site for a price change is impractical.
      </p>
      <p>
        ISR allows us to update static pages <em>after</em> you've built your site. By setting a <code>revalidate</code> prop, Next.js will regenerate the page in the background when a request comes in.
      </p>
      <pre>
        <code>
{`export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 60, // Revalidate every 60 seconds
  };
}`}
        </code>
      </pre>

      <h2>2. Image Optimization</h2>
      <p>
        We utilized <code>next/image</code> to automatically serve images in modern formats like WebP and AVIF. This reduced our payload size by over <strong>40%</strong>.
      </p>

      <h2>3. Code Splitting & Dynamic Imports</h2>
      <p>
        We used dynamic imports for heavy components that are not immediately visible, such as the reviews section or complex modals.
      </p>
      <pre>
        <code>
{`const Reviews = dynamic(() => import('../components/Reviews'), {
  loading: () => <p>Loading...</p>,
});`}
        </code>
      </pre>

      <p>
        These strategies combined helped us achieve a <strong>35% increase in page load speed</strong>.
      </p>
    </>
  );
};

export default OptimizingNextJs;