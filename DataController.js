import Info from './Data.js';

class DataController {
    async createData(req, res) {
        try {
            const { name, title, email, telephone, github, telegram, birthYear, salary, workExperience, achievements, education, knowledgeAndSkills, additionalInformation, language } = req.body;
            const data = await Info.create({ name, email, title, telephone, github, telegram, birthYear, salary, workExperience, 
                achievements, education, knowledgeAndSkills, additionalInformation, language });
            res.status(200).json(data);
        } catch(e) {
            console.log(e);
        }
    };

    async getData(req, res) {
        try {
            res.set('Access-Control-Allow-Origin', '*');
            const data = await Info.find();
            res.status(200).json(data);
        } catch(e) {
            console.log(e);
        }
    };
};

const objDataController = new DataController();

export default objDataController;