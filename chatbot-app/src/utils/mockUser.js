// mockUser.js

let mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: 'https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg', // Mock profile picture URL
  };
  
  // Mock function to get user data
  export const getUser = () => {
    return { ...mockUser }; // Return a copy of the user data
  };
  
  // Mock function to update user data
  export const updateUser = (newUserData) => {
    mockUser = { ...newUserData }; // Update the user data
  };
  