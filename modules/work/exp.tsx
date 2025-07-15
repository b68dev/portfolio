'use client'
import { useLocale } from 'next-intl'
import { WORK_EXPERIENCES } from './datasource'
import { WorkExpCard } from './exp-card'

export function WorkExperiences() {
  const locale = useLocale()

  return (
    <div className='flex flex-col gap-8'>
      {WORK_EXPERIENCES.map((workExperience) => (
        <WorkExpCard key={workExperience.company.name} workExperience={workExperience} locale={locale} />
      ))}
    </div>
  )
}
