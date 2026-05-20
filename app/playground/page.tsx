import type { Metadata } from 'next'
import InfiniteGallery from '@/components/infinite-gallery'

export const metadata: Metadata = {
  title: 'Playground — Infinite Projects Gallery',
  description:
    'An infinite draggable moodboard showcasing featured projects. Drag in any direction to explore endlessly.',
}

export default function page() {
  return (
    <main>
      <InfiniteGallery />
    </main>
  )
}