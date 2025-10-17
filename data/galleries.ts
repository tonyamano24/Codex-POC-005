export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

export type GalleryCategory = {
  id: string
  title: string
  kicker: string
  description: string
  images: GalleryImage[]
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'women',
    title: 'Women in focus',
    kicker: 'Portrait Study',
    description:
      'Intimate portraits celebrating resilience, grace, and depth. Shot in natural light and medium-format film.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        alt: 'Woman gazing into the distance with dramatic lighting',
        caption: 'Gaze — 2023'
      },
      {
        src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
        alt: 'Silhouette of a dancer captured mid-motion',
        caption: 'Silhouette Study — 2022'
      },
      {
        src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        alt: 'Close portrait of a woman with textured fabric',
        caption: 'Veiled — 2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
        alt: 'Woman leaning against a wall with high contrast light',
        caption: 'Quiet Strength — 2021'
      }
    ]
  },
  {
    id: 'editorial',
    title: 'Editorial narratives',
    kicker: 'Print Commissions',
    description:
      'Concept-driven stories crafted for magazines and cultural institutions, blending fashion and documentary.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80',
        alt: 'Editorial scene with two models seated in a studio',
        caption: 'Duality — 2023'
      },
      {
        src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
        alt: 'Model wearing avant-garde fashion in a minimal set',
        caption: 'Obsidian Lines — 2022'
      },
      {
        src: 'https://images.unsplash.com/photo-1511288594014-05a0f6d4e4ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Model captured mid-walk under dramatic light',
        caption: 'Midnight Runway — 2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
        alt: 'Fashion editorial with a model and abstract props',
        caption: 'Negative Space — 2021'
      }
    ]
  },
  {
    id: 'fine-art',
    title: 'Fine art explorations',
    kicker: 'Gallery Series',
    description:
      'Limited-edition prints exploring surreal landscapes and the interplay between architecture and the human form.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80',
        alt: 'Figure standing in a vast architectural space',
        caption: 'Monolith — 2023'
      },
      {
        src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
        alt: 'Abstract composition with human form and fabric',
        caption: 'Chiaroscuro — 2022'
      },
      {
        src: 'https://images.unsplash.com/photo-1487412944453-9ca06411be39?auto=format&fit=crop&w=900&q=80',
        alt: 'Black and white abstract of a building interior',
        caption: 'Structure & Echo — 2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
        alt: 'Surreal landscape with lone figure on dunes',
        caption: 'Solitude — 2021'
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial campaigns',
    kicker: 'Brand Collaborations',
    description:
      'Strategic visuals for brands seeking a distinctive monochrome identity across product launches and lookbooks.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
        alt: 'Product shoot with perfume bottle and dramatic lighting',
        caption: 'Nox Parfum — 2024'
      },
      {
        src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
        alt: 'Fashion accessories displayed on marble',
        caption: 'Maison Artefact — 2023'
      },
      {
        src: 'https://images.unsplash.com/photo-1420730814210-18b5c4ee7a14?auto=format&fit=crop&w=900&q=80',
        alt: 'Commercial portrait with bold shadow play',
        caption: 'Spectrum Launch — 2022'
      },
      {
        src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        alt: 'Minimalist product styling with geometric props',
        caption: 'Form Study — 2021'
      }
    ]
  }
]
