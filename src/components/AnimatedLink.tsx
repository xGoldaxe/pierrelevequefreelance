import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export default function AnimatedLink({ href, children, target }: AnimatedLinkProps) {
  return (
    <Link href={href} className="animatedLink" target={target}>
      {children}
    </Link>
  );
}
