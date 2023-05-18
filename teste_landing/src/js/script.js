jsonGet();

function jsonGet() {
	this.classcarousel = document.getElementById('carouselInner');
	this.prod=``;
	let json = fetch('https://raw.githubusercontent.com/olhosespanhois/teste-propz/main/teste_landing/src/js/teste.json').then(resposta => resposta.json());
	json.then(dados => {
		let product = dados;
		for (var i = 0; i < product.length; i++) {
			const valueten = product[i].price_ldj / 10;
			const valuefifteen = (product[i].price_ldj / 15) + 4.80;
			this.prod += `
			<div class='carousel-item ${i == 0? 'active' : ''}'>
				<div class='row px-4 px-lg-5'>
					<div class='col-12 col-md-6'>
						<img src="${product[i].img_product}" class="img-fluid" alt="" srcset="${product[i].img_product}">
					</div>
					<div class='col-12 col-md-6'>
						<div id="product-propz" class='row'>
							<div class='col-12 border-product'>
								<div class='row py-3'>
									<div class='col-8'>${product[i].name_produto}</div>
									<div class='col-4 text-end d-flex justify-content-end'>
										<span class="align-self-end">${product[i].ml_product} ml</span>
									</div>
								</div>
							</div>
							<div class='col-12 border-product'>
								<div class='row py-3'>
									<div class='col-7 pb-2'>
										<p class='values m-0'>10X <small class='align-text-top'>R$</small>${valueten.toFixed(2)}</p>
										<small>sem juros</small>
									</div>
									<div class='col-5 pb-2 text-end icons-product'>
										<i class="fa-brands fa-cc-visa"></i> <i class="fa-brands fa-cc-mastercard"></i>
									</div>
									<div class='col-7 pb-2'>
										<p class='values m-0'>15X <small class='align-text-top'>R$</small>${valuefifteen.toFixed(2)}</p>
										<small>com juros</small>
									</div>
									<div class='col-5 pb-2'>
										<small> ou R$${product[i].price_ldj} à vista</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
		}

		this.classcarousel.innerHTML = this.prod;
	});
}