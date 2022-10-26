
import servBL from '../images/serv-blank.png';

export class Work {
    static getWork = (slug) => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_CASE_STUDIES_2 + '&slug=' + slug, {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    var data = [];
                    if (response) {
                        for (var i = 0; i < response.length; i++) {
                            data.push({
                                "id": response[i].id,
                                "name": response[i].title.rendered || '',
                                "client1": response[i].about_the_client,
                                "client2": response[i].about_the_client2,
                                "challenges": response[i].the_challenge,
                                "challenges2": response[i].the_challenge2,
                                "result": response[i].the_result,
                                "result2": response[i].the_result2,
                                "solution": response[i].the_solution,
                                "solution2": response[i].the_solution2,
                                "img": (response[i]._embedded && response[i]._embedded['wp:featuredmedia'][0].source_url) || servBL,
                                "content": response[i].content.rendered || '',
                                "corporate": (response[i]['post-meta-fields'] && response[i]['post-meta-fields']['corporate']) || '',
                                "brand_logo": response[i].brand_logo_url['medium'] || servBL,
                                "pdf_file": response[i].pdf['pdf_url'] || servBL,
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