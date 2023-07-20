const todos = JSON.parse(localStorage.getItem('todos')) || [];


const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('dblclick', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            actualizaTodos(todos)
            render()
        })

    })
}

const actualizaTodos = (todos) => {

    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)


}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo')
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos)
        render()


    }
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

}


function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function spin() {
    // Play the sound
    wheel.play();
    // Inisialisasi variabel
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
    // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
    // Item berupa ipad dan samsung tab tidak akan pernah menang.
    // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);

    // Bentuk acak
    let Hasil = shuffle([
        MagicRoaster[0],
        Sepeda[0],
        RiceCooker[0],
        LunchBox[0],
        Sanken[0],
        Electrolux[0],
        JblSpeaker[0],
    ]);
    // console.log(Hasil[0]);

    // Ambil value item yang terpilih
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Sandwich";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "Fajitas";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "Papas Fritas";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "Bowl";
    if (Sanken.includes(Hasil[0])) SelectedItem = "Ahorrar";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "Pizza";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = "Sushi";

    // Proses
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000);

    // Munculkan Alert
    setTimeout(function () {
        applause.play();
        swal(
            "Felicidades",
            "Ahora comeremos " + SelectedItem + ".",

        );
    }, 5500);

    // Delay and set to normal state
    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}

