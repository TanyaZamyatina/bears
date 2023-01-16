var article_1 = {
	'foto' : 'img/Baribal.jpg',
	'title': 'Барибал (черный медведь)',
	'intro': 'Достаточно любвеобильный и доброжелательный медведь. Животное может впадать в спячку на семь месяцев. Предпочитает есть фрукты, растения и орешки, хотя не прочь полакомиться мясом и насекомыми.'
};

var article_2 = {
	'foto': 'img/Grizzly.jpg',
	'title': 'Гризли',
	'intro': 'Одни из самых больших представителей хищников на планете. Максимальный рост медведя может составлять 2,8 метра, вес – более 600 кг. Данный представитель семейства очень любит рыбу и является прекрасным рыболовом.'
};

var article_3 = {
	'foto': 'img/Spectacled bear.jpg',
	'title': 'Очковый медведь',
	'intro': 'Относится к растительноядным животным. Характерной особенностью млекопитающего являются белые пятна, расположенные вокруг глаз. Также животное отличается округлой головой и коротким рылом. Встретиться с медведем можно в Южной Америке.'
};

var article_4 = {
	'foto': 'img/Malayan bear.jpg',
	'title': 'Бируанг или малайский медведь',
	'intro': 'Относится к самым маленьким медведям. Встретить его можно в Азии. Отличительной особенностью животного является черная шубка, желтая подкова на груди, из-за которой его часто называют солнечным мишкой. Данный вид семейства отлично лазает по деревьям благодаря острым когтям, с помощью которых можно легко зацепиться на кору. Не смотря на небольшой размер животных, они считаются самыми агрессивными среди представителей семейства.'
};

var article_5 = {
	'foto': 'img/Himalayan bear.jpg',
	'title': 'Гималайский медведь',
	'intro': 'Считается одним из менее опасных медведей для человека, так как животное может напасть только в случае защиты детенышей или серьезного ранения. Млекопитающие имеют круглую голову, большие уши и желтое пятно на груди в виде полумесяца. Мордочка медведя светлая, шубка темная. Как правило, в спячку животное не впадает, но может намеренно заснуть, чтобы переждать суровую погоду.'
};

var article_6 = {
	'foto': 'img/Grolar.jpg',
	'title': 'Гролар (полярный Гризли)',
	'intro': 'Это хищное животное, являющееся гибридом полярного и бурого медведя. Этот вид сочетает в себе признаки Гризли: незаметные черты лица, пятна рядом с носом и глазами, крепкие когти, однако мех у особей светлого цвета и поведение очень схоже со встречающимся у полярных мишек. Важно отметить, что генетика «родителей» имеет много общих черт, потому гибрид получился вполне гармоничным.  В условиях дикой природы эти медведи встречаются не очень часто, но обычно они обитают в местах с низкими температурами и суровыми погодными условиями. Рацион гроларов полностью состоит из мясной пищи, а сами животные агрессивны и осмотрительны.'
};

var article_7 = {
	'foto': 'img/Brown panda.jpg',
	'title': 'Коричневая панда',
	'intro': 'Это подвид, который относится к отряду хищных. Он был обнаружен во второй половине прошлого века, однако ученые относили его к циньлинской популяции Ailuropoda melanoleuca очень долго и после 45 лет его все же выделили в подвид. Размер особей чуть меньше, чем у черно-белых панд. Еще одной отличительной чертой является коричневый или светло-коричневый окрас. У животных также небольшой череп и массивные коренные зубы. Численность животных крайне мала – всего насчитывают 300 особей, размножаются они очень неохотно, что затрудняет увеличение популяции. Обычно коричневые панды обитают в горах Циньлин в Китае и питаются бамбуком.'
};

var article_8 = {
	'foto': 'img/Red panda.jpg',
	'title': 'Малая панда',
	'intro': 'Ранее животных относили к енотам, потому как с виду они похожи на больших кошек. Сегодня же малую панду считают медведем, так как по характеру она схожа с данным семейством.'
};

var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];


// C какого элемента по индексу начинать. Изначально с индекса 0 (первый элемент)
var start = 0;

$("#loadMore").on("click", function () {
	var htmlToInsert = ''; // Сюда запишем весь HTML для размещения на странице
	
	for(var i = start; i < articles.length; i++) {
		if(i > 3 + start) // Всегда отображаем лишь по 4 статьи, поэтому если больше 3, то выходим из цикла
			break;
		htmlToInsert += "<div class='article'><img class='img' src='" + articles[i].foto + "' alt='" + articles[i].title + "'><h2>" + articles[i].title + "</h2><p> " + articles[i].intro + "</p><button class='bt btn btn-warning text-dark'>Читать далее</button></div>";
		
		//Если индекс равен количеству элементов и -1, то мы скрываем кнопку 
		if(i == articles.length -1) {
			$(".more").hide();
			break;
		}
	}

	start += 4; // Добавляем 4, чтобы в следующий раз начинали с тех статей, которые еще не отображены

	$(".more").before(htmlToInsert); //Выше кнопки вставляем новые статьи
});

$(".formSearch").hide();

$(".search").on("click", function () {
	$(".formSearch").show();
});

$(".close").on("click", function () {
	$(".formSearch").hide();
});

$(".up-btn").on("click", function() {
	$("html, body").animate({
		scrollTop: 0
	}, 'slow');
});