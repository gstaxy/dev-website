declare module "*.mdx" {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export const metadata: Record<string, unknown>;
  export default MDXComponent;
}
