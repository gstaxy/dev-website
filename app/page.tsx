// app/page.tsx

// 1. Import the MDX component and metadata
import AboutPage, { metadata } from "./about/page.mdx";

// 2. Re-export the metadata (this is correct)
export { metadata };

// 3. Define a standard React component that renders the MDX component
// This ensures the page export has the correct type (a React component).
export default function HomePage() {
  return <AboutPage />;
}