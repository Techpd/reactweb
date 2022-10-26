
import reviewBL from '../images/review-blank.png';

export class Review {
    static getReview = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(process.env.REACT_APP_REVIEW, {
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
                                "designation": (response[i]['post-meta-fields'] && response[i]['post-meta-fields']['Designation']) || '',
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