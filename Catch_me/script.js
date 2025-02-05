const box = document.getElementById('movableBox');

        function moveBox() {
            const maxWidth = window.innerWidth - box.clientWidth;
            const maxHeight = window.innerHeight - box.clientHeight;

            const randomX = Math.random() * maxWidth;
            const randomY = Math.random() * maxHeight;

            box.style.left = `${randomX}px`;
            box.style.top = `${randomY}px`;
        }

box.addEventListener('mouseover', moveBox); 