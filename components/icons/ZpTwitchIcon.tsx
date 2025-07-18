import { clsxm } from '@zolplay/utils'

export function ZpTwitchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={clsxm('stroke-current', className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <g>
          <g>
            <path
              d='M460,7.5H60c-2.817,0-5.504,1.189-7.399,3.273l-50,55C0.927,67.614,0,70.013,0,72.5v290c0,5.522,4.477,10,10,10h115v80
              c0,5.522,4.477,10,10,10h55c2.791,0,5.455-1.166,7.348-3.217l57.03-61.783H400c2.652,0,5.196-1.054,7.071-2.929l60-60
              c1.875-1.876,2.929-4.419,2.929-7.071v-310C470,11.977,465.523,7.5,460,7.5z M450,323.357L395.858,377.5H250
              c-2.791,0-5.455,1.166-7.348,3.217l-57.03,61.783H145v-80c0-5.522-4.477-10-10-10H20V76.366L64.424,27.5H450V323.357z'
            />
            <path
              d='M85,322.5h80v45c0,3.714,2.058,7.121,5.345,8.851c1.462,0.769,3.061,1.149,4.654,1.149c1.988,0,3.968-0.592,5.666-1.76
              l77.441-53.24H350c2.652,0,5.196-1.054,7.071-2.929l55-55c1.875-1.876,2.929-4.419,2.929-7.071v-190c0-5.522-4.477-10-10-10H85
              c-5.523,0-10,4.478-10,10v245C75,318.022,79.477,322.5,85,322.5z M95,77.5h300v175.857L345.858,302.5H255
              c-2.023,0-3.999,0.613-5.665,1.76L185,348.489V312.5c0-5.522-4.477-10-10-10H95V77.5z'
            />
            <path
              d='M215,232.5v-100c0-5.522-4.477-10-10-10h-40c-5.523,0-10,4.478-10,10v100c0,5.523,4.477,10,10,10h40
              C210.523,242.5,215,238.023,215,232.5z M195,222.5h-20v-80h20V222.5z'
            />
            <path
              d='M265,242.5h40c5.523,0,10-4.477,10-10v-100c0-5.522-4.477-10-10-10h-40c-5.523,0-10,4.478-10,10v100
              C255,238.023,259.477,242.5,265,242.5z M275,142.5h20v80h-20V142.5z'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
