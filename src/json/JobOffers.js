export class Joboffers {

    static getJoboffers = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER + "&category_slug=jobcate", {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content1": (response[i]['acf'] && response[i]['acf']['job_type']) || '',
                                "Address": (response[i]['acf'] && response[i]['acf']['address']) || '',
                                "slug": response[i].slug,
                                // "cate": response[i]._embedded['wp:term'][0][0].name || 'name',
                                "cate": response[i]._embedded['wp:term'][0][1].name || 'unknown',
                                "cateSlug": response[i]._embedded['wp:term'][0][1].slug,
                            });
                        }
                        console.log(data)

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }

    static getJoboffers2 = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER, {
                "method": "GET"
            }).then(response => response.headers, {
            }).then((header) => {
                var data = [];
                data.push({
                    "totaljob": header.get('X-WP-total'),
                });
                resolve(data)
            })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }

    static getJoboffersCate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER_CATE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "size": response[i].count,
                                "name": response[i].name || 'unknown',
                                "looking": response[i].count,
                                "description": response[i].description,
                                "slug": response[i].slug,
                            });
                        }

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
    static getJoboffersDetails = (slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER + '&category_slug=' + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content1": response[i].content.rendered || '',
                                // "Requirements": (response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Requirements']) || '',
                                // "Job_Access": (response[i]['post-meta-fields'] && response[i]['post-meta-fields']['job_access']) || '',
                                "content": (response[i]['acf'] && response[i]['acf']['job_type']) || '',
                                "Address": (response[i]['acf'] && response[i]['acf']['address']) || '',
                                // "Requirements": (response[i]['acf'] && response[i]['acf']['Requirements']) || '',
                                // "Job_Access": (response[i]['acf'] && response[i]['acf']['job_access']) || '',
                                "slug": response[i].slug,
                                "cate": response[i]._embedded['wp:term'][0][1].name || 'unknown',
                                "cateSlug": response[i]._embedded['wp:term'][0][1].slug,
                            });
                        }

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }

    static getJoboffersDetails2 = (slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_JOB_OFFER + '&slug=' + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content1": response[i].content.rendered || '',
                                "Job_Access": (response[i]['acf'] && response[i]['acf']['job_access']) || '',
                                "content": (response[i]['acf'] && response[i]['acf']['job_type']) || '',
                            });
                        }

                    }
                    resolve(data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
}