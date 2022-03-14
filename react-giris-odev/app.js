import axios from "axios"; // npm i axios ile yüklediğimiz axios kütüphanesini buraya çağırdık.

async function getData (user_id) { //async fonksiyon oluşturduk ki await ile yazılmış kodlarımızı sırası ile çalıştırabilelim.
    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id) // axios ile users bilgilerini aldık ve user_id ile birlikte fonksiyon çağırılırken girdiğimiz parametre numarasını adresin sonuna yazdırdık. Data gelince de koda devam ettik.

    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id) // aynı işlemi burada da yaptık.

    console.log("Users: ", user, "Posts: ", post); // console.log içerisinde gelen iki datayı da birleştirdik.
}

export default getData; // Başka .js dosyalarına çağırabilmek için fonksiyonumuzu export ettik. (index.js'de kullanmak üzere)