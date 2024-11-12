const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');
const copyBtn = document.querySelector('.copy-btn');
const linkText = document.querySelector('.link');

// Toggle share options when share button is clicked
shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
});

// Copy link to clipboard when copy button is clicked
copyBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = linkText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Link copied to clipboard!');
});

// WhatsApp share functionality
const whatsappBtn = document.querySelector('.fab.fa-whatsapp');
whatsappBtn.addEventListener('click', () => {
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(linkText.textContent)}`;
    window.open(whatsappLink, '_blank');
});

// Instagram share functionality
const instagramBtn = document.querySelector('.fab.fa-instagram');
instagramBtn.addEventListener('click', () => {
    const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(linkText.textContent)}`;
    window.open(instagramLink, '_blank');
});

// Files share functionality
const filesBtn = document.querySelector('.far.fa-folder-open');
filesBtn.addEventListener('click', () => {
    // Replace with the actual link to your files
    const filesLink = 'https://example.com/files';
    window.open(filesLink, '_blank');
});

// LinkedIn share functionality
const linkedinBtn = document.querySelector('.fab.fa-linkedin-in');
linkedinBtn.addEventListener('click', () => {
    const linkedinLink = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(linkText.textContent)}`;
    window.open(linkedinLink, '_blank');
});

// Twitter share functionality
const twitterBtn = document.querySelector('.fab.fa-twitter');
twitterBtn.addEventListener('click', () => {
    const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(linkText.textContent)}`;
    window.open(twitterLink, '_blank');
});
