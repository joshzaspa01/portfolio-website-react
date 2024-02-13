import { cv } from "../assets";

const sendingEmail = () => {

    // Replace the placeholders with actual email, subject, and body
    const toEmail = 'joshuazaspa01@gmail.com';

    const subject = 'FROM THE WEBSITE';
    
    // Construct the mailto URL
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}`;

    // Open the default email client
    window.location.href = mailtoUrl;


}


// Showing Sidebar
const showSidebar = () => {

    const hamburgerMenu: any = document.querySelector('.hamburger_menu');

    const sidebar: any = document.querySelector('.sidebar');

    const sidebarBackdrop: any = document.querySelector('.sidebar_backdrop');

    hamburgerMenu.classList.toggle('open');

    sidebar.classList.toggle('active');

    sidebarBackdrop.classList.toggle('show_backdrop')
    
}


// Download CV
const downloadCV = () => {

    let link = document.createElement('a');

    link.setAttribute('download', '');
    link.href = cv;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
}


export {
  sendingEmail,
  showSidebar,
  downloadCV,
}