import servBL from '../images/serv-blank.png';
export class PostCate {
    static getWoocommerce = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WOOCOMMERCE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '',
                                "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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

    static getWoocommerceDetails = (slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WOOCOMMERCEDETAIL + '&slug=' + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '',
                                "author": response[i]._embedded['author'][0].name,
                                "description": response[i]._embedded['author'][0].description,
                                "content": response[i].content.rendered || '',
                                "author_profile": (response[i]._embedded['author'] && response[i]._embedded['author'][0].avatar_urls['96']) || servBL,
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

    static getWix = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WIX, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
                                "slug": response[i].slug,
                            });
                        }
                    }
                    resolve(data)
                }).catch(err => {
                    reject(err)
                });
        })
    }
    static getVue = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_VUE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getShopify = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_SHOPIFY, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getSymfony = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_SYMFONY, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getReactNative = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_REACTNATIVE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getReact = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_REACT, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getQuality_Assurance = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_QUALITY_ASSURANCE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getProduct_Design = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_PRODUCT_DESIGN, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getPhp = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_PHP, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getOpenCart = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_OPENCART, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getMernStack = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_MERNSTACK, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getNode = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_NODE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getMobile = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_MOBILE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getWeb = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WEBSITE, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getMeanStack = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_MEANSTACK, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getMagento = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_MAGENTO, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getLaravel = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_LARAVEL, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getIos = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_IOS, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getAndroid = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_ANDROID, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getAngular = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_ANGULAR, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getIonic = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_IONIC, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getDrupal = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_DRUPAL, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getDevops_Services = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_DEVOPS_SERVICES, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getCodeigniter = (id) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CODEIGNITER + 'categories=' + id + '&per_page=6', {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getCloud_Development = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CLOUD_DEVELOPMENT, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getBootStrap = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_BOOTSTRAP, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getZEND = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_ZEND, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id, "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
    static getWordpress = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_WORDPRESS, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "date": response[i].date,
                                "name": response[i].title.rendered || '', "author": response[i]._embedded['author'][0].name,
                                "content": response[i].content.rendered || '',
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
}