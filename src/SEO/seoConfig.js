import schemaData from "./schema.json";

const structuredData = JSON.stringify(schemaData, null, 2);

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
