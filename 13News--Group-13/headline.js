	var xhttp = new XMLHttpRequest();
    const list_berita = document.getElementById('berita');
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                    var data=JSON.parse(xhttp.responseText);
                    data.forEach(function(berita) {
                    document.getElementById("berita").innerHTML +=
						`
                <div class="col-md-12 d-sm-flex p-3" style="display:flex">
                    <div class="col-md-5">
                        <div class="fh5co_hover_news_img">
                         <img src="${berita.urlToImage}" class="responsive-img" style="width:100%">
                        
                        </div>
                    </div>
                    <div class="col-md-7">
                        <a href="${berita.url}" class="fh5co_magna py-2">${berita.title}</a><br>
                        <p class="fh5co_mini_time"> Published on: ${berita.publishedAt}</p>
                        <div class="fh5co_consectetur"> 
                            <p>${berita.description}</p>
                            <a href="${berita.url}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>

            `;
                      });
                        }
                    };
                    xhttp.open("GET", "data.json", true);
                    xhttp.send();
                    const list_items = list_berita
                    const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_berita, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_berita, rows, current_page);
SetupPagination(list_items, pagination_element, rows);