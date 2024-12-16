import { useState, useEffect } from 'react';
import { FaSave, FaUser, FaTimes } from 'react-icons/fa';

function UserSettings({ onClose,getUser, updateUser}) {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        profilePic: '',
    });

    useEffect(() => {
        const user = getUser(); // Fetch mock user data
        setUserData(user);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        updateUser(userData); // Update user data using mock API
        onClose(); // Close the modal
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-80">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl">User Settings</h2>
                    <button onClick={onClose} className="text-gray-500">
                        <FaTimes />
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="profilePic" className="block text-sm">Profile Picture</label>
                        <div className="flex items-center space-x-4">
                            <img
                                src={userData.profilePic || 'src/assets/profile.jpeg'}
                                alt="Profile"
                                className="w-16 h-16 rounded-full border"
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center space-x-2"
                    >
                        <FaSave />
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;
