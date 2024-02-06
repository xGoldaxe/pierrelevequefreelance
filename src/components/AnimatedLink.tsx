import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <Link href={href} className="animatedLink">
      {children}
    </Link>
  );
}
