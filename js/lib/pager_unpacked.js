var home_page = '/';
var urlactivepage = location.href;
var postPerPage = 5;
var pagesShown = 4;
var prevPageWord = 'Poprzednie';
var nextPageWord = 'Następne';
var nopage;
var type;
var pageNumber;
var labelName;
setupPager();

function loopPages(numberOfPosts) {
	var html = '',
		firstShownPage,
		lastShownPage,
		numberOfPages,
		showPages;
	showPages = Math.floor(pagesShown / 2);
	if (!(pagesShown % 2)) {
		pagesShown = showPages * 2 + 1;
	}
	numberOfPages = Math.ceil(numberOfPosts / postPerPage)
	firstShownPage = Math.max(pageNumber - showPages, 1);
	lastShownPage = Math.min(firstShownPage + pagesShown - 1, numberOfPages);
	html += "<span class='showpageOf'>Strona " + pageNumber + ' z ' + numberOfPages + "</span>";
	var prevPageNumber = pageNumber - 1;
	if (pageNumber > 1) {
		if (pageNumber == 2) {
			if (type == "page") {
				html += '<span class="showpage"><a href="' + home_page + '">' + prevPageWord + '</a></span>';
			} else {
				html += '<span class="showpageNum"><a href="/search/label/' + labelName + '?&max-results=' + postPerPage + '">' + prevPageWord + '</a></span>';
			}
		} else {
			html += '<span class="showpageNum"><a href="#" onclick="redirect' + type + '(' + prevPageNumber + '); return false">' + prevPageWord + '</a></span>';
		}
	}
	_.each(_.range(firstShownPage, lastShownPage + 1), function(page) {
		if (pageNumber == page) {
			html += '<span class="showpagePoint">' + page + '</span>';
		} else if (page == 1) {
			if (type == "page") {
				html += '<span class="showpageNum"><a href="' + home_page + '">1</a></span>';
			} else {
				html += '<span class="showpageNum"><a href="/search/label/' + labelName + '?&max-results=' + postPerPage + '">1</a></span>';
			}
		} else {
			html += '<span class="showpageNum"><a href="#" onclick="redirect' + type + '(' + page + '); return false">' + page + '</a></span>';
		}
	});
	var nextPageNumber = pageNumber + 1;
	if (pageNumber < numberOfPages) {
		html += '<span class="showpageNum"><a href="#" onclick="redirect' + type + '(' + nextPageNumber + '); return false">' + nextPageWord + '</a></span>';
	}
	var pageArea = document.getElementsByName("pageArea");
	var blogPager = document.getElementById("blog-pager");
	_.each(pageArea, function(pageAreaElement) {
		pageAreaElement.innerHTML = html;
	});
	if (pageArea && pageArea.length > 0) {
		html = '';
	}
	if (blogPager) {
		blogPager.innerHTML = html;
	}
}

function displayPagerWithData(root) {
	var feed = root.feed;
	var totaldata = parseInt(feed.openSearch$totalResults.$t, 10);
	loopPages(totaldata);
}

function setupPager() {
	var thisUrl = urlactivepage,
		feedUrl = '',
		labelSearch,
		pageSearch;;
	if (labelSearch = /\/search\/label\/([^\?\/$]+)/.exec(thisUrl)) {
		labelName = labelSearch[1];
	}
	if (thisUrl.indexOf("?q=") == -1 && thisUrl.indexOf(".html") == -1) {
		if (pageSearch = /#PageNo=([0-9]+)/.exec(thisUrl)) {
			pageNumber = parseInt(pageSearch[1]);
		} else {
			pageNumber = 1
		}
		if (labelSearch) {
			type = "label";
			feedUrl = '/-/' + labelName;
		} else {
			type = "page";
		}
		document.write('<script src="' + home_page + 'feeds/posts/summary' + feedUrl + '?alt=json-in-script&callback=displayPagerWithData&max-results=1" ><\/script>');
	}
}

function redirectpage(numberpage) {
	jsonstart = (numberpage - 1) * postPerPage;
	nopage = numberpage;
	var nBody = document.getElementsByTagName('head')[0];
	var newInclude = document.createElement('script');
	newInclude.type = 'text/javascript';
	newInclude.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
	nBody.appendChild(newInclude)
}

function redirectlabel(numberpage) {
	jsonstart = (numberpage - 1) * postPerPage;
	nopage = numberpage;
	var nBody = document.getElementsByTagName('head')[0];
	var newInclude = document.createElement('script');
	newInclude.type = 'text/javascript';
	newInclude.setAttribute("src", home_page + "feeds/posts/summary/-/" + labelName + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
	nBody.appendChild(newInclude)
}

function finddatepost(root) {
	post = root.feed.entry[0];
	var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
	var timestamp = encodeURIComponent(timestamp1);
	if (type == "page") {
		var alamat = "/search?updated-max=" + timestamp + "&max-results=" + postPerPage + "#PageNo=" + nopage
	} else {
		var alamat = "/search/label/" + labelName + "?updated-max=" + timestamp + "&max-results=" + postPerPage + "#PageNo=" + nopage
	}
	location.href = alamat
}