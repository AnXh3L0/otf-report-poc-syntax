import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function OTFIcon({ id, color }) {
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
        <rect y="6.79468" width="6" height="16.3646" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="0.794678" width="6" height="6" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="23.1593" width="6" height="6" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="32" y="23.1593" width="6" height="16.3646" transform="rotate(-180 32 23.1593)" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="26" y="29.1593" width="6" height="6" transform="rotate(-180 26 29.1593)" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="26" y="6.79468" width="6" height="6" transform="rotate(-180 26 6.79468)" fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <rect y="6.79468" width="6" height="16.3646" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="0.794678" width="6" height="6" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="23.1593" width="6" height="6" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="32" y="23.1593" width="6" height="16.3646" transform="rotate(-180 32 23.1593)" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="26" y="29.1593" width="6" height="6" transform="rotate(-180 26 29.1593)" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="26" y="6.79468" width="6" height="6" transform="rotate(-180 26 6.79468)" fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  )
}
