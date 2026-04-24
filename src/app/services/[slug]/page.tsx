import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "./ServiceDetailContent";
import { coreServices, getServiceBySlug, type CoreService } from "@/data/services";

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return coreServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | MouseTech",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${service.title} | MouseTech`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | MouseTech`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Extract only serializable data to pass to client component
  const serializableService = {
    slug: service.slug,
    title: service.title,
    description: service.description,
    fullDescription: service.fullDescription,
    cardFeatures: service.cardFeatures,
    benefits: service.benefits,
    features: service.features,
    process: service.process,
    pricing: service.pricing,
    iconName: service.icon.name, // Pass icon name instead of component
  };

  return <ServiceDetailContent service={serializableService} />;
}
