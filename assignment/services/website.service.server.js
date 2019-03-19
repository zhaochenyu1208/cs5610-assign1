module.exports = function (app) {
    var websites = [
        {websiteId: '321', name: 'Wayfair', developerId: '123', description: 'This is Wayfair'},
        {websiteId: '432', name: 'WeWork', developerId: '234',description: 'This is WeWork'},
        {websiteId: '234', name: 'Microsoft', developerId: '123', description: 'This is Microsoft'},
        {websiteId: '333', name: 'HealthyPaws', developerId: '123', description: 'This is HealthyPaws'}
    ];
    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res) {
        var developerId = req.params['uid'];
        var website = req.body;
        website.websiteId = new Date().getTime() + '';
        website.developerId = developerId;
        websites.push(website);
        res.status(200).send(website);
    }

    function findAllWebsitesForUser(req, res) {
        let userId = req.params['uid'];
        const result = [];
        for (let x = 0; x < websites.length; x++) {
            if (websites[x].developerId === userId) {
                result.push(websites[x]);
            }
        }
        res.status(200).send(result);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params['websiteId'];
        var website = null;
        for (let x = 0; x < websites.length; x++) {
            if (websites[x].websiteId === websiteId) {
                website = websites[x];
                res.status(200).send(website);
                return;
            }
        }
        res.json({message: 'Website not found!'});
    }

    function updateWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        var website = req.body;
        for (let x = 0; x < websites.length; x++) {
            if (websites[x].websiteId === websiteId) {
                websites[x].name = website.name;
                websites[x].description = website.description;
                res.status(200).send(websites[x]);
                return;
            }
        }
        res.json({message: 'Website not found!'});
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        for (let x = 0; x < websites.length; x++) {
            if (websites[x].websiteId === websiteId) {
                websites.splice(x, 1);
                res.status(200).send(websites);
                return;
            }
        }
        res.json({message: 'Website not found!'});
    }
}
