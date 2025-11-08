import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const AppStoreButton = ({ dark }: { dark?: boolean }) => {
    const base = "relative inline-flex items-center justify-center min-w-[205px] mt-3 px-5 py-3 rounded-full w-full sm:w-fit gap-4 transition-transform transform will-change-transform hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 overflow-hidden group"
    const blackStyles = "text-white bg-black shadow-lg focus-visible:ring-black/30"
    const iconBg = "bg-white/10"

    return (
        <a
            href={ctaDetails.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Download on the App Store"
            className={clsx(base, blackStyles)}
        >
            {/* animated full-button overlay */}
            <span aria-hidden="true" className="absolute inset-0 bg-black transition-transform duration-300 transform group-hover:scale-105 opacity-95" />

            {/* content (kept above overlay) */}
            <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ring-0" >
                <span className={clsx("inline-flex items-center justify-center w-full h-full rounded-md", iconBg)}>
                    <svg viewBox="0 0 384 512" width="22" height="22" aria-hidden="true" className="text-white">
                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                </span>
            </span>

            <span className="relative z-10 flex flex-col leading-none text-left">
                <span className="text-[11px] tracking-wide opacity-90">Download on the</span>
                <span className="font-sans text-lg font-semibold -mt-0.5">App Store</span>
            </span>

            <span className="relative z-10 ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm opacity-90">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>

            <span className="sr-only">Open App Store link (opens in a new tab)</span>
        </a>
    )
}

export default AppStoreButton