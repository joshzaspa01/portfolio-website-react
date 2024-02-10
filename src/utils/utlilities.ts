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
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarBackdrop = document.querySelector('.sidebar_backdrop');
  
    if (hamburgerMenu && sidebar && sidebarBackdrop) {
      hamburgerMenu.classList.toggle('open');
      sidebar.classList.toggle('active');
      sidebarBackdrop.classList.toggle('show_backdrop');
    } else {
      console.error('One or more elements not found.');
    }


}


// Download CV
const downloadCV = () => {

    let link = document.createElement('a');

    link.setAttribute('download', 'CV - Joshua Zaspa');
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