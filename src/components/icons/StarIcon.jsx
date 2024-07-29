import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function StarIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <path d="M15 5.2083V2.97705H21V5.2083C21 7.58955 20.4375 9.90205 19.3875 11.9771H29H32V17.9771H31V22.9771H29.5V27.4771H28V30.9771H25H17.5H16.5938L15.8375 30.4708L11.3375 27.4708L10 26.5833V24.9771V20.9771V14.9771V13.5333L11.125 12.6333L11.6187 12.2333C13.7562 10.5271 14.9937 7.93955 14.9937 5.2083H15ZM8 12.9771V30.9771H0V12.9771H8Z" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path d="M15 5.2083V2.97705H21V5.2083C21 7.58955 20.4375 9.90205 19.3875 11.9771H29H32V17.9771H31V22.9771H29.5V27.4771H28V30.9771H25H17.5H16.5938L15.8375 30.4708L11.3375 27.4708L10 26.5833V24.9771V20.9771V14.9771V13.5333L11.125 12.6333L11.6187 12.2333C13.7562 10.5271 14.9937 7.93955 14.9937 5.2083H15ZM8 12.9771V30.9771H0V12.9771H8Z" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
