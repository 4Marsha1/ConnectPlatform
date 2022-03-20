const asyncHandler = require('express-async-handler');
const request = require('request');
const Profile = require('../models/profileModel');
const User = require('../models/userModel');

// @Route       GET /api/profile
// @Desc        Get current user profile
// @Access      PRIVATE
const getProfile = asyncHandler(async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        if (!profile) {
            res.status(200).json({ msg: 'Profile Not Found' })
        }
        res.status(200).json(profile)
    } catch (err) {
        res.status(400);
        throw new Error("Profile doesn't exist")
    }
})

// @Route       POST /api/profile
// @Desc        Create or update User Profile
// @Access      PRIVATE
const updateProfile = asyncHandler(async (req, res) => {
    const { company, website, location, bio, status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin } = req.body;
    if (!status || !skills) {
        res.status(400);
        throw new Error("Status & Skills are required!")
    }
    // Build Profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
        profileFields.skills = skills.split(',').map(skills => skills.trim());
    }

    // Build Social Object
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (facebook) profileFields.social.facebook = facebook;

    try {
        const profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            const updatedProfile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
            res.status(200).json(updatedProfile)
        }
        else {
            const newProfile = await Profile.create(profileFields);
            res.status(200).json(newProfile)
        }
    } catch (err) {
        res.status(400);
        throw new Error("Profile creation Failed!")
    }
})

// @Route       POST /api/profile/experiences
// @Desc        Add Experiences
// @Access      PRIVATE
const addExperiences = asyncHandler(async (req, res) => {
    const { title, company, location, from, to, current, description } = req.body;
    if (!title || !company || !location || !from || !to) {
        res.status(400);
        throw new Error('Incomplete Fields')
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        if (!profile) {
            res.status(400)
            throw new Error('Profile not found')
        }
        const experiences = { title, company, location, from, to, current, description }
        profile.experiences.unshift(experiences);
        await profile.save();
        res.status(200).json(profile);
    } catch (err) {
        res.status(400);
        throw new Error("Couldn't add experience")
    }
})

// @Route       DELETE /api/profile/experiences/:id
// @Desc        Delete Experience
// @Access      PRIVATE
const deleteExperiences = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        if (!profile) {
            res.status(400);
            throw new Error("Profile doesn't exist")
        }
        const expIndex = profile.experiences.map(expe => expe.id).indexOf(id);
        profile.experiences.splice(expIndex, 1);
        await profile.save();
        res.status(200).json(profile)
    } catch (error) {
        res.status(400);
        throw new Error("Couldn't delete experience")
    }
})

// @Route       POST /api/profile/education
// @Desc        Add Education
// @Access      PRIVATE
const addEducation = asyncHandler(async (req, res) => {
    const { school, degree, fieldofstudy, from, to, current, description } = req.body;
    if (!school || !degree || !fieldofstudy || !from || !to) {
        res.status(400);
        throw new Error('Incomplete Fields!')
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id })
        if (!profile) {
            res.status(400);
            throw new Error("Profile doesn't exist")
        }
        const education = { school, degree, fieldofstudy, from, to, current, description };
        profile.educations.unshift(education);
        await profile.save();
        res.status(200).json(profile)
    } catch (err) {
        res.status(400);
        throw new Error("Couldn't add education")
    }
})

// @Route       DELETE /api/profile/education/:id
// @Desc        Delete Education
// @Access      PRIVATE
const deleteEducation = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        const profile = await Profile.findOne({ user: req.user.id })
        if (!profile) {
            res.status(400);
            throw new Error("Profile doesn't exist")
        }
        const eduIndex = profile.educations.map(edu => edu.id).indexOf(id)
        profile.educations.splice(eduIndex, 1);
        await profile.save();
        res.status(200).json(profile)
    } catch (err) {
        res.status(400);
        throw new Error("Couldn't add education")
    }
})

// @Route       GET /api/profile/all
// @Desc        Get all profiles
// @Access      PUBLIC
const getAllProfiles = asyncHandler(async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.status(200).json(profiles);
    } catch (err) {
        res.status(400)
        throw new Error("Couldn't Fetch Profiles")
    }
})

// @Route       GET /api/profile/:id
// @Desc        Get profile by PROFILE ID
// @Access      PUBLIC
const getProfileById = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        const profile = await Profile.findOne({ user: id }).populate('user', ['name', 'avatar']);
        if (!profile) {
            res.status(400);
            throw new Error('No Profile Found!')
        }
        res.status(200).json(profile);
    } catch (err) {
        res.status(400)
        throw new Error("Couldn't Fetch Profile")
    }
})

// @Route       DELETE /api/profile/
// @Desc        Delete Profile, User, Posts
// @Access      PRIVATE
const deleteProfile = asyncHandler(async (req, res) => {
    try {
        const profile = await Profile.findOneAndRemove({ user: req.user.id })
        const user = await User.findByIdAndRemove(req.user.id)
        if (!profile && !user) {
            res.status(400);
            throw new Error('Error')
        }
        res.status(200).json('Deleted User & Profile!');
    } catch (err) {
        res.status(400)
        throw new Error("Couldn't Fetch Profile")
    }
})

// @Route       GET /api/profile/github/:username
// @Desc        Get Github repos
// @Access      PUBLIC
const getGithubRepos = asyncHandler(async (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENTID
                }&client_secret=${process.env.GITHUB_SECRET}`,
            method: 'GET',
            headers: { 'user-agent': 'nodejs' }
        }
        request(options, (error, response, body) => {
            if (error) {
                console.log(error);
            }
            if (response.statusCode !== 200) {
                res.status(404);
                throw new Error('Github repos fetch failed!')
            }
            res.status(200).json(JSON.parse(body))
        })
    } catch (err) {
        res.status(400)
        throw new Error("Couldn't Fetch Github repos")
    }
})

module.exports = {
    getProfile,
    updateProfile,
    addExperiences,
    deleteExperiences,
    addEducation,
    deleteEducation,
    getAllProfiles,
    getProfileById,
    deleteProfile,
    getGithubRepos
}