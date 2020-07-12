let h = document.querySelector("#in").addEventListener("keyup", () => {
            let va = document.querySelector("#in").value.toUpperCase()

            let names = document.querySelector("#list")
            let users = names.querySelectorAll('li#l')
            let head = names.querySelectorAll('li.h')

            head.forEach(h => {
                if (h.innerHTML.indexOf(va) > -1) {
                    h.style.display = '';
                }
                else {
                    h.style.display = 'none';
                }
            });

            users.forEach(user => {
                let s = user.querySelectorAll('a')[0]
                if (s.innerHTML.toUpperCase().indexOf(va) > -1) {
                    user.style.display = '';
                }
                else {
                    user.style.display = 'none';
                }
            })
        })