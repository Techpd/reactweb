
export class Menu {
    static getMenu = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_PRIMARY_MENU, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].ID,
                                "menu_id": response[i].menu_item_parent,
                                "name": response[i].post_title || '',
                                "class": 'nav-link',
                                "liClassName": response[i].classes[0] || '',
                                "img": response[i].image || '',
                                "to": isNaN(response[i].xfn) ? response[i].xfn : '',
                                "hash": isNaN(response[i].xfn) ? '' : 'tel:' + response[i].xfn,
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

    static getSecontryMenu = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_SECONDRY_MENU, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].ID,
                                "name": response[i].post_title || '',
                                "class": 'nav-link',
                                "liClassName": response[i].classes[0] || '',
                                "img": response[i].image || '',
                                "to": response[i].xfn || ''
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

    static getFooterHireMenu = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_FOOTER_HIRE_MENU, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].ID,
                                "name": response[i].post_title || '',
                                "class": 'nav-link',
                                "liClassName": response[i].classes[0] || '',
                                "img": response[i].image || '',
                                "to": response[i].xfn || ''
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

    static getFooterQuickLink = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_FOOTER_QUICK_LINKS_MENU, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].ID,
                                "name": response[i].post_title || '',
                                "class": 'nav-link',
                                "liClassName": response[i].classes[0] || '',
                                "img": response[i].image || '',
                                "to": isNaN(response[i].xfn) ? response[i].xfn : ''
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

    static getFooterMenu = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_FOOTER_MENU, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].ID,
                                "name": response[i].post_title || '',
                                "class": 'nav-link',
                                "liClassName": response[i].classes[0] || '',
                                "img": response[i].image || '',
                                "to": isNaN(response[i].xfn) ? response[i].xfn : '',
                                "hash": isNaN(response[i].xfn) ? '' : 'tel:' + response[i].xfn
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