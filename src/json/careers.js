
import reviewBL from '../images/review-blank.png';

export class CareerData {
    static getCareer = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CAREERS, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || reviewBL,
                                "content": response[i].content.rendered || '',
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
    static getCareer2 = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CAREERS2, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "content": response[i].content.rendered || '',
                                "slug": response[i].slug,
                                "looking": response[i].menu_order || 0,
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
    static getCareer3 = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CAREERS3, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || reviewBL,
                                "content": response[i].content.rendered || '',
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