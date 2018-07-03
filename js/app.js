const cards = [
    { account: "zoooomzoooom", price: "10", tags: ['zoomzoom'], badge: 'NEW' },
    { account: "zoooomzoooom", price: "10", tags: ['zoomzoom'], badge: 'PREMIUM' },
    { account: "zzzzzzkkkkkk", price: "10", tags: ['张凯', '6个z 6个k'] },
    { account: "geeeeeeeeeek", price: "10" },
    { account: "geeeeeeeeeek", price: "10" },
    { account: "geeeeeeeeeek", price: "10" },
    { account: "geeeeeeeeeek", price: "10", tags: ['geek'] }];
    

const badges = ["badge-primary", "badge-success", "badge-danger", "badge-warning", "badge-info"];

$(function () {
    let html = "";

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let tags = "";

        if (card.tags) {
            for (let j = 0; j < card.tags.length; j++) {
                let tag = card.tags[j];

                tags += `<span class="badge badge-pill ${badges[j % badges.length]}"> ${ tag }</span > `
            }
        }
        
        html += `
            <div class="col-md-6 col-lg-4 col-xl-3 mt-2 mb-4">
                <div class="card h-100">
                    <!-- <div class="card-header">${card.account} <span class="badge badge-warning">${card.badge ? card.badge : ''}</span></div> -->
                    <div class="card-body">
                        <h5 class="card-title">${card.account} <span class="badge badge-warning">${card.badge ? card.badge : ''}</span></h5>
                        <p class="card-text">${tags}</p>
                        <!-- <p class="card-text">description</p> -->
                        <!-- <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p> -->
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <small class="text-muted">价格: ${card.price} EOS</small>
                        <button class="btn btn-outline-secondary btn-sm float-right" data-toggle="tooltip" data-placement="top" data-html="true" title="<img class='img-thumbnail' style='height: 130px;' src='./assets/qrcodes/${card.account}.png' />">微信联系</button>
                    </div>
                </div>
            </div>
        `
    }

    $("#cards").html(html);

    $('[data-toggle="tooltip"]').tooltip({ template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner bg-transparent"></div></div>' })
});