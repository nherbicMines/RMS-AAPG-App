const { Request } = require("tedious");
var TYPES = require('tedious').TYPES;


module.exports = function judgeFormQuery(app, connection){
    app.post("/JudgeForm", (req, res) => {
        const email = req.body.email;
        const presentationNum = req.body.presentationNum;
        const organization = req.body.organization;
        const attractiveness = req.body.attractiveness;
        const legibility = req.body.legibility;
        const originality = req.body.originality;
        const longevity = req.body.longevity;
        const substantiation = req.body.substantiation;
        const impression = req.body.impression;
        const paper = req.body.paper;
        const lectureTour = req.body.lectureTour;
        const comments = req.body.comments;

        const request = new Request (
            `INSERT INTO individual_score (user_email, presentation_number, organization, attractiveness, legibilty, 
            tech_originality, sig_and_longevity, substantiation, overall_impression, paper, lecture_tour, comments) 
            VALUES (@email, @presentationNum, @organization, @attractiveness, @legibility, @originality, @longevity, 
            @substantiation, @impression, @paper, @lectureTour, @comments)`,

            (err, rowCount) => {
                if(err){
                    console.error(err.message);
                }else{
                    console.log(`${rowCount} row(s) returned`);
                }
            }
        );

        request.addParameter('email', TYPES.VarChar, email);
        request.addParameter('presentationNum', TYPES.Int, presentationNum);
        request.addParameter('organization', TYPES.Int, organization);
        request.addParameter('attractiveness', TYPES.Int, attractiveness);
        request.addParameter('legibility', TYPES.Int, legibility);
        request.addParameter('originality', TYPES.Int, originality);
        request.addParameter('longevity', TYPES.Int, longevity);
        request.addParameter('substantiation', TYPES.Int, substantiation);
        request.addParameter('impression', TYPES.Int, impression);
        request.addParameter('paper', TYPES.Text, paper);
        request.addParameter('lectureTour', TYPES.Text, lectureTour);
        request.addParameter('comments', TYPES.VarChar, comments);

        connection.execSql(request);
    });
}