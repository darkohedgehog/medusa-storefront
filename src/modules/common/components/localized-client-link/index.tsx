"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
  passHref?: true;
  [x: string]: any;
}) => {
  const params = useParams();
  const countryCode = params ? params['countryCode'] as string : 'defaultCountryCode'; // Asercija tipa i default vrednost

  return (
    <Link href={`/${countryCode}${href}`} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedClientLink;
