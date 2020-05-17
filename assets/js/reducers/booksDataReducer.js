export const booksDataReducer = () => {
	return [
		{
			id: 1,
			title: 'Becoming',
			author: 'Michelle OBAMA',
			category: 'Memory',
			published: 2018,
			coverURL:
				'https://www.statefarmarena.com/assets/img/MichelleObama-590x590-StateFarm-56b2d1571b.jpg',
			review: `Becoming is the memoir of former United States first lady Michelle Obama published in 2018.[1][2] Described by the author as a deeply personal experience,[3] the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother.[4] The book is published by Crown and was released in 24 languages.[4] One million copies were donated to First Book, an American nonprofit organization which provides books to children.`
		},
		{
			id: 2,
			title: 'Strength to Love',
			author: 'Martin Luther King Jr',
			category: 'History',
			published: 1963,
			coverURL: 'https://images.penguinrandomhouse.com/cover/9780807051900',
			review: `King's writings reflect his deep understanding for the need of agape, a love that is concerned with going the extra mile to ensure the well-being of others. King believed in a better world, but in order to attain his vision we must first face our fears and then master these fears through courage, love, and faith. He preached of courage that all Christians should show in their nonviolent stand against segregation, although he did believe that all people could possess this strength of courage for we are all made in the image of God. This courage is the strength to hope for better days, the strength to have faith in the Lord, and most of all the strength to love all of God's children no matter their skin color.[1]`
		},
		{
			id: 3,
			title: 'The Lord of the Rings',
			author: '	J. R. R. Tolkien',
			category: 'Adventure',
			published: 1954,
			coverURL:
				'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
			review: `The Lord of the Rings is an epic[1] high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.[2]`
		},

		{
			id: 4,
			title: 'To Kill a Mockingbird',
			author: 'Harper Lee',
			category: 'Adventure',
			published: 1960,
			coverURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
			review: `To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.`
		},

		{
			id: 5,
			title: 'The Glass Hotel',
			author: '	Emily St. John Mandel',
			category: 'Adventure',
			published: 2020,
			coverURL:
				'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/The_Glass_Hotel_%28Emily_St._John_Mandel%29.png/220px-The_Glass_Hotel_%28Emily_St._John_Mandel%29.png',
			review: `The Glass Hotel is a 2020 novel by Emily St. John Mandel. It is Mandel's fifth novel, and the first since winning the Arthur C. Clarke Award in 2015.[2] It follows the aftermath of a disturbing graffiti incident at a hotel on Vancouver Island and the collapse of an international Ponzi scheme.`
		},
		{
			id: 6,
			title: 'The Mirror and the Light',
			author: 'Hilary Mantel',
			category: 'Historical fiction',
			published: 2020,
			coverURL:
				'https://www.theglobeandmail.com/resizer/DfSV-RiYEiRC6kEqXCawcQFXvTc=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/4QTZ523IONHK5HDITR5BHKUMDA.jpg',
			review: `The Mirror & The Light is a historical novel by English writer Hilary Mantel. Following Wolf Hall (2009) and Bring Up the Bodies (2012), it is the final installment in her trilogy charting the rise and fall of Thomas Cromwell, the powerful minister in the court of King Henry VIII. It covers the final four years of Cromwell's life, from 1536 until his death by execution in 1540.`
		},
		{
			id: 7,
			title: 'Dare Not Linger',
			author: 'Nelson Mandela',
			category: 'History',
			published: 2017,
			coverURL:
				'https://www.nelsonmandela.org/uploads/files/_600xAUTO_crop_center-center/NMFDNLbottom.png',
			review: `Dare Not Linger: The Presidential Years is a book by Nelson Mandela and Mandla Langa describing Mandela's term as President of South Africa. It was published in 2017, four years after Mandela's death, and is based on an unfinished memoir that Mandela had worked on after his term as president, as well as archive material and interviews, and has a prologue by Graça Machel.[1][2] The title comes from the closing sentence of Mandela's 1994 autobiography Long Walk to Freedom: "But I can only rest for a moment, for with freedom comes responsibilities, and I dare not linger, for my long walk is not ended.`
		},
		{
			id: 8,
			title: 'The Splendid Table',
			author: 'Francis Lam',
			category: 'Food & Drink',
			published: 1997,
			coverURL: 'https://m.media-amazon.com/images/I/51+ID6sEpPL.jpg',
			review: `The Splendid Table is a weekly radio program about food hosted by Francis Lam. The program began in 1997 on Minnesota Public Radio, and was originally hosted by Lynne Rossetto Kasper until her retirement in 2017.[1][2][3] It is produced and distributed by American Public Media and airs weekends nationwide on public radio stations. It provides listeners with information on food preparation, appreciation, and culture. The program features travel-related material on restaurants and cuisine from around the country and the world, and also features talk segments in which the host takes calls from listeners with food-related questions. Guests vary from week to week, but have longtime contributors such as food writers Jane and Michael Stern.`
		},
		{
			id: 9,
			title: 'The Complete Redux',
			author: ' Boris Dinkevich',
			category: 'Technology',
			published: 2018,
			coverURL:
				'https://d2sofvawe08yqg.cloudfront.net/redux-book/hero2x?1549474190',
			review: `Redux might be one of the smallest libraries in the JS world, but it is having a huge impact on modern web development.  An array of new concepts and ideas make Redux both challenging to understand and extremely powerful to use.

In this book you will learn about the inner workings of Redux, and how to use it to solve real-world challenges. We’ll teach you about everything you need to know to use this valuable tool effectively, including store enhancers, normalized state, unit testing, using third-party libraries, and much, much more..`
		}
	];
};
