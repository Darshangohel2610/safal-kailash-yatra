import { packages } from "@/data/packages";
import PackageDetailsClient from "./PackageDetailsClient";

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Safal Kailash Yatra",
    };
  }

  return {
    title: `${pkg.title} | Safal Kailash Yatra`,
    description: pkg.shortDescription || pkg.about?.overview,
  };
}

export default async function PackageDetailsPage({ params }) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.slug === resolvedParams.slug);

  return <PackageDetailsClient pkg={pkg} slug={resolvedParams.slug} />;
}
