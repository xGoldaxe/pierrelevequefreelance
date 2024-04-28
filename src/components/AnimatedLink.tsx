import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  prefetch?: boolean;
}

export default function AnimatedLink({ href, children, target, prefetch }: AnimatedLinkProps) {
  return (
    <Link href={href} className="animatedLink" target={target} prefetch={prefetch}>
      {children}
    </Link>
  );
}
