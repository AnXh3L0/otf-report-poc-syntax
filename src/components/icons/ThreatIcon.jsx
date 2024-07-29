import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function ThreatIcon({ id, color }) {
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
        <g clipPath="url(#clip0_2221_5782)">
        <path d="M28.5103 2.97705H0.510254V30.9771H28.5103V2.97705ZM16.0103 8.97705V10.4771V17.4771V18.9771H13.0103V17.4771V10.4771V8.97705H16.0103ZM13.0103 20.9771H16.0103V23.9771H13.0103V20.9771Z" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        </g>
        <defs>
        <clipPath id="clip0_2221_5782">
        <rect width="28" height="32" fill="white" transform="translate(0.510254 0.977051)"/>
        </clipPath>
        </defs>
      </LightMode>
      <DarkMode>
      <g clipPath="url(#clip0_2221_5782)">
        <path d="M28.5103 2.97705H0.510254V30.9771H28.5103V2.97705ZM16.0103 8.97705V10.4771V17.4771V18.9771H13.0103V17.4771V10.4771V8.97705H16.0103ZM13.0103 20.9771H16.0103V23.9771H13.0103V20.9771Z" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        </g>
        <defs>
        <clipPath id="clip0_2221_5782">
        <rect width="28" height="32" fill="white" transform="translate(0.510254 0.977051)"/>
        </clipPath>
        </defs>
      </DarkMode>
    </>
  )
}
