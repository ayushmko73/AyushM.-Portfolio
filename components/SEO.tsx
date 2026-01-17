
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogUrl 
}) => {
  const baseTitle = "Ayush M. | FinTech Entrepreneur & Systems Builder";
  const baseDescription = "Ayush M — entrepreneur & product builder focused on technology, finance, AI, and scalable systems.";

  useEffect(() => {
    document.title = title ? `${title} | Ayush M.` : baseTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || baseDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title || baseTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || baseDescription);

    if (ogUrl) {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) ogUrlMeta.setAttribute('content', ogUrl);
    }

    if (ogImage) {
      const ogImgMeta = document.querySelector('meta[property="og:image"]');
      if (ogImgMeta) ogImgMeta.setAttribute('content', ogImage);
    }

    return () => {
      // Revert to defaults on unmount if needed
      document.title = baseTitle;
    };
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
};

export default SEO;
