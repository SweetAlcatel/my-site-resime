import mongoose from 'mongoose';

const Info = new mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true},
    email: {type: String, required: true},
    telephone: {type: String, required: true},
    github: {type: String, required: true},
    telegram: {type: String, required: true},
    birthYear: {type: String, required: true},
    salary: {type: String, required: true},
    workExperience: {type: String, required: true},
    achievements:  [{ type: String }],
    education: [{ type: String }],
    knowledgeAndSkills: [{ type: String }],
    additionalInformation: {type: String},
    language: {type: String}
});

export default mongoose.model('Info', Info);