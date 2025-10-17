export interface GalleryImage {
  id: string
  title: string
  description: string
  src: string
  alt: string
  dimensions: string
}

export interface GalleryCategory {
  id: string
  name: string
  tagline: string
  summary: string
  cta: string
  images: GalleryImage[]
}

export interface StudioContact {
  email: string
  instagram: string
  location: string
}

export interface AboutContent {
  id: string
  name: string
  tagline: string
  summary: string
  approach: string[]
  contact: StudioContact
}

export const categories: GalleryCategory[] = [
  {
    id: 'women',
    name: 'Women',
    tagline: 'Portraits that celebrate strength and softness.',
    summary:
      'A collection of intimate black-and-white portraits exploring grace, grit, and vulnerability through sculpted light.',
    cta: 'View Women portfolio',
    images: [
      {
        id: 'women-1',
        title: 'Poise',
        description: 'A dancer framed against negative space, frozen mid-turn.',
        src: '/images/women-poise.jpg',
        alt: 'Ballet dancer in profile with soft rim lighting.',
        dimensions: '4000x5000'
      },
      {
        id: 'women-2',
        title: 'Quiet Strength',
        description: 'Portrait with sculpted cheekbones and dramatic shadows.',
        src: '/images/women-strength.jpg',
        alt: 'Woman gazing into camera with strong contrast lighting.',
        dimensions: '4200x5200'
      },
      {
        id: 'women-3',
        title: 'Threshold',
        description: 'Soft window light reveals textures and tone.',
        src: '/images/women-threshold.jpg',
        alt: 'Woman standing in doorway with soft light on face.',
        dimensions: '3600x4800'
      }
    ]
  },
  {
    id: 'editorial',
    name: 'Editorial',
    tagline: 'Narratives told in stark contrast and clean lines.',
    summary:
      'Editorial series crafted for publications that favor minimal composition, architectural lines, and layered storytelling.',
    cta: 'Explore Editorial stories',
    images: [
      {
        id: 'editorial-1',
        title: 'City Geometry',
        description: 'Model framed by brutalist architecture and harsh noon light.',
        src: '/images/editorial-geometry.jpg',
        alt: 'Model standing among geometric concrete structures.',
        dimensions: '5400x3600'
      },
      {
        id: 'editorial-2',
        title: 'Shadow Play',
        description: 'Blending fashion and form through layered silhouettes.',
        src: '/images/editorial-shadow.jpg',
        alt: 'Fashion portrait with overlapping shadows and strong angles.',
        dimensions: '5000x3200'
      },
      {
        id: 'editorial-3',
        title: 'Midnight Narrative',
        description: 'Gritty monochrome story captured on empty streets.',
        src: '/images/editorial-midnight.jpg',
        alt: 'Model walking alone on dimly lit city street at night.',
        dimensions: '5200x3400'
      }
    ]
  },
  {
    id: 'fine-art',
    name: 'Fine Art',
    tagline: 'Meditations on form, texture, and negative space.',
    summary:
      'Limited edition prints exploring the interplay between human form and architectural minimalism in monochrome.',
    cta: 'Discover Fine Art series',
    images: [
      {
        id: 'fine-art-1',
        title: 'Veil',
        description: 'Ethereal portrait veiled in sheer fabric.',
        src: '/images/fineart-veil.jpg',
        alt: 'Person wrapped in translucent fabric with soft lighting.',
        dimensions: '4800x6000'
      },
      {
        id: 'fine-art-2',
        title: 'Stone & Skin',
        description: 'Contrast between smooth skin and rough marble.',
        src: '/images/fineart-stone.jpg',
        alt: 'Hands touching marble surface, highlighting textures.',
        dimensions: '4600x4600'
      },
      {
        id: 'fine-art-3',
        title: 'Echo',
        description: 'Repetition of shapes creating rhythmic balance.',
        src: '/images/fineart-echo.jpg',
        alt: 'Silhouetted figure against repeating archways.',
        dimensions: '4200x5600'
      }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial',
    tagline: 'Minimalist campaigns for thoughtful brands.',
    summary:
      'Campaign work for brands seeking a timeless, tactile aesthetic through monochrome storytelling and refined direction.',
    cta: 'See Commercial campaigns',
    images: [
      {
        id: 'commercial-1',
        title: 'Fragrance Study',
        description: 'Product spotlight with sculpted reflections and mist.',
        src: '/images/commercial-fragrance.jpg',
        alt: 'Perfume bottle surrounded by mist with dramatic light.',
        dimensions: '3600x4800'
      },
      {
        id: 'commercial-2',
        title: 'Sculpted Light',
        description: 'High-contrast fashion campaign with bold shapes.',
        src: '/images/commercial-light.jpg',
        alt: 'Model wearing structured coat in hard light.',
        dimensions: '3800x5000'
      },
      {
        id: 'commercial-3',
        title: 'Texture Series',
        description: 'Macro exploration of textiles with tonal depth.',
        src: '/images/commercial-texture.jpg',
        alt: 'Close-up of folded fabric with shadows.',
        dimensions: '4000x4000'
      }
    ]
  }
]

export const aboutContent: AboutContent = {
  id: 'about',
  name: 'About',
  tagline: 'Minimal stories told in monochrome light.',
  summary:
    'Monochrome Muse is a studio led by photographer Aurelia Hart, dedicated to black-and-white narratives where every highlight and shadow counts. The work spans portraiture, editorial commissions, and commercial campaigns, always centered on crafted light and timeless styling.',
  approach: [
    'Intentional storytelling rooted in empathy and collaboration.',
    'Dedicated to sustainable production practices and inclusive representation.',
    'Available for assignments worldwide with a trusted production network.'
  ],
  contact: {
    email: 'hello@monochromemuse.studio',
    instagram: '@monochromemuse',
    location: 'Based in New York — working globally'
  }
}
