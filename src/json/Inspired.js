
import servBL from '../images/serv-blank.jpg';

export class Inspired {

    static getInspired2 = (start) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2 + `&per_page=9&page=${start}`, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded['wp:featuredmedia'] && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
                                "slug": response[i].slug,
                                "author_name": response[i]._embedded['author'][0].name,
                                "author_profile": (response[i]._embedded['author'] && response[i]._embedded['author'][0].avatar_urls['96']) || servBL,
                                "description": response[i]._embedded['author'] && response[i]._embedded['author'][0].description,
                                "content": response[i].content.rendered || '',
                                "cate": response[i]._embedded['wp:term'][0][0].name,
                                "cateslug": response[i]._embedded['wp:term'][0][0].slug,
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
    static searchdata = (word) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2 + `&search=${word}`, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered,
                                "img": (response[i]._embedded['wp:featuredmedia'] && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
                                "slug": response[i].slug,
                                "author_name": response[i]._embedded['author'][0].name,
                                "author_profile": (response[i]._embedded['author'] && response[i]._embedded['author'][0].avatar_urls['96']) || servBL,
                                "content": response[i].content.rendered || '',
                                "description": response[i]._embedded['author'] && response[i]._embedded['author'][0].description,
                                "cate": response[i]._embedded['wp:term'][0][0].name,
                                "cateslug": response[i]._embedded['wp:term'][0][0].slug,
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
    static getInspiredAllPost = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2, {
                "method": "GET"
            }).then(response => response.headers, {
            }).then(header => {
                var data = [];
                data.push({ 'totaljob': header.get('X-WP-total') })
                resolve(data)
            })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }

    static getcate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2_CATE + '&exclude=52', {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "catename": response[i].name,
                                "cateslug": response[i].slug,
                                "size": response[i].count,
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
    static getInspired3 = (start, slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_GET_INSPIRED2 + `&per_page=9&page=${start}&category_slug=` + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded['wp:featuredmedia'] && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
                                "slug": response[i].slug,
                                "author_name": response[i]._embedded['author'][0].name,
                                "author_profile": (response[i]._embedded['author'] && response[i]._embedded['author'][0].avatar_urls['96']) || servBL,
                                "content": response[i].content.rendered || '',
                                "description": response[i]._embedded['author'] && response[i]._embedded['author'][0].description,
                                "cate": response[i]._embedded['wp:term'][0][0].name,
                                "cateslug": response[i]._embedded['wp:term'][0][0].slug,
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