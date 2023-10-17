import Image from 'next/image'
import { Button } from '@/components/Button'
import heroImage from '@/images/hero.svg'

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Open Technology Fund Annual Report
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
              This report covers the activities supported by Open Technology Fund (OTF), with a small number of exceptions for highly sensitive projects, from March 2022 through December 2022 with FY2021 funds
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/report/our-mission">Get started</Button>
                <Button href="https://github.com/uradotdesign" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <Image
                src={heroImage}
                alt=""
                width={600}
                height={600}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
