const { db } = require('../util/admin');

exports.getAllGms = (request, response) => {
	db.collection('gms').orderBy('createdAt', 'desc')
	.get().then((data) => {
			let gms = [];
			data.forEach((doc) => {
            gms.push({
                gmId: doc.id,
                address: doc.data().address,
                createdAt: doc.data().createdAt,
                });
			});
			return response.json(gms);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.createGm = (request, response) => {
    const newGm = {
        address: request.body.address,
        createdAt: new Date().toISOString()
    }
    db.collection('gms').add(newGm).then((doc)=>{
            const responseGm = newGm;
            responseGm.id = doc.id;
            return response.json(responseGm);
        })
        .catch((err) => {
			return response.status(500).json({ error: 'Something went wrong' });
		});
};