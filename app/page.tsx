import Image from 'next/image'
import Preview from '@/components/Preview'
import Features from '@/components/Features'
import Buy from '@/components/Buy'
import Testimonials from '@/components/Testimonials'


const preview = (
  <Preview />
)

const features = (
  <Features />
)

const buy = (
  <Buy />
)

const testimonials = (
  <Testimonials />
)

export default function Home() {
  return (
    <main className='font-sans'>
      {preview}
      {buy}
      {features}
      {testimonials}
    </main>
  )
}
