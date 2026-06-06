import React from 'react';
// @ts-ignore
import profileImage from '../assets/images/regenerated_image_1780771048854.jpg';

export const JayaProfilePhoto: React.FC<{ className?: string; rounded?: string }> = ({
  className = "",
  rounded = "rounded-full"
}) => {
  return (
    <img
      src={profileImage}
      alt="Jaya Pandey"
      className={`${className} object-cover ${rounded}`}
      referrerPolicy="no-referrer"
    />
  );
};
