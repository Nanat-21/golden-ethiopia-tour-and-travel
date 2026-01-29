const API_URL = "http://localhost:5000/api";

export const sendContactMessage = async (formData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};

export const fetchPackages = async () => {
  const response = await fetch(`${API_URL}/packages`);
  return response.json();
};

// Fetch all images for the Gallery page
export const fetchGallery = async () => {
  const response = await fetch(`${API_URL}/gallery`);
  return response.json();
};

// Fetch testimonials for the Home page
export const fetchTestimonials = async () => {
  const response = await fetch(`${API_URL}/testimonials`);
  return response.json();
};
