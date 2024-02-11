import { elerior, 
        shugrup, 
        eyeshot, 
        heroSection, 
        core,
        musicPlayer,
        penwork,
        posDashboard,
        wheatherApp,
        insight,
        smBanner,
        fgIcons } from "../assets"

export const projects = [
    {
        "id": Number,
        "coverImg": elerior,
        "title": "ELERIOR",
        "subtitle": "Responsive Landing Page Design",
        "behanceLink": "https://www.behance.net/gallery/179974081/ELERIOR-Responsive-Landing-Page-Design",
        "view_on_homepage": true,
        "createdDate": '2023-09-14'
    },
    {
        "id": Number,
        "coverImg": shugrup,
        "title": "Shugrup",
        "subtitle": "Shoe E-Commerce Website",
        "behanceLink": "https://www.behance.net/gallery/179514585/SHUGRUP-Shoe-E-Commerce-Website",
        "view_on_homepage": true,
        "createdDate": '2023-09-08'
    },
    {
        "id": Number,
        "coverImg": eyeshot,
        "title": "EYESHOT",
        "subtitle": "Social media platform based on stories",
        "behanceLink": "https://www.behance.net/gallery/179126821/EYESHOT-(Mobile-App-Prototype)",
        "view_on_homepage": true,
        "createdDate": '2023-09-03'
    },
    {
        "id": Number,
        "coverImg": heroSection,
        "title": "Hero Section - UI Design",
        "subtitle": "Different Layouts of Hero Sections",
        "behanceLink": "https://www.behance.net/gallery/183340769/Hero-Section-UI-Design",
        "view_on_homepage": false,
        "createdDate": '2023-10-29'
    },
    {
        "id": Number,
        "coverImg": core,
        "title": "CORE (Design System)",
        "subtitle": "Figma UI Kit Libray Design",
        "behanceLink": "https://www.behance.net/gallery/181389929/CORE-FIGMA-UI-KIT-LIBRARY-DESIGN",
        "view_on_homepage": true,
        "createdDate": '2023-10-03'
    },
    {
        "id": Number,
        "coverImg": musicPlayer,
        "title": "Simple Music Player",
        "subtitle": "Mobile App Prototype of a Music Player",
        "behanceLink": "https://www.behance.net/gallery/182648847/Simple-Music-Player-Mobile-App-Prototype",
        "view_on_homepage": false,
        "createdDate": '2023-10-19'
    },

    {
        "id": Number,
        "coverImg": penwork,
        "title": "Penwork",
        "subtitle": "Hero Section Prototype",
        "behanceLink": "https://www.behance.net/gallery/178658975/Penwork-(Hero-Section-Prototype)",
        "view_on_homepage": false,
        "createdDate": '2023-08-28'
    },
    {
        "id": Number,
        "coverImg": posDashboard,
        "title": "Web-based POS Dashboard",
        "subtitle": "UI Design",
        "behanceLink": "https://www.behance.net/gallery/176500149/Web-based-POS-Dashboard-(UI-Design)",
        "view_on_homepage": false,
        "createdDate": '2023-07-30'
    },

    {
        "id": Number,
        "coverImg": wheatherApp,
        "title": "Wheather Mobile App",
        "subtitle": "UI Design",
        "behanceLink": "https://www.behance.net/gallery/176819771/Weather-Mobile-App",
        "view_on_homepage": false,
        "createdDate": '2023-08-03'
    },
    {
        "id": Number,
        "coverImg": insight,
        "title": "Insight Enterprises",
        "subtitle": "Landing Page Redesign",
        "behanceLink": "https://www.behance.net/gallery/183918189/Insight-Enterprises-(Shop-Page-Redesign)",
        "view_on_homepage": false,
        "createdDate": '2023-11-06'
    },
    {
        "id": Number,
        "coverImg": smBanner,
        "title": "Product Social Media Banner",
        "subtitle": "Social Media Banner Design",
        "behanceLink": "https://www.behance.net/gallery/182258279/Product-Social-Media-Banner",
        "view_on_homepage": false,
        "createdDate": '2023-10-14'
    },
    {
        "id": Number,
        "coverImg": fgIcons,
        "title": "FROSTED GLASS ICON DESIGN",
        "subtitle": "Icon Design",
        "behanceLink": "https://www.behance.net/gallery/178743863/FROSTED-GLASS-ICON-DESIGN",
        "view_on_homepage": false,
        "createdDate": '2023-08-29'
    }



//Setting the ID automatically based on the number of projects    
].map((project, index) => ({ ...project, id: index + 1 }))

    