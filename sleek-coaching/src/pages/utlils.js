// utils.js
export const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
  
    if (element) {
      const offset = element.offsetTop - document.querySelector('.custom-navbar').offsetHeight;
  
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  