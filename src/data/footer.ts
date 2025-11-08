import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "All your favorite links, neatly organized and ready to chat with.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        // {
        //     text: "Pricing",
        //     url: "#pricing"
        // },
        // {
        //     text: "Testimonials",
        //     url: "#testimonials"
        // },
        {
            text: "Terms of Service",
            url: "/terms"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        }
    ],
    email: 'support@linkwise.app',
    telephone: '+91 8988886214',
    socials: {
        // github: 'https://github.com',
        x: 'https://twitter.com/x',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}