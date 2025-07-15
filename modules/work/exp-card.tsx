'use client'

import type { WorkExperience } from './datasource'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbArrowUpRight, TbMapPin, TbCalendar } from 'react-icons/tb'
import Balancer from 'react-wrap-balancer'

export function WorkExpCard({ workExperience, locale }: { workExperience: WorkExperience; locale: string }) {
  return (
    <div className='w-full rounded-xl not-prose ring-2 ring-black/5 dark:ring-white/5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800'>
      <div className='relative p-6'>
        {/* Company Logo and Timeline */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center space-x-3'>
            <Image
              className='w-10 h-10 rounded-lg md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-xl object-contain'
              src={workExperience.company.logo}
              alt={`${workExperience.company.name} logo`}
              width={56}
              height={56}
            />
            <div className='flex flex-col'>
              <span className='font-semibold text-stone-900 dark:text-stone-100'>{workExperience.company.name}</span>
              <div className='flex items-center space-x-1 text-xs text-stone-600 dark:text-stone-400'>
                <TbMapPin className='w-3 h-3' />
                <span>
                  {workExperience.location.city}
                  {workExperience.location.isRemote && ' (Remote)'}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <div className='flex items-center space-x-1 text-xs font-mono text-stone-500 dark:text-stone-400'>
              <TbCalendar className='w-3 h-3' />
              <span className='whitespace-nowrap'>
                {workExperience.timeline.from} - {workExperience.timeline.to}
              </span>
            </div>
            {workExperience.isVolunteering && (
              <span className='text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full mt-1'>
                Volunteer
              </span>
            )}
          </div>
        </div>

        {/* Position Title */}
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-4'>
          <Balancer>{workExperience.position}</Balancer>
        </h2>

        {/* Description */}
        <p className='text-sm md:text-base leading-relaxed text-stone-700 dark:text-stone-300 mb-6'>
          {workExperience.description}
        </p>

        {/* Tech Stack and Company Link */}
        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4'>
          {/* Tech Stack */}
          {workExperience.techstack && workExperience.techstack.length > 0 && (
            <div className='flex-1'>
              <h3 className='text-sm font-semibold text-stone-900 dark:text-stone-100 mb-2'>Tech Stack</h3>
              <div className='flex flex-wrap gap-2'>
                {workExperience.techstack.map((tech, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md border border-stone-200 dark:border-stone-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Company Website Link */}
          <div className='flex items-center'>
            <Link
              href={workExperience.company.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-1 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors'
            >
              <span>Visit Company</span>
              <TbArrowUpRight className='w-4 h-4' />
            </Link>
          </div>
        </div>

        {/* Subtle background decoration */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-stone-50/50 to-transparent dark:from-stone-800/30 dark:to-transparent rounded-xl pointer-events-none' />
      </div>
    </div>
  )
}
