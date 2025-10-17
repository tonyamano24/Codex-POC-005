export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  src: string;
  year: string;
  description: string;
  credit?: { label: string; url: string };
}

interface GalleryCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  images: GalleryItem[];
}

const unsplashParams = '?auto=format&fit=crop&w=1200&q=80&sat=-100&exp=-15';

export const galleries: GalleryCategory[] = [
  {
    id: 'women',
    title: 'Women',
    tagline: 'Strength in Stillness',
    description:
      'A contemplative study of feminine poise, capturing unspoken narratives through minimalist compositions and soft chiaroscuro lighting.',
    images: [
      {
        id: 'women-01',
        title: 'Quiet Resolve',
        alt: 'Portrait of a woman standing against a textured wall, eyes closed.',
        src: `https://images.unsplash.com/photo-1503342217505-b0a15ec3261c${unsplashParams}`,
        year: '2023',
        description: 'Documenting the restful confidence of women who claim space through stillness.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/f3eMM8-IA48' }
      },
      {
        id: 'women-02',
        title: 'Silver Lines',
        alt: 'Close portrait of a woman with natural grey hair.',
        src: `https://images.unsplash.com/photo-1460501501851-d594d24ea8b2${unsplashParams}`,
        year: '2022',
        description: 'Celebrating age, grace, and the stories etched in every line and contour.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/wi0GiZz2J5s' }
      },
      {
        id: 'women-03',
        title: 'In Motion',
        alt: 'Blurred black and white portrait of a woman moving through frame.',
        src: `https://images.unsplash.com/photo-1492562080023-ab3db95bfbce${unsplashParams}`,
        year: '2024',
        description: 'An exploration of the tension between motion and stillness in feminine identities.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/vTL_qy03D1I' }
      }
    ]
  },
  {
    id: 'editorial',
    title: 'Editorial',
    tagline: 'Narratives in Contrast',
    description:
      'Editorial spreads that combine graphic silhouettes with modern minimalism for fashion-forward storytelling.',
    images: [
      {
        id: 'editorial-01',
        title: 'City Geometry',
        alt: 'Model leaning on a geometric concrete structure.',
        src: `https://images.unsplash.com/photo-1469334031218-e382a71b716b${unsplashParams}`,
        year: '2023',
        description: 'Shot for Monochrome Magazine, exploring architectural forms as fashion backdrops.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/JuUwnVG4qMg' }
      },
      {
        id: 'editorial-02',
        title: 'Echoes',
        alt: 'Two models standing back to back in a minimal studio.',
        src: `https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb${unsplashParams}`,
        year: '2024',
        description: 'Duality in design, highlighting mirrored silhouettes and tonal harmony.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/4_iZ147pSAk' }
      },
      {
        id: 'editorial-03',
        title: 'Soft Focus',
        alt: 'Model seated with dramatic lighting casting deep shadows.',
        src: `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab${unsplashParams}`,
        year: '2022',
        description: 'Editorial campaign unveiling a new line of sculptural garments.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/CpHNKNRwXps' }
      }
    ]
  },
  {
    id: 'fine-art',
    title: 'Fine Art',
    tagline: 'Poetry of Light',
    description:
      'Limited edition prints exploring abstraction, negative space, and the resonance of monochrome textures.',
    images: [
      {
        id: 'fine-art-01',
        title: 'Veil',
        alt: 'Abstract figure wrapped in translucent fabric.',
        src: `https://images.unsplash.com/photo-1527176930608-09cb256ab504${unsplashParams}`,
        year: '2021',
        description: 'Part of the "Veiled" series investigating perception and identity.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/y1uVQv0GrcU' }
      },
      {
        id: 'fine-art-02',
        title: 'Echo',
        alt: 'Motion blur of fabric creating waves of light.',
        src: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1${unsplashParams}`,
        year: '2020',
        description: 'An ode to the sculptural qualities of fabric suspended midair.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/3Z70SDuYs5g' }
      },
      {
        id: 'fine-art-03',
        title: 'Contour',
        alt: 'Side profile of a figure lit dramatically from behind.',
        src: `https://images.unsplash.com/photo-1524504542391-127872011665${unsplashParams}`,
        year: '2024',
        description: 'Mapping the body through gradients of light and shadow.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/mEZ3PoFGs_k' }
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    tagline: 'Monochrome Brands',
    description:
      'Commercial collaborations that translate brand identities into refined monochrome imagery.',
    images: [
      {
        id: 'commercial-01',
        title: 'Sculpted Sound',
        alt: 'Product shot of headphones with strong lighting.',
        src: `https://images.unsplash.com/photo-1524592094714-0f0654e20314${unsplashParams}`,
        year: '2023',
        description: 'Campaign for a boutique audio brand focusing on form and silhouette.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/FVRTLkgQ700' }
      },
      {
        id: 'commercial-02',
        title: 'Glass Ritual',
        alt: 'Perfume bottle surrounded by glass reflections.',
        src: `https://images.unsplash.com/photo-1524492412937-b28074a5d7da${unsplashParams}`,
        year: '2022',
        description: 'Highlighting fragrance as an architectural object.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/SvMUHfHaL-A' }
      },
      {
        id: 'commercial-03',
        title: 'Echo Type',
        alt: 'Minimalist typography poster against concrete.',
        src: `https://images.unsplash.com/photo-1498050108023-c5249f4df085${unsplashParams}`,
        year: '2024',
        description: 'Brand identity launch for Echo Type Foundry.',
        credit: { label: 'Unsplash', url: 'https://unsplash.com/photos/cckf4TsHAuw' }
      }
    ]
  }
];
