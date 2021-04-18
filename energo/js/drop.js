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