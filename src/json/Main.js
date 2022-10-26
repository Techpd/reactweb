
import servBL from '../images/serv-blank.png';

export class Main {
    static getMAIN_TITLE = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_MAIN_TITLE, {
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

    static getService = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_SERVICES, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
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
    static getTechnology = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_TECHNOLOGY, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
                                "acf": response[i].acf,
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

    static getTeam = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_TEAM, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
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

    static getCareer = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CAREER, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": response[i]._embedded['wp:featuredmedia'][0].source_url || '',
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

    static getchoose = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CHOOSE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": response[i]._embedded['wp:featuredmedia'][0].source_url || servBL,
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

    static getchoose2 = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CHOOSE2, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "img": response[i]._embedded['wp:featuredmedia'][0].source_url || servBL,
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