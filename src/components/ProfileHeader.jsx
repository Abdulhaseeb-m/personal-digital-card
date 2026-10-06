import { MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      {/* Profile Image */}
      <div className="profile-image-wrapper">
        <div className="profile-image-ring" />
        <img
          className="profile-image"
          src={profile.profileImage}
          alt={`${profile.name} profile photo`}
          loading="eager"
        />
      </div>

      {/* Name & Info */}
      <h1 className="profile-name">{profile.name}</h1>
      <p className="profile-title">{profile.title}</p>
      <p className="profile-university">{profile.universityShort || profile.university}</p>
      <p className="profile-location">
        <MapPin />
        {profile.location}
      </p>

      {/* Bio */}
      <p className="profile-bio">{profile.bio}</p>
    </header>
  );
}
