import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ComoFunciona from '@/components/ComoFunciona'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import QueRevisamos from '@/components/QueRevisamos'
import Alcoholemia from '@/components/Alcoholemia'
import NoPrometemos from '@/components/NoPrometemos'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <ComoFunciona />
      <Benefits />
      <Process />
      <QueRevisamos />
      <Alcoholemia />
      <NoPrometemos />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
