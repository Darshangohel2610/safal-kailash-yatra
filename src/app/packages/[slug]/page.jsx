import { getPackages, getPackageBySlug } from "@/lib/queries/packages";
import PackageDetailsClient from "./PackageDetailsClient";

export async function generateStaticParams() {
  const pkgs = await getPackages();
  return pkgs.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const pkg = await getPackageBySlug(resolvedParams.slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Safal Kailash Yatra",
    };
  }

  return {
    title: `${pkg.title} | Safal Kailash Yatra`,
    description: pkg.shortDescription || pkg.about,
  };
}

export default async function PackageDetailsPage({ params }) {
  const resolvedParams = await params;
  const pkg = await getPackageBySlug(resolvedParams.slug);
  const allPackages = await getPackages({ includeAll: false });

  return <PackageDetailsClient pkg={pkg} slug={resolvedParams.slug} allPackages={allPackages} />;
}
