export const getImageUrl = (path) => {
    if (!path) {
        console.error("Path is undefined or empty");
        return;
    }
    
    try {

        const fullUrl = new URL(`/assets/${path}`, window.location.origin).href;
        return fullUrl;
    } catch (err) {
        console.error("Error constructing URL:", err);
        return null;
    }
}

export const adjustImageHeights = (selector) => {
    const elements = document.querySelectorAll(selector);
    let maxHeight = 0;
  
    // Find the tallest element
    elements.forEach((el) => {
      el.style.height = 'auto'; // Reset height to get accurate measurement
      maxHeight = Math.max(maxHeight, el.offsetHeight);
    });
    console.log(maxHeight);
    // Apply the tallest height to all elements
    elements.forEach((el) => {
      el.style.height = `${maxHeight}px`;
    });
  };
  
