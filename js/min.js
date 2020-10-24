		 // Porfolio isotope and filter
 					var $x = $('.gallery').isotope({
				  // options
					itemSelector: '.gallery-item',
					layoutMode: 'fitRows'
				});
			
			// filter items on button click
			$('#Portfolio').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $x.isotope({ filter: filterValue });
			});
			
			// change is-checked class on buttons
			$('#Portfolio').each( function( i, buttonGroup ) {
			  var $buttonGroup = $( buttonGroup );
			  $buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.active').removeClass('active');
				$( this ).addClass('active');
			  });
			});


