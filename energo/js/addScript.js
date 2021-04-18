// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
      });
    }, false);
})();
/*var check = document.querySelector('#inlineRadio2');
		var input = document.querySelector('#openCheck');
		check.addEventListener('click', function () {
			input.classList.toggle('opacity-check');
		});
		const menuBtn = $('#inlineRadio2');
		const menu  = $('#openCheck');

			menuBtn.on('click', function() {
				if ( menu.hasClass('opacity-check') ) {
					menu.removeClass('opacity-check');
					menu.slideUp();
				} else {
					menu.addClass('opacity-check');
					menu.slideDown();
				}
			});

			$(document).click(function (e) {
				if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
					menu.slideUp();
					menuBtn.removeClass('opacity-check');
				};
			});
      */
         


            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            var nav = document.getElementById('nav');
            nav.addEventListener('click', function(e) {
            var target = e.target;

            var targetParent = target.closest('.nav-item');

            if (targetParent) {
                var subm = targetParent.getElementsByClassName('drop')[0];
    
                close();
                if (subm) {
                subm.style.display = 'block';
                }
            }
            });

            function close() {
            var s = document.getElementsByClassName('drop');
            for (var i = 0; i < s.length; i++) {
                s[i].style.display = 'none';
            };

            };