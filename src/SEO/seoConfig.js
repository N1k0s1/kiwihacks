const structuredData = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kiwihacks.org/#org",
        name: "KiwiHacks",
        url: "https://kiwihacks.org/",
        logo: "https://kiwihacks.org/favicon/android-chrome-512x512.png",
        sameAs: [
          "https://www.instagram.com/kiwihacks/",
          "https://nz.linkedin.com/company/kiwihacks",
          "https://github.com/orgs/KiwiHacksNZ",
          "https://discord.gg/KsKGtsk28B",
        ],
        founder: [
          {
            "@type": "Person",
            name: "Niko Purdie",
            jobTitle: "Chief KiwiHacker",
            image: "https://kiwihacks.org/niko.jpg",
            sameAs: [
              "https://github.com/N1k0s1",
              "https://www.linkedin.com/in/nikopurdie?originalSubdomain=nz",
              "https://www.instagram.com/niko_p101/?hl=en",
            ],
          },
        ],
      },
      {
        "@type": "Event",
        name: "KiwiHacks 2026",
        startDate: "2026-05-02T11:00",
        endDate: "2026-05-03T11:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "GridAKL, John Lysaught building",
          address: {
            "@type": "PostalAddress",
            streetAddress: "101 Pakenham Street West",
            addressLocality: "Auckland CBD",
            addressRegion: "Auckland",
            postalCode: "1010",
            addressCountry: "NZ",
          },
        },
        image: "https://kiwihacks.org/kiwihacksimage.png",
        description:
          "Auckland's free 24hr hackathon for teenage coders and innovators. Join KiwiHacks May 2-3, 2026 at GridAKL, John Lysaught building, 101 Pakenham Street West, Auckland CBD, Auckland 1010.",
        organizer: {
          "@type": "Organization",
          name: "KiwiHacks",
          url: "https://kiwihacks.org/",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://kiwihacks.org/#website",
        url: "https://kiwihacks.org/",
        name: "KiwiHacks",
      },
      {
        "@type": "WebPage",
        "@id": "https://kiwihacks.org/#webpage",
        url: "https://kiwihacks.org/",
        name: "KiwiHacks",
        mainEntity: { "@id": "https://kiwihacks.org/#org" },
      },
    ],
  },
  null,
  2,
);

export const seoHeadHtml = `
<title>KiwiHacks 2026 - Free Hackathon in Auckland</title>
<link rel="canonical" href="https://kiwihacks.org/">
<meta name="description" content="KiwiHacks is Auckland's free 24hr hackathon for teenage coders and innovators. Join us May 2-3, 2026 at GridAKL, John Lysaught building, 101 Pakenham Street West, Auckland CBD, Auckland 1010. A must-attend hackathon near you!">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:title" content="KiwiHacks 2026 - Free Hackathon in Auckland">
<meta property="og:description" content="KiwiHacks is Auckland's free 24hr hackathon for teenage coders and innovators. Join us May 2-3, 2026 at GridAKL, John Lysaught building, 101 Pakenham Street West, Auckland CBD, Auckland 1010.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://kiwihacks.org/">
<meta property="og:site_name" content="KiwiHacks">
<meta property="og:locale" content="en_NZ">
<meta property="og:image" content="https://kiwihacks.org/kiwihacksimage.png">
<meta property="og:image:alt" content="KiwiHacks logo">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="KiwiHacks 2026 - Free Hackathon in Auckland">
<meta name="twitter:description" content="KiwiHacks is Auckland's free 24hr hackathon for teenage coders and innovators. Join us May 2-3, 2026 at GridAKL, John Lysaught building, 101 Pakenham Street West, Auckland CBD, Auckland 1010.">
<meta name="twitter:image" content="https://kiwihacks.org/kiwihacksimage.png">
<meta name="twitter:image:alt" content="KiwiHacks logo">
<meta name="google-site-verification" content="VqkpY5ewNGoc7i8GhhyaS7zRb9i1O44_6uHjQsr1Vpw">
<script type="application/ld+json">${structuredData}</script>
`;
