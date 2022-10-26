import servBL from '../images/serv-blank.png';
export class AboutJson {
    static getAbout = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_ABOUT, {
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
                    /*   if (response) {
                           data.push({
                               "id":response.id,
                               "name":response.title.rendered || '',
                               "content":response.content.rendered || '',
                           });
 
                   }
                 
                   resolve(response)*/
                })
                .catch(err => {
                    reject(err)
                });
        });
    }

    static gethelp = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_HELP, {
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
        });
    }

    static getStory = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_STORY, {
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
        });
    }
    static getoffice = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_OFFICE, {
                method: "GET",
            }).then(response => {
                response.json().then(response => {
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
            })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }

    static getCulture = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CULTURE, {
                method: "GET",
            }).then(response => {
                response.json().then(response => {
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
            })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })
    }
}
