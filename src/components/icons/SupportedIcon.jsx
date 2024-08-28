import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function SupportedIcon({ id, color }) {
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
        <g clip-path="url(#clip0_2221_5907)">
            <path d="M10.45 9.10894L12 10.6589L18 16.6589L24 10.6589L25.55 9.10894C26.4812 8.17769 27 6.92144 27 5.60894V5.38394C27 2.77769 24.8813 0.658936 22.275 0.658936C20.8375 0.658936 19.4812 1.30894 18.5812 2.43394L18 3.15894L17.4188 2.43394C16.525 1.30894 15.1625 0.658936 13.725 0.658936C11.1188 0.658936 9 2.77769 9 5.38394V5.60894C9 6.92144 9.51875 8.17769 10.45 9.10894ZM8.75 21.1027L4.3 24.6652H0V32.6652H2H14H24H24.775L25.4125 32.2277L33.4125 26.7277L35.475 25.3089L32.6437 21.1902L30.5812 22.6089L24.675 26.6714H16V24.6714H18H22H24V20.6714H22H18H14H10H9.3L8.75 21.1089V21.1027Z" className="fill-[var(--icon-foreground)]" />
        </g>
        <defs>
            <clipPath id="clip0_2221_5907">
                <rect width="36" height="32" fill="white" transform="translate(0 0.658936)"/>
            </clipPath>
        </defs>
      </LightMode>
      <DarkMode>
      <g clip-path="url(#clip0_2221_5907)">
            <path d="M10.45 9.10894L12 10.6589L18 16.6589L24 10.6589L25.55 9.10894C26.4812 8.17769 27 6.92144 27 5.60894V5.38394C27 2.77769 24.8813 0.658936 22.275 0.658936C20.8375 0.658936 19.4812 1.30894 18.5812 2.43394L18 3.15894L17.4188 2.43394C16.525 1.30894 15.1625 0.658936 13.725 0.658936C11.1188 0.658936 9 2.77769 9 5.38394V5.60894C9 6.92144 9.51875 8.17769 10.45 9.10894ZM8.75 21.1027L4.3 24.6652H0V32.6652H2H14H24H24.775L25.4125 32.2277L33.4125 26.7277L35.475 25.3089L32.6437 21.1902L30.5812 22.6089L24.675 26.6714H16V24.6714H18H22H24V20.6714H22H18H14H10H9.3L8.75 21.1089V21.1027Z" fill={`url(#${id}-gradient-dark)`} />
        </g>
        <defs>
            <clipPath id="clip0_2221_5907">
                <rect width="36" height="32" fill="white" transform="translate(0 0.658936)"/>
            </clipPath>
        </defs>
      </DarkMode>
    </>
  )
}